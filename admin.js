// Admin Dashboard JavaScript for Contact Form Management
class AdminDashboard {
    constructor() {
        this.apiUrl = 'http://localhost:3000/api'; // Backend API URL
        this.currentPage = 1;
        this.itemsPerPage = 20;
        this.currentFilter = 'all';
    }

    // Initialize the dashboard
    async init() {
        try {
            this.bindEvents();
            await this.loadStats();
            await this.loadContacts();
            this.setupAutoRefresh();
        } catch (error) {
            console.error('AdminDashboard initialization failed:', error);
            this.showError('Failed to initialize admin dashboard');
        }
    }

    // Bind event handlers
    bindEvents() {
        // Filter change
        const statusFilter = document.getElementById('statusFilter');
        if (statusFilter) {
            statusFilter.addEventListener('change', (e) => {
                this.currentFilter = e.target.value;
                this.currentPage = 1;
                this.loadContacts();
            });
        }

        // Refresh button
        const refreshBtn = document.getElementById('refreshBtn');
        if (refreshBtn) {
            refreshBtn.addEventListener('click', () => this.refresh());
        }

        // Export button
        const exportBtn = document.getElementById('exportBtn');
        if (exportBtn) {
            exportBtn.addEventListener('click', () => this.exportContacts());
        }

        // Pagination
        document.addEventListener('click', (e) => {
            if (e.target.classList.contains('page-btn')) {
                this.currentPage = parseInt(e.target.dataset.page);
                this.loadContacts();
            }
        });
    }

    // Load dashboard statistics
    async loadStats() {
        try {
            const response = await fetch(`${this.apiUrl}/admin/stats`);
            const data = await response.json();

            if (data.success) {
                this.updateStatsDisplay(data.stats);
            }
        } catch (error) {
            console.error('Error loading stats:', error);
            this.showError('Failed to load statistics');
        }
    }

    // Update statistics display
    updateStatsDisplay(stats) {
        const statElements = {
            'totalContacts': stats.total || 0,
            'newContacts': stats.new || 0,
            'readContacts': stats.read || 0,
            'repliedContacts': stats.replied || 0,
            'spamContacts': stats.spam || 0,
            'todayContacts': stats.today || 0,
            'weekContacts': stats.thisWeek || 0
        };

        Object.entries(statElements).forEach(([id, value]) => {
            const element = document.getElementById(id);
            if (element) {
                element.textContent = value;
            }
        });
    }

    // Load contacts list
    async loadContacts() {
        try {
            this.showLoading(true);

            const params = new URLSearchParams({
                page: this.currentPage,
                limit: this.itemsPerPage,
                status: this.currentFilter
            });

            const response = await fetch(`${this.apiUrl}/admin/contacts?${params}`);
            const data = await response.json();

            if (data.success) {
                this.renderContactsTable(data.contacts);
                this.renderPagination(data.pagination);
            } else {
                this.showError(data.message || 'Failed to load contacts');
            }
        } catch (error) {
            console.error('Error loading contacts:', error);
            this.showError('Failed to load contacts');
        } finally {
            this.showLoading(false);
        }
    }

    // Render contacts table
    renderContactsTable(contacts) {
        const tbody = document.getElementById('contactsTableBody');
        if (!tbody) return;

        if (contacts.length === 0) {
            tbody.innerHTML = `
                <tr>
                    <td colspan="7" class="text-center">No contacts found</td>
                </tr>
            `;
            return;
        }

        tbody.innerHTML = contacts.map(contact => `
            <tr class="${contact.isSpam ? 'spam-row' : ''} ${contact.status === 'new' ? 'new-row' : ''}">
                <td>
                    <input type="checkbox" class="contact-checkbox" value="${contact.id}">
                </td>
                <td>#${contact.id}</td>
                <td>
                    <div class="contact-info">
                        <strong>${this.escapeHtml(contact.name)}</strong>
                        <br>
                        <small>${this.escapeHtml(contact.email)}</small>
                    </div>
                </td>
                <td>${this.escapeHtml(contact.subject || 'No subject')}</td>
                <td>
                    <div class="message-preview">
                        ${this.truncateText(this.escapeHtml(contact.message), 100)}
                    </div>
                </td>
                <td>
                    <span class="status-badge status-${contact.status}">
                        ${contact.status.charAt(0).toUpperCase() + contact.status.slice(1)}
                    </span>
                    ${contact.isSpam ? '<span class="spam-badge">SPAM</span>' : ''}
                </td>
                <td>
                    <small>${this.formatDate(contact.createdAt)}</small>
                </td>
                <td>
                    <div class="action-buttons">
                        <button class="btn btn-sm" onclick="adminDashboard.viewContact(${contact.id})" title="View">
                            👁️
                        </button>
                        <select class="status-select" onchange="adminDashboard.updateContactStatus(${contact.id}, this.value)">
                            <option value="new" ${contact.status === 'new' ? 'selected' : ''}>New</option>
                            <option value="read" ${contact.status === 'read' ? 'selected' : ''}>Read</option>
                            <option value="replied" ${contact.status === 'replied' ? 'selected' : ''}>Replied</option>
                            <option value="archived" ${contact.status === 'archived' ? 'selected' : ''}>Archived</option>
                        </select>
                        ${!contact.isSpam ? `
                            <button class="btn btn-danger btn-sm" onclick="adminDashboard.markAsSpam(${contact.id})" title="Mark as Spam">
                                🚫
                            </button>
                        ` : ''}
                    </div>
                </td>
            </tr>
        `).join('');
    }

