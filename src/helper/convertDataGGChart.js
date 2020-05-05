const convertDataGGChart = (data) => {
    let a = []
    a.push(["Ngày", "Nhiễm mới", "Đã hồi phục", "Tử vong"])
    const oKeys = Object.keys(data)
    const oValues = Object.values(data)
    oValues.map(function(i, k){ 
        return i.unshift(oKeys[k])
    })
    return a.concat(oValues)
}
export default convertDataGGChart