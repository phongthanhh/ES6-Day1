let str = document.querySelector('.heading').innerHTML;

let arrStr = [...str]

const result = arrStr.filter(function(n) {
    return n || n === 0;
});
console.log('PhongThanh 🚀 ~> result', result)