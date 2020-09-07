const express = require('express');
const router = express.Router();
const fetchUrl = require("fetch").fetchUrl;

const pokedex = "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/types.json"

router.get('/', (req, res, next) => {
    fetchUrl(pokedex, function(error, meta, body) {
        var data = new String();
        data = JSON.parse(body);
        return res.status(200).json(data);
        if (error) {
            res.status(500).json(error);
        }
    });
});

router.post('/', (req, res, next) => {
    res.status(500).json({
        message: "Please enter the type name to view all the info about the said type! To view the complete dataset please use a GET request instead"
    });
});

router.post('/:typeName', (req, res, next) => {
    const typeName = req.params.typeName;

    fetchUrl(pokedex, function(error, meta, body) {

        var data = new String();
        data = JSON.parse(body);
        var i;
        for (i = 0; i < data.length; i++) {
            if (data[i].english.toLowerCase().replace(' ', '') == typeName) {
                return res.status(200).json(data[i]);
            }
        }
        if (error) {
            return res.status(500).json(error);
        }
    });
});

router.delete('/', (req, res, next) => {
    return res.status(200).json({
        message: "The API endpoint is GET and POST only, read  the documention to check what you can do with it"
    })
});

module.exports = router;