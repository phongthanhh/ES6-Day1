let str = document.querySelector('.heading').innerHTML;

let arrStr = [...str]

const result = arrStr.map((str, index) => {
    if (str == '') {
        let a = arrStr.splice(index, 1)
    }
    return
});
console.log('PhongThanh 🚀 ~> result', result)