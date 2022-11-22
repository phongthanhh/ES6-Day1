const colorList = ['pallet', 'viridian', 'pewter', 'cerulean', 'vermil', 'lion', 'lavender', 'celadon', 'saffaron', 'fuschia', 'cinnabar'];
const loadBtn = () => {
    let btn = ''
    colorList.forEach(color => {
        btn += `<button class="color-button ${color}"></button>`
    })
    document.querySelector('#colorContainer').innerHTML = btn
}
loadBtn()

document.querySelector('.color-button').onclick = function() {

}