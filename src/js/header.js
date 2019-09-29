function Header () {
    var app = document.getElementById('app');
    var tag = document.createElement('h2');
    tag.innerText = 'header';

    app.appendChild(tag);
}

export default Header;