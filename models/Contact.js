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
                notEmpty: true,
                len: [2, 100]
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
                notEmpty: true,
                len: [10, 2000]
            }
        },
        ipAddress: {
            type: DataTypes.STRING(45),
            allowNull: true
        },
        userAgent: {
            type: DataTypes.TEXT,
            allowNull: true
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
        status: {
            type: DataTypes.ENUM('new', 'read', 'replied', 'archived'),
            defaultValue: 'new'
        },
        adminNotes: {
            type: DataTypes.TEXT,
            allowNull: true
        }
    }, {
        timestamps: true,
        indexes: [
            {
                fields: ['email']
            },
            {
                fields: ['createdAt']
            },
            {
                fields: ['status']
            },
            {
                fields: ['isSpam']
            }
        ]
    });

    // Instance methods
    Contact.prototype.markAsSpam = async function() {
        await this.update({
            isSpam: true,
            status: 'archived'
        });
    };

    // Class methods
    Contact.getStats = async function() {
        const totalContacts = await this.count();
        const newContacts = await this.count({ where: { status: 'new' } });
        const readContacts = await this.count({ where: { status: 'read' } });
        const repliedContacts = await this.count({ where: { status: 'replied' } });
        const spamContacts = await this.count({ where: { isSpam: true } });
        
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        const todayContacts = await this.count({
            where: {
                createdAt: {
                    [require('sequelize').Op.gte]: today
                }
            }
        });

        const lastWeek = new Date();
        lastWeek.setDate(lastWeek.getDate() - 7);
        const weekContacts = await this.count({
            where: {
                createdAt: {
                    [require('sequelize').Op.gte]: lastWeek
                }
            }
        });

        return {
            total: totalContacts,
            new: newContacts,
            read: readContacts,
            replied: repliedContacts,
            spam: spamContacts,
            today: todayContacts,
            thisWeek: weekContacts
        };
    };

    return Contact;
};
