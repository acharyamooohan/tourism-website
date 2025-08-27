// Contact form handling for Nepal Tourism Website
class ContactFormHandler {
    constructor() {
        this.apiUrl = 'http://localhost:3000/api'; // Backend API URL
        this.isSubmitting = false;
    }

    // Initialize contact form
    init() {
        this.bindEvents();
        this.setupValidation();
    }

    // Bind form events
    bindEvents() {
        const contactForm = document.getElementById('contactForm');
        if (contactForm) {
            contactForm.addEventListener('submit', (e) => this.handleSubmit(e));
        }

        // Real-time validation
        const inputs = ['name', 'email', 'subject', 'message'];
        inputs.forEach(inputName => {
            const input = document.getElementById(inputName);
            if (input) {
                input.addEventListener('blur', () => this.validateField(inputName));
                input.addEventListener('input', () => this.clearError(inputName));
            }
        });
    }

    // Setup form validation rules
    setupValidation() {
        this.validationRules = {
            name: {
                required: true,
                minLength: 2,
                maxLength: 100,
                pattern: /^[a-zA-Z\s\-'\.]+$/,
                message: 'Name must be 2-100 characters and contain only letters, spaces, hyphens, apostrophes, and periods'
            },
            email: {
                required: true,
                pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: 'Please enter a valid email address'
            },
            subject: {
                required: false,
                maxLength: 200,
                message: 'Subject must be less than 200 characters'
            },
            message: {
                required: true,
                minLength: 10,
                maxLength: 2000,
                message: 'Message must be between 10 and 2000 characters'
            }
        };
    }

    // Validate individual field
    validateField(fieldName) {
        const field = document.getElementById(fieldName);
        const rules = this.validationRules[fieldName];
        
        if (!field || !rules) return true;

        const value = field.value.trim();
        let isValid = true;
        let errorMessage = '';

        // Required field check
        if (rules.required && !value) {
            isValid = false;
            errorMessage = `${fieldName.charAt(0).toUpperCase() + fieldName.slice(1)} is required`;
        }
        // Length checks
        else if (value && rules.minLength && value.length < rules.minLength) {
            isValid = false;
            errorMessage = rules.message;
        }
        else if (value && rules.maxLength && value.length > rules.maxLength) {
            isValid = false;
            errorMessage = rules.message;
        }
        // Pattern check
        else if (value && rules.pattern && !rules.pattern.test(value)) {
            isValid = false;
            errorMessage = rules.message;
        }

        this.showFieldError(fieldName, isValid ? '' : errorMessage);
        return isValid;
    }

    // Validate entire form
    validateForm() {
        const fields = Object.keys(this.validationRules);
        let isValid = true;

        fields.forEach(fieldName => {
            if (!this.validateField(fieldName)) {
                isValid = false;
            }
        });

        return isValid;
    }

    // Show field error
    showFieldError(fieldName, message) {
        const field = document.getElementById(fieldName);
        const errorElement = document.getElementById(`${fieldName}Error`);
        
        if (errorElement) {
            errorElement.textContent = message;
            errorElement.style.display = message ? 'block' : 'none';
        }

        if (field) {
            if (message) {
                field.classList.add('error');
            } else {
                field.classList.remove('error');
            }
        }
    }

    // Clear field error
    clearError(fieldName) {
        this.showFieldError(fieldName, '');
    }

    // Handle form submission
    async handleSubmit(event) {
        event.preventDefault();

        if (this.isSubmitting) return;

        // Validate form
        if (!this.validateForm()) {
            this.showMessage('Please fix the errors above', 'error');
            return;
        }

        this.isSubmitting = true;
        this.showLoading(true);

        try {
            const formData = this.getFormData();
            const response = await this.submitForm(formData);

            if (response.success) {
                this.showMessage(response.message, 'success');
                this.resetForm();
            } else {
                this.showMessage(response.message || 'An error occurred', 'error');
            }
        } catch (error) {
            console.error('Form submission error:', error);
            this.showMessage('Failed to send message. Please try again later.', 'error');
        } finally {
            this.isSubmitting = false;
            this.showLoading(false);
        }
    }

    // Get form data
    getFormData() {
        return {
            name: document.getElementById('name').value.trim(),
            email: document.getElementById('email').value.trim(),
            subject: document.getElementById('subject')?.value.trim() || '',
            message: document.getElementById('message').value.trim()
        };
    }

    // Submit form to backend
    async submitForm(formData) {
        const response = await fetch(`${this.apiUrl}/contact`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        if (!response.ok) {
            const errorData = await response.json().catch(() => ({}));
            throw new Error(errorData.message || `HTTP ${response.status}`);
        }

        return await response.json();
    }

    // Show loading state
    showLoading(isLoading) {
        const submitBtn = document.querySelector('#contactForm button[type="submit"]');
        const loadingIndicator = document.getElementById('formLoading');

        if (submitBtn) {
            submitBtn.disabled = isLoading;
            submitBtn.textContent = isLoading ? 'Sending...' : 'Send Message';
        }

        if (loadingIndicator) {
            loadingIndicator.style.display = isLoading ? 'block' : 'none';
        }
    }

    // Show message to user
    showMessage(message, type) {
        const messageElement = document.getElementById('formMessage');
        if (messageElement) {
            messageElement.textContent = message;
            messageElement.className = `form-message ${type}`;
            messageElement.style.display = 'block';

            // Auto-hide success messages
            if (type === 'success') {
                setTimeout(() => {
                    messageElement.style.display = 'none';
                }, 5000);
            }
        }
    }

    // Reset form
    resetForm() {
        const form = document.getElementById('contactForm');
        if (form) {
            form.reset();
            // Clear all errors
            Object.keys(this.validationRules).forEach(fieldName => {
                this.clearError(fieldName);
            });
        }
    }
}

// Initialize contact form when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const contactHandler = new ContactFormHandler();
    contactHandler.init();
});

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = ContactFormHandler;
}
