const avg = (...res) => {
    const lengthRes = res.length
    let avg = 0;
    for (let number of res) {
        avg += number
    }
    return let dtb = avg / lengthRes
}

avg(1, 2, 3)