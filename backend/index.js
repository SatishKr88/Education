const express = require('express');
const Routers=require('./routes/routes');
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors());
app.use('/', Routers);

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
