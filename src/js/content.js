function Content () {
    var app = document.getElementById('app');
    var tag = document.createElement('h2');
    tag.innerText = 'content';

    app.appendChild(tag);
}

export default Content;