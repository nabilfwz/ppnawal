// api/index.ts
import { createServer } from '../server/index'; 
import serverless from 'serverless-http';

// Panggil fungsi untuk membuat instance app Express
const app = createServer();

// Bungkus app dengan serverless-http
export default serverless(app);
