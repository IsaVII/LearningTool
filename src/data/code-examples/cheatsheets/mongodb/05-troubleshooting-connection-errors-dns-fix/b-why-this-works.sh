DNS Resolution Problem:
- MongoDB Atlas uses domain names (cluster0.xxxxx.mongodb.net)
- Your system needs to resolve these to IP addresses via DNS
- Sometimes default DNS servers are slow or unreliable
- This causes 'ENOTFOUND' or timeout errors

Solution:
- Use Cloudflare's public DNS (1.1.1.1)
- Also works: Google (8.8.8.8) or Quad9 (9.9.9.9)
- This is a proven workaround for Node.js DNS issues

Alternative DNS Servers:
1. Cloudflare: 1.1.1.1 (recommended)
2. Google: 8.8.8.8
3. Quad9: 9.9.9.9
4. OpenDNS: 208.67.222.222
