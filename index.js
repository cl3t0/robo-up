const express = require('express');

const app = express();
app.use(express.json());
app.use(require('./routes'));
app.listen(2001);