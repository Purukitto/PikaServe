const express = require('express');
const router = express.Router();
const fetchUrl = require("fetch").fetchUrl;

const pokedex = "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/types.json"

router.get('/', (req, res) => {
    return res.status(200).json({
        message: "Please use all/random or the type name to view all the info about the said type! To view the complete dataset please use a GET request instead"
    });
});

router.get('/:typeName', (req, res) => {
    const typeName = req.params.typeName;

    fetchUrl(pokedex, function(error, meta, body) {

        if (!error) {
            var data = new String();
            data = JSON.parse(body);
            if (typeName == "all") {
                return res.status(200).json(data);
            } else if (typeName == "random") {
                var randID = Math.floor(Math.random() * (data.length));
                return res.status(200).json(data[randID]);
            } else {
                var i;
                for (i = 0; i < data.length; i++) {
                    if (data[i].english.toLowerCase().replace(' ', '') == typeName) {
                        return res.status(200).json(data[i]);
                    }
                }
                return res.status(200).json({
                    message: "Please check the name again"
                });
            }
        } else {
            return res.status(500).json(error);
        }
    });
});

router.post('/', (req, res) => {
    console.log('Got body:', req.body);
    const poke = {
        input: req.body.input
    }
    fetchUrl(pokedex, function(error, meta, body) {
        if (!error) {
            var data = new String();
            data = JSON.parse(body);
            if (poke.input.toLowerCase().replace(/ /g, '') == "all") {
                return res.status(200).json(data);
            } else if (poke.input.toLowerCase().replace(/ /g, '') == "random") {
                var randID = Math.floor(Math.random() * (data.length));
                return res.status(200).json(data[randID]);
            } else {
                var i;
                for (i = 0; i < data.length; i++) {
                    if (data[i].english.toLowerCase().replace(/ /g, '') == poke.input.toLowerCase().replace(/ /g, '')) {
                        return res.status(200).json(data[i]);
                    }
                }
                return res.status(200).json({
                    message: "Please check the name again"
                });
            }
        } else {
            res.status(500).json(error);
        }
    });
});

router.delete('/', (req, res) => {
    res.status(200).json({
        message: "The API endpoint is read only, read  the documention to check what you can do with it"
    })
});

module.exports = router;