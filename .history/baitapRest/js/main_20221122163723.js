const getEl = id => document.getElementById(id);
getEl('btnKhoi1').onclick = () => {
    const getToan = Number(getEl('inpToan').value);
    const getLy = Number(getEl('inpLy').value);
    const getHoa = Number(getEl('inpHoa').value)
    avg(getToan, getLy, getHoa)
}

getEl('btnKhoi2').onclick = () => {
    const getVan = Number(getEl('inpVan').value);
    const getSu = Number(getEl('inpSu').value);
    const getDia = Number(getEl('inpDia').value)
    const getEng = Number(getEl('inpEnglish').value)

    avg(getVan, getSu, getDia, getEng)
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