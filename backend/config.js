import dotenv from 'dotenv';
dotenv.config();

export default {
    accessKeyId: process.env.accesskeyId || 'accessKeyId',
    secretAccessKey: process.env.secretAccessKey || 'secretAccessKey',
}