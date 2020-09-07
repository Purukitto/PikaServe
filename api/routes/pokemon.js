const express = require('express');
const router = express.Router();
const fetchUrl = require("fetch").fetchUrl;

const pokedex = "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/pokedex.json"

router.get('/', (req, res) => {
    res.status(500).json({
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
            }
        } else {
            res.status(500).json(error);
        }
    });
});

router.post('/', (req, res) => {
    res.status(200).json({
        message: "The API endpoint is GET only for now, read  the documention to check what you can do with it"
    })
});

router.delete('/', (req, res) => {
    res.status(200).json({
        message: "The API endpoint is GET only for now, read  the documention to check what you can do with it"
    })
});

module.exports = router;