    // Render pagination
    renderPagination(pagination) {
        const paginationContainer = document.getElementById('pagination');
        if (!paginationContainer) return;

        const { currentPage, totalPages, totalItems } = pagination;
        
        let paginationHTML = `
            <div class="pagination-info">
                Showing page ${currentPage} of ${totalPages} (${totalItems} total items)
            </div>
            <div class="pagination-buttons">
        `;

        // Previous button
        if (currentPage > 1) {
            paginationHTML += `<button class="btn page-btn" data-page="${currentPage - 1}">Previous</button>`;
        }

        // Page numbers
        const startPage = Math.max(1, currentPage - 2);
        const endPage = Math.min(totalPages, currentPage + 2);

        for (let i = startPage; i <= endPage; i++) {
            const isActive = i === currentPage ? 'active' : '';
            paginationHTML += `<button class="btn page-btn ${isActive}" data-page="${i}">${i}</button>`;
        }

        // Next button
        if (currentPage < totalPages) {
            paginationHTML += `<button class="btn page-btn" data-page="${currentPage + 1}">Next</button>`;
        }

        paginationHTML += '</div>';
        paginationContainer.innerHTML = paginationHTML;
    }

    // View contact details
    async viewContact(contactId) {
        try {
            const response = await fetch(`${this.apiUrl}/admin/contacts/${contactId}`);
            const data = await response.json();

            if (data.success) {
                this.showContactModal(data.contact);
            } else {
                this.showError('Failed to load contact details');
            }
        } catch (error) {
            console.error('Error loading contact:', error);
            this.showError('Failed to load contact details');
        }
    }

    // Show contact modal
    showContactModal(contact) {
        const modalHTML = `
            <div class="modal-overlay" onclick="this.remove()">
                <div class="modal-content" onclick="event.stopPropagation()">
                    <div class="modal-header">
                        <h3>Contact Details #${contact.id}</h3>
                        <button class="close-btn" onclick="this.closest('.modal-overlay').remove()">×</button>
                    </div>
                    <div class="modal-body">
                        <div class="contact-details">
                            <div class="detail-row">
                                <strong>Name:</strong> ${this.escapeHtml(contact.name)}
                            </div>
                            <div class="detail-row">
                                <strong>Email:</strong> 
                                <a href="mailto:${contact.email}">${this.escapeHtml(contact.email)}</a>
                            </div>
                            <div class="detail-row">
                                <strong>Subject:</strong> ${this.escapeHtml(contact.subject || 'No subject')}
                            </div>
                            <div class="detail-row">
                                <strong>Message:</strong>
                                <div class="message-content">${this.escapeHtml(contact.message).replace(/\n/g, '<br>')}</div>
                            </div>
                            <div class="detail-row">
                                <strong>Status:</strong> 
                                <span class="status-badge status-${contact.status}">${contact.status}</span>
                                ${contact.isSpam ? '<span class="spam-badge">SPAM</span>' : ''}
                            </div>
                            <div class="detail-row">
                                <strong>Submitted:</strong> ${this.formatDate(contact.createdAt)}
                            </div>
                            <div class="detail-row">
                                <strong>IP Address:</strong> ${contact.ipAddress || 'Unknown'}
                            </div>
                            ${contact.emailSent ? `
                                <div class="detail-row">
                                    <strong>Email Sent:</strong> ${this.formatDate(contact.emailSentAt)}
                                </div>
                            ` : ''}
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button class="btn" onclick="window.open('mailto:${contact.email}?subject=Re: ${encodeURIComponent(contact.subject || 'Your inquiry')}&body=Dear ${encodeURIComponent(contact.name)},%0A%0AThank you for contacting us.')">Reply</button>
                        <button class="btn btn-danger" onclick="adminDashboard.markAsSpam(${contact.id}); this.closest('.modal-overlay').remove();">Mark as Spam</button>
                        <button class="btn" onclick="this.closest('.modal-overlay').remove()">Close</button>
                    </div>
                </div>
            </div>
        `;

        document.body.insertAdjacentHTML('beforeend', modalHTML);
    }

