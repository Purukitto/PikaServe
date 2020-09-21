$(document).ready(function() {
    SyntaxHighlighter.defaults['toolbar'] = false;
    SyntaxHighlighter.all();
});


// Navbar active

$(document).ready(function() {
    "use strict";
    $('ul.nav__links > li').click(function(e) {
        e.preventDefault();
        $('ul.nav__links > li').removeClass('active');
        $(this).addClass('active');
    });
});

function putValue(input) {
    var div = document.getElementById("input");
    div.value = input;
}

function fetchAPI(input) {
    fetch('http://app.pokemon-api.xyz/' + input)
        .then(response => response.json())
        .then(data => {
            var div = document.getElementById("pokeData");
            $(div).empty();
            poke = JSON.stringify(data, undefined, 4);
            var div = document.getElementById("pokeData");
            $(div).jsonView(poke);
        })
        .catch(err => {
            console.error(err)
        });
    var form = document.getElementById("poke-form");
    form.reset();
}

function syntaxHighlight(json) {
    json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function(match) {
        var cls = 'number';
        if (/^"/.test(match)) {
            if (/:$/.test(match)) {
                cls = 'key';
            } else {
                cls = 'string';
            }
        } else if (/true|false/.test(match)) {
            cls = 'boolean';
        } else if (/null/.test(match)) {
            cls = 'null';
        }
        return '<span class="' + cls + '">' + match + '</span>';
    });
}