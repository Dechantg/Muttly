import express from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';
import https from 'https';
import fs from 'fs';
import path from 'path';

const app = express();

// Define proxy rules
app.use(
  '/api',
  createProxyMiddleware({
    target: 'https://api.muttly.ca',
    changeOrigin: true,
    // Add any other proxy options here
  })
);



// Serve static files from the 'build' directory
const __dirname = path.dirname(new URL(import.meta.url).pathname);
app.use(express.static(path.join(__dirname, 'dist')));

// Catch-all route to serve index.html for SPA routing
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// HTTPS options (replace paths with your SSL certificate and key)
const httpsOptions = {
  key: fs.readFileSync(path.join(__dirname, '../../muttly-private.key')),
  cert: fs.readFileSync(path.join(__dirname, '../../muttly-certificate.crt')),
};

// Create HTTPS server
const port = process.env.PORT || 5175;
https.createServer(httpsOptions, app).listen(port, () => {
  console.log(`Server is running on https://localhost:${port}`);
});
