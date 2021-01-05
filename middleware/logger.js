module.exports = (req, res, next) => {
    console.log(`THis is the LOGGER and this is YOUR log: ${req.method} || ${req.path}`, req.requestTime)
    next();
}