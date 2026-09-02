Steg för att konfigurera IP Access List:
1. Gå till MongoDB Atlas Dashboard
2. Klicka 'Network Access' i sidofältet
3. Klicka 'Add IP Address'-knappen
4. Välj ett av alternativen:
   - Current IP Address: Lägger till din nuvarande IP (bra för utveckling)
   - Allow Access from Anywhere: Lägg till 0.0.0.0/0 (tillåter alla IP:er)
5. Klicka 'Confirm'

För RENDER eller molndistributioner:
- Klicka 'Add IP Address'
- Välj 'Allow Access from Anywhere'
- Ange 0.0.0.0/0 i IP-adressfältet
- Klicka 'Confirm'
- Detta tillåter anslutningar från vilken IP-adress som helst
