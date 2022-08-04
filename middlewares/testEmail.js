function testEmail(req, res, next) {
    try {
        const { email } = req.body;
        const regex = /.*@.*\.com/i;
        if (!email || email.length === 0) {
            return res.status(400)
                .json({ message: 'O campo "email" é obrigatório' }); 
        }
        if (!regex.test(email)) {
            return res.status(400)
                .json({ message: 'O "email" deve ter o formato "email@email.com"' });
        }
        next();
    } catch (err) {
        console.log(err);
    }
}

module.exports = testEmail;