module.exports = arr => {
    const toponyms = {}
    for (const [explorer, ...restToponyms] of arr) {
        for (const toponym of restToponyms) {
            if (!toponyms[toponym]) toponyms[toponym] = new Set([explorer])
            else toponyms[toponym].add(explorer)
        }
    }

    const result = []
    for (const [key, value] of Object.entries(toponyms)) {
        result.push([key, ...value])
    }
    return result
};