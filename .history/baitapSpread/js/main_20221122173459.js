let str = document.querySelector('.heading').innerHTML;

let arrStr = [...str]

const result = arrStr.map((str, index) => {
    if (str == '') arrStr.splice(index, 1)
});