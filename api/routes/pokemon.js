const express = require('express');
const router = express.Router();
const fetchUrl = require("fetch").fetchUrl;

const pokedex = "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/pokedex.json"

router.get('/', (req, res) => {
    return res.status(200).json({
        message: "Please use all/random or the pokedex ID or name of the pokemon to view all the info about the said pokemon!"
    });
});

router.get('/:pokemonName', (req, res) => {
    const pokeInp = req.params.pokemonName;
    fetchUrl(pokedex, function(error, meta, body) {
        if (!error) {
            var data = new String();
            data = JSON.parse(body);
            if (pokeInp == "all") {
                return res.status(200).json(data);
            } else if (pokeInp == "random") {
                var randID = Math.floor(Math.random() * (data.length));
                return res.status(200).json(data[randID]);
            } else {
                if (parseInt(pokeInp)) {
                    return res.status(200).json(data[pokeInp - 1]);
                } else {
                    var i;
                    for (i = 0; i < data.length; i++) {
                        if (data[i].name.english.toLowerCase().replace(' ', '') == pokeInp) {
                            return res.status(200).json(data[i]);
                        }
                    }
                    return res.status(200).json({
                        message: "Please check the name/ID again"
                    });
                }
            }
        } else {
            return res.status(500).json(error);
        }
    });
});

router.post('/', (req, res) => {
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
            } else if (parseInt(poke.input)) {
                return res.status(200).json(data[poke.input - 1]);
            } else {
                var i;
                for (i = 0; i < data.length; i++) {
                    if (data[i].name.english.toLowerCase().replace(/ /g, '') == poke.input.toLowerCase().replace(/ /g, '')) {
                        return res.status(200).json(data[i]);
                    }
                }
                return res.status(200).json({
                    message: "Please check the name/ID again"
                });
            }
        } else {
            return res.status(500).json(error);
        }
    });
});

router.delete('/', (req, res) => {
    return res.status(200).json({
        message: "The API endpoint is read only, read  the documention to check what you can do with it"
    })
});

module.exports = router;