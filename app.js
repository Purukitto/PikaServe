const express = require('express');

const app = express();

const morgan = require('morgan');

const pokeRoutes = require('./api/routes/pokemon');
const typeRoutes = require('./api/routes/types');
const itemRoutes = require('./api/routes/items');
const movesRoutes = require('./api/routes/moves');


app.use(morgan('dev'));

// app.use((req, res, next) => {
//     res.header('Access-Control-Allow-Origin', '*')
//     res.header('Access-Control-Allow-Headers', '*')
//     if (req.method === 'OPTIONS') {
//         res.header('Access-Control-Allow-Methods', 'PUT,POST,PATCH,DELETE,GET')
//         return res.status(200).json({})
//     }
//     next();
// })

app.use('/pokemon', pokeRoutes)
app.use('/types', typeRoutes)
app.use('/items', itemRoutes)
app.use('/moves', movesRoutes)

module.exports = app;