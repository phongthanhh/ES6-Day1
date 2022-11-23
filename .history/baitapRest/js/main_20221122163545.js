const getEl = id => document.getElementById(id);
getEl('btnKhoi1').onclick = () => {
    const getToan = Number(getEl('inpToan').value);
    const getLy = Number(getEl('inpLy').value);
    const getHoa = Number(getEl('inpHoa').value)
    avg(getToan, getLy, getHoa)
}

const avg = (...res) => {
    const lengthRes = res.length
    let avg = 0;
    for (let number of res) {
        avg += number
    }
    let dtb = 0
    dtb = avg / lengthRes
    console.log(dtb)

}