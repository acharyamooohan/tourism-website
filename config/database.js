const { Sequelize } = require('sequelize');
const path = require('path');

// Database configuration
const getDatabaseConfig = () => {
    const env = process.env.NODE_ENV || 'development';
    
    switch (env) {
        case 'production':
            // PostgreSQL for production
            return {
                dialect: 'postgres',
                host: process.env.DB_HOST || 'localhost',
                port: process.env.DB_PORT || 5432,
                database: process.env.DB_NAME,
                username: process.env.DB_USER,
                password: process.env.DB_PASS,
                logging: false,
                pool: {
                    max: 10,
                    min: 0,
                    acquire: 30000,
                    idle: 10000
                },
                dialectOptions: {
                    ssl: process.env.DB_SSL === 'true' ? {
                        require: true,
                        rejectUnauthorized: false
                    } : false
                }
            };
        
        case 'test':
            // SQLite in memory for testing
            return {
                dialect: 'sqlite',
                storage: ':memory:',
                logging: false
            };
        
        default:
            // SQLite for development
            return {
                dialect: 'sqlite',
                storage: path.join(__dirname, '..', 'data', 'contacts.db'),
                logging: console.log
            };
    }
};

// Create Sequelize instance
const sequelize = new Sequelize(getDatabaseConfig());

// Import models
const Contact = require('../models/Contact')(sequelize);

// Database initialization
const initializeDatabase = async () => {
    try {
        // Test connection
        await sequelize.authenticate();
        console.log('Database connection established successfully.');
        
        // Sync models (create tables if they don't exist, but don't alter existing ones)
        await sequelize.sync({ force: false });
        console.log('Database synchronized successfully.');
        
        return true;
    } catch (error) {
        console.error('Unable to connect to database:', error);
        throw error;
    }
};

// Graceful shutdown
const closeDatabase = async () => {
    try {
        await sequelize.close();
        console.log('Database connection closed.');
    } catch (error) {
        console.error('Error closing database connection:', error);
    }
};

module.exports = {
    sequelize,
    Contact,
    initializeDatabase,
    closeDatabase
};
