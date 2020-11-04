// imports
const express = require('express');
const bodyParser = require('body-parser');

const routes = require('./routes');

// express
const app = express();

// rotas
app.use(bodyParser.json());
app.use(routes);

// server running
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});