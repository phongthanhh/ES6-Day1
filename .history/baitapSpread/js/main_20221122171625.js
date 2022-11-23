let str = document.querySelector('.heading').innerHTML;

let arrStr = [...str]

arrStr.forEach(str => {
    if (str) console.log(str)
})