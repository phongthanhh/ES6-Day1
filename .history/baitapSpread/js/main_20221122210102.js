let str = document.querySelector('.heading').innerHTML;

let arrStr = [...str]
console.log('PhongThanh 🚀 ~> arrStr', arrStr)

const result = arrStr.map((str, index) => {
    if (str === ' ') {
        console.log(index)
        arrStr.splice(index, 1)
        return 1
    }
    return str
})
console.log('PhongThanh 🚀 ~> result', result)