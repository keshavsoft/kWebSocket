import path from "path";

let GetFunc = (req, res, next) => {
    console.log("aaaaaaaaaaa : ", path.join(__dirname + `/../public/Cover/index.html`));
    res.sendFile(path.join(__dirname + `/../public/Cover/index.html`));
};

export { GetFunc };