    // Update contact status
    async updateContactStatus(contactId, newStatus) {
        try {
            const response = await fetch(`${this.apiUrl}/admin/contacts/${contactId}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ status: newStatus })
            });

            const data = await response.json();

            if (data.success) {
                this.showSuccess('Status updated successfully');
                await this.loadStats();
                await this.loadContacts();
            } else {
                this.showError(data.message || 'Failed to update status');
            }
        } catch (error) {
            console.error('Error updating status:', error);
            this.showError('Failed to update status');
        }
    }

    // Mark contact as spam
    async markAsSpam(contactId) {
        if (!confirm('Are you sure you want to mark this contact as spam?')) {
            return;
        }

        try {
            const response = await fetch(`${this.apiUrl}/admin/contacts/${contactId}/spam`, {
                method: 'POST'
            });

            const data = await response.json();

            if (data.success) {
                this.showSuccess('Contact marked as spam');
                await this.loadStats();
                await this.loadContacts();
            } else {
                this.showError(data.message || 'Failed to mark as spam');
            }
        } catch (error) {
            console.error('Error marking as spam:', error);
            this.showError('Failed to mark as spam');
        }
    }

    // Export contacts
    async exportContacts() {
        try {
            const response = await fetch(`${this.apiUrl}/admin/contacts?limit=1000&page=1`);
            const data = await response.json();

            if (data.success) {
                this.downloadCSV(data.contacts);
            } else {
                this.showError('Failed to export contacts');
            }
        } catch (error) {
            console.error('Error exporting contacts:', error);
            this.showError('Failed to export contacts');
        }
    }

    // Download contacts as CSV
    downloadCSV(contacts) {
        const headers = ['ID', 'Name', 'Email', 'Subject', 'Message', 'Status', 'Is Spam', 'Submitted', 'Email Sent'];
        const csvContent = [
            headers.join(','),
            ...contacts.map(contact => [
                contact.id,
                `"${contact.name.replace(/"/g, '""')}"`,
                contact.email,
                `"${(contact.subject || '').replace(/"/g, '""')}"`,
                `"${contact.message.replace(/"/g, '""')}"`,
                contact.status,
                contact.isSpam ? 'Yes' : 'No',
                contact.createdAt,
                contact.emailSent ? 'Yes' : 'No'
            ].join(','))
        ].join('\n');

        const blob = new Blob([csvContent], { type: 'text/csv' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `contacts-${new Date().toISOString().split('T')[0]}.csv`;
        a.click();
        window.URL.revokeObjectURL(url);
    }

    // Refresh dashboard
    async refresh() {
        await this.loadStats();
        await this.loadContacts();
        this.showSuccess('Dashboard refreshed');
    }

    // Setup auto-refresh
    setupAutoRefresh() {
        setInterval(() => {
            this.loadStats();
        }, 30000); // Refresh stats every 30 seconds
    }

    // Utility functions
    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    truncateText(text, maxLength) {
        if (text.length <= maxLength) return text;
        return text.substring(0, maxLength) + '...';
    }

    formatDate(dateString) {
        return new Date(dateString).toLocaleString();
    }

    showLoading(show) {
        const loader = document.getElementById('loadingIndicator');
        if (loader) {
            loader.style.display = show ? 'block' : 'none';
        }
    }

    showError(message) {
        this.showNotification(message, 'error');
    }

    showSuccess(message) {
        this.showNotification(message, 'success');
    }

    showNotification(message, type) {
        const notification = document.createElement('div');
        notification.className = `notification ${type}`;
        notification.textContent = message;
        document.body.appendChild(notification);

        setTimeout(() => {
            notification.remove();
        }, 5000);
    }
}

// Global instance
let adminDashboard;

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    adminDashboard = new AdminDashboard();
    adminDashboard.init();
});

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = AdminDashboard;
}
