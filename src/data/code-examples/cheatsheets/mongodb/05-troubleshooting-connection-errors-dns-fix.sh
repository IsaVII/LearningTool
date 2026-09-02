If you get error like:
- ENOTFOUND: cluster0.xxxxx.mongodb.net
- getaddrinfo ENOTFOUND
- Connection timeout errors

Add this at the very top of your main file (before any MongoDB code):
