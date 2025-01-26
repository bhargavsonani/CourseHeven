import dotenv from 'dotenv';
dotenv.config();

const JWT_USER_PASSWORD = process.env.JWT_USER_PASSWORD;
const JWT_ADMIN_PASSWORD = process.env.JWT_ADMIN_PASSWORD;
const STRIPE_SECRET_KEY =  "sk_test_51Qk7haGBgYzUsjKnXZxUPLFpr77IDD3E1swt1HSFoYmCZp9t3ReJG2YIu24EkExyczUzxarY5WtPVvK4TbzXlpwo006WqTbrLQ";
export default {
    JWT_USER_PASSWORD,
    JWT_ADMIN_PASSWORD,
    STRIPE_SECRET_KEY,

 };
