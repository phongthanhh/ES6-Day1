const getEl = id => document.getElementById(id);
let msgKhoi1 = getEl('tbKhoi1');
let msgKhoi2 = getEl('tbKhoi2');

getEl('btnKhoi1').onclick = () => {
    const getToan = Number(getEl('inpToan').value);
    const getLy = Number(getEl('inpLy').value);
    const getHoa = Number(getEl('inpHoa').value)


    if (getToan && getLy && getHoa) avg(getToan, getLy, getHoa)
    else msgKhoi1.innerHTML = `Không đủ dữ liệu`
}

getEl('btnKhoi2').onclick = () => {
    const getVan = Number(getEl('inpVan').value);
    const getSu = Number(getEl('inpSu').value);
    const getDia = Number(getEl('inpDia').value)
    const getEng = Number(getEl('inpEnglish').value)



    if (getVan && getSu && getDia && getEng) avg(getVan, getSu, getDia, getEng)
    else msgKhoi2.innerHTML = `Không đủ dữ liệu`
}

// Hàm tính dtb chung
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