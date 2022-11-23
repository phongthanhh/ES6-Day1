let str = document.querySelector('.heading').innerHTML;
let arrStr = [...str]
let content = ''
arrStr.forEach((str) => {
        if (str !== ' ') {
            content += ` 
        <span>${str}</span>
        `
        }
    })
    // document.querySelector('.heading').innerHTML = content

str = content