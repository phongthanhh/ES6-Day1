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
        const result = colorList.forEach(color => {
            return this.className.split(' ').filter(item => {
                return item === color
            })
        })
        console.log(result)

    }
})