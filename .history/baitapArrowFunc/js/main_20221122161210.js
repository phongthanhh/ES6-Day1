const colorList = ['pallet', 'viridian', 'pewter', 'cerulean', 'vermillion', 'lavender', 'celadon', 'saffron', 'fuschia', 'cinnabar'];
const loadBtn = () => {
    let btn = ''
    colorList.forEach(color => {
        btn += `<button class="color-button ${color}"></button>`
    })
    document.querySelector('#colorContainer').innerHTML = btn
}
loadBtn()
const getAllBtn = document.querySelectorAll('.color-button')
getAllBtn.forEach(btn => {
    btn.onclick = function() {
        resetActive();
        this.classList.add('active')
        this.className.split(' ').forEach(item => {
            colorList.forEach(color => {
                if (color === item) {
                    document.querySelector('.house').classList
                    document.querySelector('.house').classList.toggle(item)
                }
            })
        })
    }
})

const resetActive = () => {
    getAllBtn.forEach(btn => {
        btn.classList.remove('active')
    })
}