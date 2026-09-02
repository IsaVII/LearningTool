Error: connect ECONNREFUSED 127.0.0.1:27017
Solution: MongoDB server is not running. Start MongoDB service.

Error: MongoAuthenticationError: authentication failed
Solution: Wrong username/password. Check credentials in .env file.

Error: MongoServerError: connect ENOTFOUND
Solution: DNS resolution failed. Add DNS configuration (see DNS Fix step).

Error: connect ETIMEDOUT
Solution: 
- Network/firewall issue
- Timeout too short (increase socketTimeoutMS)
- Server unreachable

Error: FATAL ERROR: CALL_AND_RETRY_LAST Allocation failed
Solution: Out of memory. Reduce pool size or check for memory leaks.

Error: MongooseError: Trying to open an unclosed connection.
Solution: Database already connected. Remove duplicate connection calls.

Debugging checklist:
□ Check .env file has DATABASE_URL set correctly
□ Verify MongoDB service is running
□ Check IP whitelist in MongoDB Atlas (0.0.0.0/0 for cloud)
□ Verify username and password are correct
□ Test connection string manually
□ Check network/firewall settings
□ Review MongoDB logs for errors
