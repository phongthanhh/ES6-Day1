let str = document.querySelector('.heading').innerHTML;

let arrStr = [...str]

arrStr.forEach((str) => {
    let content = ''
    if (str !== ' ') {
        content += ` 
        <span>${str}</span>
        `
    }
    console.log(content)
    str = content
})