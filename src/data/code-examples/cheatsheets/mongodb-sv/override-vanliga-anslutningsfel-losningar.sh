Error: connect ECONNREFUSED 127.0.0.1:27017
Lösning: MongoDB-server körs inte. Starta MongoDB-tjänsten.

Error: MongoAuthenticationError: authentication failed
Lösning: Fel användarnamn/lösenord. Kontrollera referenser i .env-fil.

Error: MongoServerError: connect ENOTFOUND
Lösning: DNS-upplösning misslyckades. Lägg till DNS-konfiguration (se DNS-fix-steget).

Error: connect ETIMEDOUT
Lösning: 
- Nätverks-/brandväggsproblem
- Timeout för kort (öka socketTimeoutMS)
- Server onåbar

Error: FATAL ERROR: CALL_AND_RETRY_LAST Allocation failed
Lösning: Slut på minne. Minska poolstorlek eller kontrollera minnesläckor.

Error: MongooseError: Trying to open an unclosed connection.
Lösning: Databas redan ansluten. Ta bort dubbletter av anslutningsanrop.

Felsökningschecklista:
□ Kontrollera att .env-fil har DATABASE_URL korrekt satt
□ Verifiera att MongoDB-tjänsten körs
□ Kontrollera IP-vitlista i MongoDB Atlas (0.0.0.0/0 för moln)
□ Verifiera att användarnamn och lösenord är korrekta
□ Testa anslutningssträng manuellt
□ Kontrollera nätverks-/brandväggsinställningar
□ Granska MongoDB-loggar för fel
