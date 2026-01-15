// api/index.ts
import { app } from '../server/index'; // Pastikan path ini benar mengarah ke file express Anda
import serverless from 'serverless-http';

export default serverless(app);
