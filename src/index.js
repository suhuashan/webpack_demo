// import Header from './js/header';
// import Content from './js/content';
// import Footer from './js/footer';

// new Header();
// new Content();
// new Footer();

// import avatar from './images/avatar.jpg';
// import style from './scss/index.scss';
// import createAvatar from './js/createAvatar';

// var app = document.getElementById('app');
// var img = new Image();
// img.src = avatar;
// img.classList.add(style.avatar);
// app.append(img);

// createAvatar();

// import './fonts/iconfont.css';

// var app = document.getElementById('app');

// app.innerHTML = '<div class="iconfont icon-biaoqian">iconfont test</div>'


// console.log('suhuashan');

// import './index.css';

// var app = document.getElementById('app');
// var btn = document.createElement('button');
// var wrapper = document.createElement('div');

// wrapper.setAttribute('id','wrapper');

// btn.innerText= '新增';
// app.append(btn);
// app.append(wrapper);

// btn.onclick = function () {
//     var item = document.createElement('div');
//     item.innerHTML = 'item';
//     wrapper.append(item);
// }

// import counter from './js/counter';
// import number from './js/number';

// counter();
// number();

// if (module.hot) {
//     module.hot.accept('./js/number', () => {
//         document.getElementById('app').removeChild(document.getElementById('number'));

//         number();
//     });
// }

// import '@babel/polyfill';

// const arr = [
//     new Promise(() => {}),
//     new Promise(() => {})
// ];

// arr.map(item => {
//     console.log(item);
// })

// import React, { Component } from 'react';
// import ReactDom from 'react-dom';

// class App extends Component {
//     render() {
//         return <div>This is a react App.</div>
//     }
// }

// ReactDom.render(<App />,document.getElementById('app'));

// import { add } from './js/math';

// add(1,3);

//code spliting
//同步加载代码
// import _ from 'lodash';
// console.log(_.join(['a', 'b'], '***'));

//异步加载代码
//webpack会自动将异步引入的模块单独打包成一个文件
// function getComponent () {
//     return import(/* webpackChunkName:"lodash" */ 'lodash').then(({default: _}) => {
//         var element = document.createElement('div');
//         element.innerHTML = _.join(['Su','Huashan'],'-');
//         return element;
//     });
// }

// getComponent().then(element => {
//     document.body.appendChild(element);
// })

//lazy loading
// function getComponent() {
//     return import(/* webpackPrefetch: true */ 'lodash').then(({ default: _ }) => {
//       var element = document.createElement('div');
//       element.innerHTML = _.join(['Clear', 'love'], '');
//       return element;
//     })
//   }
// document.addEventListener('click', () => {
//     getComponent().then((element) => {
//         document.body.appendChild(element);
//     })
// });
  
// document.addEventListener('click', () => {
//     var element = document.createElement('div');
//     element.innerHTML = 'suhausahn';
//     document.body.appendChild(element);
// });
// document.addEventListener('click', () => {
//     /* 当点击时才加载lodash */
//     import('./js/click.js').then(({default: func}) => {
//         func();
//     })
// })

//prefecthing/preloading

// document.addEventListener('click', () => {
//     /* 当点击时才加载lodash */
//     import(/* webpackPrefetch: true */  './js/click.js').then(({default: func}) => {
//         func();
//     })
// })

//miniCssExtractPlugin 用于生产环境，将css-in-js单独打出css文件
// import './style/one.css';
// import './style/two.css';
// console.log('hello world');

// Webpack 与浏览器缓存( Caching )
// import _ from 'lodash';
// import $ from 'jquery';

// const dom = $('<div>');
// dom.html(_.join(['Su', 'Huashan'], '-'));
// $('body').append(dom);

//ProvidePlugin imports-loader
function Func () {
    console.log(this);
    this.name = "suhuashan";
}

var obj = new Func();
console.log(this);