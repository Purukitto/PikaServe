//To show JSON samples
$(document).ready(function() {
    // POKEMON
    var a1 = document.getElementsByClassName("getpokemonall");
    var a2 = document.getElementsByClassName("getpokemonrand");
    var a3 = document.getElementsByClassName("getpokemonname");
    var a4 = document.getElementsByClassName("getpokemonid");

    $(a1).append(JSON.stringify(
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
        }], null, 4
    ));

    $(a2).append(JSON.stringify({
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
    }, null, 4));

    $(a3).append(JSON.stringify({
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
    }, null, 4));


    $(a4).append(JSON.stringify({
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
    }, null, 4));

    // MOVES
    var b1 = document.getElementsByClassName("getmoveall");
    var b2 = document.getElementsByClassName("getmoverand");
    var b3 = document.getElementsByClassName("getmovename");
    var b4 = document.getElementsByClassName("getmoveid");

    $(b1).append(JSON.stringify([{
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
    }], null, 4));

    $(b2).append(JSON.stringify({
        "accuracy": 30,
        "category": "特殊",
        "cname": "绝对零度",
        "ename": "Sheer Cold",
        "id": 329,
        "jname": "ぜったいれいど",
        "power": null,
        "pp": 5,
        "type": "Ice"
    }, null, 4));

    $(b3).append(JSON.stringify({
        "accuracy": 100,
        "category": "物理",
        "cname": "水之手里剑",
        "ename": "Water Shuriken",
        "id": 594,
        "jname": "みずしゅりけん",
        "power": 15,
        "pp": 20,
        "type": "Water"
    }, null, 4));

    $(b4).append(JSON.stringify({
        "accuracy": 100,
        "category": "特殊",
        "cname": "协助力量",
        "ename": "Stored Power",
        "id": 500,
        "jname": "アシストパワー",
        "power": 20,
        "pp": 10,
        "type": "Psychic"
    }, null, 4));

    // ITEMS
    var c1 = document.getElementsByClassName("getitemall");
    var c2 = document.getElementsByClassName("getitemrand");
    var c3 = document.getElementsByClassName("getitemname");
    var c4 = document.getElementsByClassName("getitemid");

    $(c1).append(JSON.stringify([{
        "id": 1,
        "ename": "Master Ball",
        "type": "Standard Balls",
        "cost": 0,
        "pocket": "Pokeballs"
    }, {
        "object with id": 2
    }, {
        "object with id": 3
    }], null, 4));

    $(c2).append(JSON.stringify({
        "id": 492,
        "ename": "Data Card 07",
        "type": "Data Cards",
        "cost": 0,
        "pocket": "Key"
    }, null, 4));

    $(c3).append(JSON.stringify({
        "id": 427,
        "ename": "Bicycle",
        "type": "Gameplay",
        "cost": 0,
        "pocket": "Key"
    }, null, 4));

    $(c4).append(JSON.stringify({
        "id": 420,
        "ename": "Vs Seeker",
        "type": "Gameplay",
        "cost": 0,
        "pocket": "Key"
    }, null, 4));

    // MOVES
    var d1 = document.getElementsByClassName("gettypeall");
    var d2 = document.getElementsByClassName("gettyperand");
    var d3 = document.getElementsByClassName("gettypename");
    var d4 = document.getElementsByClassName("gettypeid");


    $(d1).append(JSON.stringify([{
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
    }], null, 4));

    $(d2).append(JSON.stringify({
        "english": "Ground",
        "chinese": "地上",
        "japanese": "じめん",
        "effective": ["Fire", "Electric", "Poison", "Rock", "Steel"],
        "ineffective": ["Grass", "Bug"],
        "no_effect": ["Flying"]
    }, null, 4));

    $(d3).append(JSON.stringify({
        "english": "Fairy",
        "chinese": "妖精",
        "japanese": "フェアリー",
        "effective": ["Fighting", "Dragon", "Dark"],
        "ineffective": ["Fire", "Poisin", "Steel"],
        "no_effect": []
    }, null, 4));

    $(d4).append(JSON.stringify({
        "english": "Ice",
        "chinese": "冰",
        "japanese": "こおり",
        "effective": ["Grass", "Ground", "Flying", "Dragon"],
        "ineffective": ["Fire", "Water", "Ice", "Steel"],
        "no_effect": []
    }, null, 4));
});