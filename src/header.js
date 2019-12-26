const avator = require('../static/feature-speed.png')
function Header(params) {
    let div = document.createElement("div");
    let img = new Image();
    img.src = avator
    div.innerHTML = '头部';
    root.append(div);
    root.append(img);
}
export default Header;