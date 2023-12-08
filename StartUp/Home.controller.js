var path = require('path');

let GetFunc = (req, res, next) => {
    // res.sendFile(path.join(__dirname + `/../public/Index.html`));
    console.log("aaaaaaaaaaa : ", path.join(__dirname + `/../public/Cover/index.html`));
    res.sendFile(path.join(__dirname + `/../public/Cover/index.html`));
};

module.exports = {
    GetFunc
};
