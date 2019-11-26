import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import TODO from './TODO';

//PWA progressive web application
//serviceWorker
//https协议的服务器上
// import * as serviceWorker from './serviceWorker';


//jsx语法
//自己定义组件，开头必须用大写开头
ReactDOM.render(<TODO />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
