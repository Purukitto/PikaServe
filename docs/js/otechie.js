$(document).ready(function (w, d, s, o, f, js, fjs) {
    w['Otechie-Widget'] = o;
    w[o] = w[o] || function () {
        (w[o].q = w[o].q || []).push(arguments)
    };
    js = d.createElement(s), fjs = d.getElementsByTagName(s)[0];
    js.id = o;
    js.src = f;
    js.async = 1;
    fjs.parentNode.insertBefore(js, fjs);
}(window, document, 'script', 'ow', 'https://widget.otechie.com/widget.js'));
ow('init', {
    username: 'purukitt'
});