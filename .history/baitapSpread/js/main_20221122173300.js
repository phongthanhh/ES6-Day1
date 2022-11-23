let str = document.querySelector('.heading').innerHTML;

let arrStr = [...str]

arrStr.filter(function(n) {
    return n || n === 0;
});