const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const app = express();

app.use(cors()); // determina que tipo de servidor pode acessar com http com origin
app.use(express.json());
app.use(routes);

app.listen(3333);