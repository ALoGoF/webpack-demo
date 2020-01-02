require('./wrap.scss')
export default function Button() {
    let btn =document.createElement('button');
    btn.innerHTML = '新增';
    root.append(btn);
    let wrap = document.createElement('div');
    wrap.setAttribute('id','wrap');
    root.append(wrap)
    btn.onclick = function() {
        let div = document.createElement('div');
        div.setAttribute('class','item')
        div.innerHTML = 'item';
        wrap.append(div)
    }
}