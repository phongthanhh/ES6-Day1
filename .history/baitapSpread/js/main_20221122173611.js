let str = document.querySelector('.heading').innerHTML;

let arrStr = [...str]

const result = arrStr.map((str, index) => {
    let a = []
    if (str == '') {
        a = arrStr.splice(index, 1)
    }
    return a
});
console.log('PhongThanh 🚀 ~> result', result)