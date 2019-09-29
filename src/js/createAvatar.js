import avatar from '../images/avatar.jpg';
import style from '../scss/index.scss';


function createAvatar () {
    var app = document.getElementById('app');
    var img = new Image();
    img.src = avatar;
    img.classList.add(style.avatar);
    app.append(img);
}

export default createAvatar;
