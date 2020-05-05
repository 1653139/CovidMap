const sort = (data) => {
    return data.sort(function (a, b) {
        a = new Date(a.verifyDate);
        b = new Date(b.verifyDate);
        return a > b ? -1 : a < b ? 1 : 0;
    });
}
export default sort