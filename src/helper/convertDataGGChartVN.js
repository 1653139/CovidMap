const convertDataGGChartVN = (data) => {
    let a = []
    a.push(["Ngày", "Nhiễm mới", "Nghi nghiễm", "Hồi phục"])
    const oKeys = Object.keys(data)
    const oValues = Object.values(data)
    oValues.map(function (i, k) {
        return i.unshift(oKeys[k])
    })
    return a.concat(oValues)
}
export default convertDataGGChartVN