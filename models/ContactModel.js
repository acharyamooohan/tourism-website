const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    const Contact = sequelize.define('Contact', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING(100),
            allowNull: false,
            validate: {
                len: [2, 100],
                notEmpty: true
            }
        },
        email: {
            type: DataTypes.STRING(255),
            allowNull: false,
            validate: {
                isEmail: true,
                notEmpty: true
            }
        },
        subject: {
            type: DataTypes.STRING(200),
            allowNull: true
        },
        message: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                len: [10, 2000],
                notEmpty: true
            }
        },
        ipAddress: {
            type: DataTypes.STRING(45), // IPv6 support
            allowNull: true
        },
        userAgent: {
            type: DataTypes.TEXT,
            allowNull: true
        },
        status: {
            type: DataTypes.ENUM('new', 'read', 'replied', 'archived'),
            defaultValue: 'new'
        },
        isSpam: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        emailSent: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        emailSentAt: {
            type: DataTypes.DATE,
            allowNull: true
        },
        repliedAt: {
            type: DataTypes.DATE,
            allowNull: true
        }
    }, {
        tableName: 'contacts',
        timestamps: true, // Adds createdAt and updatedAt
        indexes: [
            {
                fields: ['email']
            },
            {
                fields: ['status']
            },
            {
                fields: ['createdAt']
            },
            {
                fields: ['isSpam']
            }
        ]
    });

    // Instance methods
    Contact.prototype.markAsRead = function() {
        this.status = 'read';
        return this.save();
    };

    Contact.prototype.markAsReplied = function() {
        this.status = 'replied';
        this.repliedAt = new Date();
        return this.save();
    };

    Contact.prototype.markAsSpam = function() {
        this.isSpam = true;
        this.status = 'archived';
        return this.save();
    };

    // Class methods
    Contact.getStats = async function() {
        const [total, newCount, todayCount] = await Promise.all([
            this.count(),
            this.count({ where: { status: 'new' } }),
            this.count({ 
                where: {
                    createdAt: {
                        [sequelize.Sequelize.Op.gte]: new Date(new Date().setHours(0, 0, 0, 0))
                    }
                }
            })
        ]);

        return { total, new: newCount, today: todayCount };
    };

    Contact.getRecentSubmissions = function(limit = 10) {
        return this.findAll({
            order: [['createdAt', 'DESC']],
            limit,
            attributes: { exclude: ['userAgent'] }
        });
    };

    return Contact;
};