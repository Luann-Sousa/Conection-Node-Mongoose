module.exports = (req, res, next)=>{
    console.log();
    console.log("Passei no Midlleware Gloal");
    console.log();
    next();
}