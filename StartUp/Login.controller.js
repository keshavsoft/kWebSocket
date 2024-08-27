let GetFunc = (req, res, next) => {
    res.cookie('KSToken', "Value", { maxAge: 900000, httpOnly: false });
    res.cookie('k1', "Val1", { maxAge: 900000, httpOnly: false });
    res.end("");
};

export { GetFunc };
