# Deployment & Production Operations Guide
### AI-Powered Inclusive Tourism Ecosystem for Bagalkote

## 1. Local Development & Demo Deployment

### Prerequisites
- Node.js v18+ (tested on v24.14.0)
- npm v9+ (tested on v11.9.0)

### Quick Run
```bash
# 1. Clone or navigate to the workspace
cd Bgk_project

# 2. Install dependencies
npm install

# 3. Configure environment
# Ensure .env contains:
PORT=3000
GROQ_API_KEY=your_groq_api_key_here
GROQ_MODEL=openai/gpt-oss-120b

# 4. Start server
node server.js
```
The application will be accessible at `http://localhost:3000`.

---

## 2. Production Deployment (Linux / Ubuntu / PM2)

### 2.1 Using PM2 Process Manager
```bash
# Install PM2 globally
npm install -g pm2

# Start server as a cluster
pm2 start server.js --name "bgk-tourism-platform" -i max

# Save process list and generate startup script
pm2 save
pm2 startup
```

### 2.2 Reverse Proxy Configuration (Nginx)
```nginx
server {
    listen 80;
    server_name tourism.bagalkote.nic.in;

    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

---

## 3. Security & Operational Hardening

1. **Environment Secrets:** Never commit `.env` to public repositories. All sensitive API keys (`GROQ_API_KEY`) must remain in `.env`.
2. **CORS:** Controlled via Express CORS middleware to restrict access to authorized origins in production.
3. **Graceful Fallbacks:** The platform maintains local fallback synthesis so that if the Groq API experiences network latency or rate-limiting, the application continues to provide grounded answers using local BM25 RAG.
