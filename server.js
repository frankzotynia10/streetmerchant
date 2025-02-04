// server.js
const express = require('express');
const path = require('path');             // Import path to resolve file paths
const http = require('http');
const socketIo = require('socket.io');
const redis = require('redis');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// Serve static files from the "web" folder
app.use(express.static(path.join(__dirname, 'web')));

// Define a GET route for the root URL to serve index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'web', 'index.html'));
});

// Create a Redis client using the older API (auto-connecting)
const redisClient = redis.createClient({
  host: process.env.REDIS_HOST || 'redis',  // When containerized via Docker Compose, use "redis"
  port: process.env.REDIS_PORT || 6379,
  db: process.env.REDIS_DB || 1
});

redisClient.on('error', (err) => {
  console.error('Redis error:', err);
});

redisClient.on('ready', () => {
  console.log('Connected to Redis');
});

// Log when the client subscribes to a channel
redisClient.on('subscribe', (channel, count) => { 
  console.log(`Subscribed to ${channel}. Now subscribed to ${count} channel(s).`);
});

// Subscribe to the "stockupdates" channel
redisClient.subscribe('stockupdates');

// When a message is published on "stockupdates", log it and broadcast via Socket.IO
redisClient.on('message', (channel, message) => {
  console.log(`Received message on channel ${channel}: ${message}`);
  io.emit('stock update', message);
});

// Start the server on port 3000, binding to all interfaces (0.0.0.0) for Docker port mapping
const PORT = process.env.PORT || 3000;
server.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running on port ${PORT}`);
});
