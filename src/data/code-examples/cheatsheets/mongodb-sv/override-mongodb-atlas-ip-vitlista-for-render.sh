Vid distribution till Render:

1. MongoDB Atlas Dashboard
2. Klicka 'Network Access'
3. Klicka 'Add IP Address'
4. I IP Address-fältet: Ange 0.0.0.0/0
5. Klicka 'Confirm'
6. Klicka 'Add IP Address' igen om du också vill lägga till din lokala maskin
7. Din lokala maskin IP: Klicka 'Add Current IP Address'

0.0.0.0/0 betyder:
- Tillåt anslutningar från VILKEN IP-adress som helst
- Använd detta för molndistributioner (Render, Heroku, AWS, etc.)
- Mindre säkert än specifika IP:er, men nödvändigt för dynamiska IP:er
