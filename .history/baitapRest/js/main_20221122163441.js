const getEl = id => document.getElementById(id);
getEl('btnKhoi1').onclick = () => {
    const getToan = getEl('inpToan').value
}

const avg = (...res) => {
    const lengthRes = res.length
    let avg = 0;
    for (let number of res) {
        avg += number
    }
    let dtb = 0
    dtb = avg / lengthRes

}

avg(1, 2, 3)