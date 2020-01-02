import "@babel/polyfill";
import Header from './header';
import Button from './button';
import Counter from './counter';
import Number from './number'
let root = document.getElementById('root');

new Header();
new Button();
new Counter();
new Number();
 let arr = [
     new Promise(() =>{}),
     new Promise(() =>{})
 ]
 arr.forEach(item =>{
     console.log('item', item)
 })