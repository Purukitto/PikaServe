//To show JSON samples
$(document).ready(function() {
    // POKEMON
    var a1 = document.getElementsByClassName("getpokemonall");
    var a2 = document.getElementsByClassName("getpokemonrand");
    var a3 = document.getElementsByClassName("getpokemonname");
    var a4 = document.getElementsByClassName("getpokemonid");

    $(a1).jsonView(
        [{
            "id": 1,
            "name": {
                "english": "Bulbasaur",
                "japanese": "フシギダネ",
                "chinese": "妙蛙种子",
                "french": "Bulbizarre"
            },
            "type": ["Grass", "Poison"],
            "base": {
                "HP": 45,
                "Attack": 49,
                "Defense": 49,
                "Sp. Attack": 65,
                "Sp. Defense": 65,
                "Speed": 45
            }
        }, {
            "object with id": 2
        }, {
            "object with id": 3
        }]
    );

    $(a2).jsonView({
        "id": 780,
        "name": {
            "english": "Drampa",
            "japanese": "ジジーロン",
            "chinese": "老翁龙",
            "french": "Sinistrail"
        },
        "type": ["Normal", "Dragon"],
        "base": {
            "HP": 78,
            "Attack": 60,
            "Defense": 85,
            "Sp. Attack": 135,
            "Sp. Defense": 91,
            "Speed": 36
        }
    });

    $(a3).jsonView({
        "id": 392,
        "name": {
            "english": "Infernape",
            "japanese": "ゴウカザル",
            "chinese": "烈焰猴",
            "french": "Simiabraz"
        },
        "type": ["Fire", "Fighting"],
        "base": {
            "HP": 76,
            "Attack": 104,
            "Defense": 71,
            "Sp. Attack": 104,
            "Sp. Defense": 71,
            "Speed": 108
        }
    });


    $(a4).jsonView({
        "id": 696,
        "name": {
            "english": "Tyrunt",
            "japanese": "チゴラス",
            "chinese": "宝宝暴龙",
            "french": "Ptyranidur"
        },
        "type": ["Rock", "Dragon"],
        "base": {
            "HP": 58,
            "Attack": 89,
            "Defense": 77,
            "Sp. Attack": 45,
            "Sp. Defense": 45,
            "Speed": 48
        }
    });

    // MOVES
    var b1 = document.getElementsByClassName("getmoveall");
    var b2 = document.getElementsByClassName("getmoverand");
    var b3 = document.getElementsByClassName("getmovename");
    var b4 = document.getElementsByClassName("getmoveid");

    $(b1).jsonView([{
        "accuracy": 100,
        "category": "物理",
        "cname": "拍击",
        "ename": "Pound",
        "id": 1,
        "jname": "はたく",
        "power": 40,
        "pp": 35,
        "type": "Normal"
    }, {
        "object with id": 2
    }, {
        "object with id": 3
    }]);

    $(b2).jsonView({
        "accuracy": 30,
        "category": "特殊",
        "cname": "绝对零度",
        "ename": "Sheer Cold",
        "id": 329,
        "jname": "ぜったいれいど",
        "power": null,
        "pp": 5,
        "type": "Ice"
    });

    $(b3).jsonView({
        "accuracy": 100,
        "category": "物理",
        "cname": "水之手里剑",
        "ename": "Water Shuriken",
        "id": 594,
        "jname": "みずしゅりけん",
        "power": 15,
        "pp": 20,
        "type": "Water"
    });

    $(b4).jsonView({
        "accuracy": 100,
        "category": "特殊",
        "cname": "协助力量",
        "ename": "Stored Power",
        "id": 500,
        "jname": "アシストパワー",
        "power": 20,
        "pp": 10,
        "type": "Psychic"
    });

    // ITEMS
    var c1 = document.getElementsByClassName("getitemall");
    var c2 = document.getElementsByClassName("getitemrand");
    var c3 = document.getElementsByClassName("getitemname");
    var c4 = document.getElementsByClassName("getitemid");

    $(c1).jsonView([{
        "name": {
            "japanese": "マスターボール",
            "english": "Master Ball",
            "chinese": "大师球"
        },
        "id": 1
    }, {
        "object with id": 2
    }, {
        "object with id": 3
    }]);

    $(c2).jsonView({
        "id": 577,
        "name": {
            "english": "Poké Toy",
            "japanese": "ポケじゃらし",
            "chinese": "宝可尾草"
        }
    });

    $(c3).jsonView({
        "id": 800,
        "name": {
            "chinese": "西狮海壬Ｚ",
            "english": "Primarium Z",
            "japanese": "アシレーヌＺ"
        }
    });

    // TODO

    $(c4).jsonView({
        "id": 800,
        "name": {
            "chinese": "西狮海壬Ｚ",
            "english": "Primarium Z",
            "japanese": "アシレーヌＺ"
        }
    });

    // MOVES
    var d1 = document.getElementsByClassName("gettypeall");
    var d2 = document.getElementsByClassName("gettyperand");
    var d3 = document.getElementsByClassName("gettypename");
    var d4 = document.getElementsByClassName("gettypeid");


    $(d1).jsonView([{
        "english": "Normal",
        "chinese": "一般",
        "japanese": "ノーマル",
        "effective": [],
        "ineffective": ["Rock", "Steel"],
        "no_effect": ["Ghost"]
    }, {
        "object with id": 2
    }, {
        "object with id": 3
    }]);

    $(d2).jsonView({
        "english": "Ground",
        "chinese": "地上",
        "japanese": "じめん",
        "effective": ["Fire", "Electric", "Poison", "Rock", "Steel"],
        "ineffective": ["Grass", "Bug"],
        "no_effect": ["Flying"]
    });

    $(d3).jsonView({
        "english": "Fairy",
        "chinese": "妖精",
        "japanese": "フェアリー",
        "effective": ["Fighting", "Dragon", "Dark"],
        "ineffective": ["Fire", "Poisin", "Steel"],
        "no_effect": []
    });

    $(d4).jsonView({
        "english": "Fairy",
        "chinese": "妖精",
        "japanese": "フェアリー",
        "effective": ["Fighting", "Dragon", "Dark"],
        "ineffective": ["Fire", "Poisin", "Steel"],
        "no_effect": []
    });
});