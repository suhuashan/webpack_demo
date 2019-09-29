function counter() {
    var app = document.getElementById('app');
    var div = document.createElement('div');

    div.innerHTML = 1;
    div.onclick = function () {
        div.innerHTML = parseInt(div.innerHTML, 10) + 1;
    }
    
    app.append(div);
}   

export default counter;