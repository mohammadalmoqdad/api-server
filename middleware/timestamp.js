module.exports = (req, res, next) => {
    let d = new Date();
    req.requestTime = `${d.getDate()} / ${d.getMonth() + 1} / ${d.getFullYear()}`;
    next();
}