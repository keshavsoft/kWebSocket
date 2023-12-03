var path = require('path');

let GetFunc = (req, res, next) => {
    res.sendFile(path.join(__dirname + `/../public/Index.html`));
};

module.exports = {
    GetFunc
};
