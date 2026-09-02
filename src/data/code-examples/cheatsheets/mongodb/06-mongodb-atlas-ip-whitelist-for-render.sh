When deploying to Render:

1. MongoDB Atlas Dashboard
2. Click 'Network Access'
3. Click 'Add IP Address'
4. In the IP Address field: Enter 0.0.0.0/0
5. Click 'Confirm'
6. Click 'Add IP Address' again if you want to also add your local machine
7. Your local machine IP: Click 'Add Current IP Address'

0.0.0.0/0 means:
- Allow connections from ANY IP address
- Use this for cloud deployments (Render, Heroku, AWS, etc.)
- Less secure than specific IPs, but necessary for dynamic IPs
