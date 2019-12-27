const avator = require('../static/feature-speed.png')
import * as style from './index.scss'
function Header(params) {
    let div = document.createElement("div");
    let img = new Image();
    img.src = avator;
    img.classList.add(style.img);
    div.innerHTML = '头部';
    root.append(div);
    root.append(img);
}
export default Header;