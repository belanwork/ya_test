module.exports = (inputData, inputDictionary) => {
    const sortedData = sortByCoordinates(inputData)
    const dict = new Set(inputDictionary)
    const result = []
    for (const [, words] of sortedData) {
        for (const word of words) {
            if (dict.has(word)) result.push(word)
            else return "Unreadable message"
        }
    }
    return result.join(' ')
}

const sortByCoordinates = arr => {
    const obj = {}
    for (const { text, geometry }
        of arr) {
        if (obj[geometry[0]] === undefined) obj[geometry[0]] = [text]
        else obj[geometry[0]].push(text)
    }
    return Object.entries(obj);
}