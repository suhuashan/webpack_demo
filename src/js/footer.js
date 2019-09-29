function Footer () {
    var app = document.getElementById('app');
    var tag = document.createElement('h2');
    tag.innerText = 'footer';

    app.appendChild(tag);
}

export default Footer;