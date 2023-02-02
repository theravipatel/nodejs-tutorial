module.exports = route_level_middleware = (req, res, next) => {
    if (!req.query.isLogin) {
        res.send("Please login to access pages..! 111");
    } else if (req.query.isLogin != 'true') {
        res.send("Please login to access pages..! 222");
    }
    next(); // <<<--- Don't forgot to add next() function.
}