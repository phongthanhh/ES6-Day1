const getEl = id => document.getElementById(id);
let msgKhoi1 = getEl('tbKhoi1');
let msgKhoi2 = getEl('tbKhoi2');

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

// Hàm tính dtb chung
const avg = (...res) => {
    const lengthRes = res.length
        // let sum = 0;
        // for (let number of res) {
        //     sum += number
        // }
        // let avg = sum / lengthRes

    // res.reduce(acc, curr => {
    //     console.log(acc, curr)
    // }, 0)
    console.log(res)



    // if (lengthRes === 3) msgKhoi1.innerHTML = `Avg: ${avg}`
    // if (lengthRes === 4) msgKhoi2.innerHTML = `Avg: ${avg}`
}