let str = document.querySelector('.heading').innerHTML;

let arrStr = [...str]

const result = arrStr.filter(function(n) {
    return n || n === '';
});
console.log('PhongThanh 🚀 ~> result', result)