const express = require('express');
const router = express.Router();
const fetchUrl = require("fetch").fetchUrl;

const pokedex = "https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/pokedex.json"

router.get('/:pokemonName', (req, res) => {
    const pokeInp = req.params.pokemonName.toLowerCase().replace(/\s/g, '');
    fetchUrl(pokedex, function (error, meta, body) {
        if (!error) {
            var data = new String();
            data = JSON.parse(body);
            const dataLen = data.length;
            if (pokeInp == "all") {
                return res.status(200).json(data);
            } else if (pokeInp == "random") {
                var randID = Math.floor(Math.random() * (dataLen));
                return res.status(200).json(data[randID]);
            } else {
                if (parseInt(pokeInp)) {
                    var i;
                    if (pokeInp <= dataLen) {
                        for (i = 0; i < dataLen; i++) {
                            if (data[i].id == pokeInp) {
                                return res.status(200).json(data[i]);
                            }
                        }
                    }
                    // TODO: Add status code for not found
                    return res.status(200).json({
                        message: "Please check the name/ID again"
                    });
                } else {
                    var i;
                    for (i = 0; i < dataLen; i++) {
                        if (data[i].name.english)
                            if (data[i].name.english.toLowerCase().replace(/\s/g, '') == pokeInp) {
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

module.exports = router;