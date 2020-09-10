module.exports = arr => {
    const counter = [0, 0]
    const result = arr.map(XY => {
        const coords = []
        for (const [index, value] of XY.entries()) {
            counter[index] += value
            if (counter[index] > 1) {
                coords.push(-1)
                counter[index] = 0
            } else {
                coords.push(value)
            }
        }
        return coords
    })
    return !counter[0] && !counter[1] ? result : null
}