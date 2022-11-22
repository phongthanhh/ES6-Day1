const colorList = ['pallet', 'viridian', 'pewter', 'cerulean', 'vermil', 'lion', 'lavender', 'celadon', 'saffaron', 'fuschia', 'cinnabar'];
const loadBtn = () => {
    let btn = ''
    colorList.forEach(color => {
        btn += `<button class="color-button ${color}"></button>`
    })
    document.querySelector('#colorContainer').innerHTML = btn
}
loadBtn()

document.querySelectorAll('.color-button').forEach(btn => {
    btn.onclick = function() {
        this.className.split(' ').forEach(item => {
            console.log(item)
            return colorList.filter(color => color == item)
        })
    }
})