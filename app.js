const express = require('express');
const router = express.Router();

const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');

const pokeRoutes = require('./api/routes/pokemon');
const typeRoutes = require('./api/routes/types');
const itemRoutes = require('./api/routes/items');
const movesRoutes = require('./api/routes/moves');


app.use(morgan('dev'));

app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(bodyParser.json())

app.use('/pokemon', pokeRoutes);
app.use('/types', typeRoutes);
app.use('/items', itemRoutes);
app.use('/moves', movesRoutes);

app.use(router.get('/', (req, res) => {
    res.status(200).json({
        message: "Please read the documentaion on https://github.com/Purukitto/pokemon-api for instructions"
    });
}));

module.exports = app;