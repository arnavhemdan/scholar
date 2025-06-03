import express from 'express';

export default function () {
    const router = express.Router();

    // Apply middleware
    router.use(corsMiddleware);

    // API routes
    
    return router;
}
