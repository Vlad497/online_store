const jwt = require("jsonwebtoken");

module.exports = function (req, res, next) {
    if (req.mmethod === "OPTIONS") {
        next();
    }
    try {
        const token = req.headers.authorization.split(' ')[1];
        if (!token) {
            res.status(401).json({ messsage: "Не авторизован" });
        }
        const decoded = jwt.verify(token, "dssdlgmkm34gm3kgs");
        req.user = decoded;
        next();
    } catch (err) {
        res.status(401).json({ messsage: "Не авторизован" });
    }

}