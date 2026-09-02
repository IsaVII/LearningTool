DNS-upplösningsproblem:
- MongoDB Atlas använder domännamn (cluster0.xxxxx.mongodb.net)
- Ditt system behöver lösa dessa till IP-adresser via DNS
- Ibland är standard-DNS-servrar långsamma eller opålitliga
- Detta orsakar 'ENOTFOUND' eller timeout-fel

Lösning:
- Använd Cloudflares offentliga DNS (1.1.1.1)
- Fungerar också: Google (8.8.8.8) eller Quad9 (9.9.9.9)
- Detta är en beprövad lösning för Node.js DNS-problem

Alternativa DNS-servrar:
1. Cloudflare: 1.1.1.1 (rekommenderas)
2. Google: 8.8.8.8
3. Quad9: 9.9.9.9
4. OpenDNS: 208.67.222.222
