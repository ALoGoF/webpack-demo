export default function Conuter() {
    let div = document.createElement('div');
    div.innerHTML = 1;
    div.setAttribute('id','counter')
    div.onclick = function () {
        div.innerHTML = parseInt(div.innerHTML,10) + 1;
    }
    root.append(div)
}