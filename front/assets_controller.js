const path = require('path');

module.exports = {
    indexjs: (req, res) => {
        res.sendFile(path.join(__dirname+'/js/index.js'));
    },
    img: (req, res) => {
        let image = req.query.name;
        if (image.includes("/")) {
            res.send("no image");
        } else {
            res.sendFile(path.join(__dirname+'/img/'+image));
        }
    }
}