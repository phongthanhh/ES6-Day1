let str = document.querySelector('.heading').innerHTML;

let arrStr = [...str]

arrStr.map((str, index) => {
    if (str === ' ') {
        console.log(index)
        arrStr.splice(index, 1)
    }
})