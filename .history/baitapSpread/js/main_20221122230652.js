let str = document.querySelector('.heading').innerHTML;

let arrStr = [...str]

arrStr.forEach((str) => {
    let content = ''
    if (str !== ' ') {
        content += ` 
        <span>${str}</span>
        `
    }
    document.querySelector('.heading').innerHTML = content
})