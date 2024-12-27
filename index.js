require('dotenv').config();

const apiKey = process.env.API_KEY;
const dbPassword = process.env.DATABASE_PASSWORD;

console.log(`Using API key: ${apiKey}`);
console.log(`Using database password: ${dbPassword}`);
