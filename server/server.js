const express = require('express');

const app = express();

const fileServerMiddleWare = express.static('public');
app.use(fileServerMiddleWare); // app.use('/public',fileServerMiddleWare);

app.listen(3000, () => console.log('App started successfully on port 3000'));