const filter = (data, startDate, endDate) => {
    let start = new Date(startDate);
    let end = new Date(endDate);
    return data.filter(item => {
        let date = new Date(item.verifyDate);
        console.log(date);
        return date >= start && date <= end;
    });
}
export default filter