import express from 'express';
import mongoose from 'mongoose';
import { config } from 'dotenv';
import http from 'http';
import { initialData } from './initialData.js';
import cors from 'cors';
import setupRoutes from './main.js'; // Should export a function that sets up routes

// Load environment variables
config();

const app = express();
const server = http.createServer(app);

// Logger middleware
app.use((req, res, next) => {
    console.log(`[${req.method}] ${req.url}`);
    next();
});
console.log("----------------------------------------------------------------------------------------------");

// Enable CORS
app.use(cors({
    // origin: ['http://localhost:5173', 'http://localhost:5174'], // Uncomment if needed
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
    credentials: true,
}));

// Body parsing middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve static files
app.use('/staticfiles', express.static('staticfiles'));

// Set up routes
const apiRoutes = setupRoutes(); // If setupRoutes doesn't need arguments
app.use('/scholarsItech', apiRoutes);

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI || 'your-default-mongo-connection-string', {
    retryWrites: true,
    w: 'majority',
})
    .then(async () => {
        console.log('Database Connected Successfully');

        const collections = await mongoose.connection.db.listCollections().toArray();
        if (collections.length === 0) {
            console.log('No collections found, initializing data...');
            await initialData();
        } else {
            console.log('Database already contains data. Skipping initialization.');
        }
    })
    .catch((error) => console.error('Could not connect to MongoDB:', error));

// Start server
const PORT = process.env.PORT || 2000;
server.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
