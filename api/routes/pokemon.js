const express = require('express');
const router = express.Router();
const fetchUrl = require("fetch").fetchUrl;

const pokedex = "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/pokedex.json"

router.get('/', (req, res, next) => {
    fetchUrl(pokedex, function(error, meta, body) {
        var data = new String();
        data = JSON.parse(body);
        return res.status(200).json(data);
        if (error) {
            return res.status(500).json(error);
        }
    });
});

router.post('/', (req, res, next) => {
    res.status(500).json({
        message: "Please enter the pokedex ID or name of the pokemon to view all the info about the said pokemon!"
    });
});

router.post('/:pokemonName', (req, res, next) => {

    const pokeInp = req.params.pokemonName;
    fetchUrl(pokedex, function(error, meta, body) {
        var data = new String();
        data = JSON.parse(body);

        if (parseInt(pokeInp)) {
            res.status(200).json(data[pokeInp - 1]);
        } else {
            var i;
            for (i = 0; i < data.length; i++) {
                if (data[i].name.english.toLowerCase().replace(' ', '') == pokeInp) {
                    return res.status(200).json(data[i]);
                }
            }
            return res.status(200).json({
                message: "Please check the name again"
            });
        }

        if (error) {
            res.status(500).json(error);
        }
    });
});

router.delete('/', (req, res, next) => {
    res.status(200).json({
        message: "The API endpoint is GET and POST only, read  the documention to check what you can do with it"
    })
});

module.exports = router;