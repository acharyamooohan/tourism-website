// Test script to check if the contact API is working
const fetch = require('node-fetch');

async function testContactAPI() {
    try {
        const response = await fetch('http://localhost:3000/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: 'Test User',
                email: 'test@example.com',
                subject: 'API Test',
                message: 'Testing if the contact API is working properly'
            })
        });

        const data = await response.json();
        console.log('API Response:', data);
        console.log('Status:', response.status);
    } catch (error) {
        console.error('API Error:', error.message);
    }
}

testContactAPI();
