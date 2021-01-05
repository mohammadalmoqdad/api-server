module.exports = (req,res,next)=>{
    res.status(500);
    res.send(" 500/Server Error message");
}