const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        var div = document.getElementById("theme-text");
        div.innerHTML = "Light Mode _"
        localStorage.setItem('theme', 'dark'); //add this
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        var div = document.getElementById("theme-text");
        div.innerHTML = "Dark Mode _"
        localStorage.setItem('theme', 'light'); //add this
    }
}

toggleSwitch.addEventListener('change', switchTheme, false);


const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);

    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
        var div = document.getElementById("theme-text");
        div.innerHTML = "Light Mode _"
    }
}