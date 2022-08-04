const token = require('../helpers/tokenGenerator');

const login = (req, res) => {
    res.status(200).json({ token: token(16) });
};

module.exports = login;
