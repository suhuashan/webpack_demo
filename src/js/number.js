function number() {
    var app = document.getElementById('app');
    var div = document.createElement('div');
    
    div.setAttribute('id', 'number');
    div.innerHTML = 3000;
    app.append(div);
}   

export default number;