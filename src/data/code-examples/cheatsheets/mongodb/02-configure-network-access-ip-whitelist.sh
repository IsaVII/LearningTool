Steps to configure IP Access List:
1. Go to MongoDB Atlas Dashboard
2. Click 'Network Access' in the left sidebar
3. Click 'Add IP Address' button
4. Choose one of the options:
   - Current IP Address: Adds your current IP (good for development)
   - Allow Access from Anywhere: Add 0.0.0.0/0 (allows all IPs)
5. Click 'Confirm'

For RENDER or cloud deployments:
- Click 'Add IP Address'
- Select 'Allow Access from Anywhere'
- Enter 0.0.0.0/0 in the IP address field
- Click 'Confirm'
- This allows connections from any IP address
