const getEl = id => document.getElementById(id);
console.log(getEl('btnKhoi1'))

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

// .onclick = () => {
//     const getToan =
// }