let str = document.querySelector('.heading').innerHTML;

let arrStr = [...str]

arrStr.split(' ').forEach(str => {
    console.log(str)
})