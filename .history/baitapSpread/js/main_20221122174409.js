let str = document.querySelector('.heading').innerHTML;

let arrStr = [...str]

arrStr.filter((str, index) => {
    console.log(index, str)
})