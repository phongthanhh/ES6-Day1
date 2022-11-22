const colorList = ['pallet', 'viridian', 'pewter', 'cerulean', 'vermillion', 'lavender', 'celadon', 'saffron', 'fuschia', 'cinnabar'];
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
        this.classList.add('active')
            // this.className.split(' ').forEach(item => {
            //     colorList.forEach(color => {
            //         if (color === item) {
            //             document.querySelector('.house').classList.toggle('active')
            //         }
            //     })
            // })
    }
})