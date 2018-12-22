// 存放的是这个项目的核心内容，也就是我们的主要工作区域。其中，index.js文件是和index.html进行关联的文件的唯一接口。
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'; //将App.js的内容引入到index.js文件中
import * as serviceWorker from './serviceWorker';

// ReactDOM.render(）的作用是将<App/>的内容渲染到根“root”中去。
// document.getElementById('root')中的"root"便是index.html中的"root"了，<App />便是引用页面内容了。在这里，<App />也可以写一些内容(结构,样式,逻辑)是整个项目的根组件，比如:
// ReactDOM.render(<p >Hello World</p>, document.getElementById('root'));
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

//模块热替换，无需刷新页面
if(module.hot){
   module.hot.accept();
}
