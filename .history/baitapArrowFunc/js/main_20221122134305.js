const colorList = ['pallet', 'viridian', 'pewter', 'cerulean', 'vermil', 'lion', 'lavender', 'celadon', 'saffaron', 'fuschia', 'cinnabar'];
const loadBtn = () => {
    document.querySelector('#colorContainer')
    let btn = ''
    colorList.forEach(color => {
        btn += `<button class="color-button ${color}"></button>`
    })
    console.log(btn)
}
loadBtn()