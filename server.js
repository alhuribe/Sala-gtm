cat > server.js <<EOL
require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());

app.post('/gtm', (req, res) => {
  console.log('Received:', req.body);
  res.json({ 
    status: 'success',
    gtmId: process.env.GTM_CONTAINER_ID 
  });
});

app.get('/health', (req, res) => {
  res.json({ status: 'healthy' });
});

app.listen(port, () => {
  console.log(\`Server running on port \${port}\`);
});
EOL