const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    if (req.method === 'GET') {
        fs.readFile('index.html', (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Internal Server Error');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(data);
            }
        });
    } else if (req.method === 'POST') {
        if (req.url === '/api/signup') {
                let requestBody = '';
                req.on('data', chunk => {
                    requestBody += chunk.toString();
            });
            req.on('end', () => {
                const signupData = JSON.parse(requestBody);
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ status: 0, message: 'Account created successfully' }));
            });
        } else if (req.url === '/api/signin') {
            let requestBody = '';
            req.on('data', chunk => {
                requestBody += chunk.toString();
            });
            req.on('end', () => {
                const signinData = JSON.parse(requestBody);
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ status: 0, message: 'Signin successful' }));
            });
        } else {
            res.writeHead(401, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ status: -1, error: 'Unauthorized request' }));
        }
    } else {
        res.writeHead(405, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ status: -1, error: 'Method Not Allowed' }));
    }
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
