const express = require('express');

const app = express();
const port = 3000;
// const env = process.env.NODE_ENV;

app.use(express.static('dist'));

app.listen(port, () => console.log(`Application listening on port ${port}`)); // eslint-disable-line
