function token(req, res, next) {
    try {
      const { authorization } = req.header;
      console.log(req.header);  
      if (!authorization) {
        return res.status(401).json({ message: 'Token não encontrado' });
      }
      if (authorization.length < 16) {
        return res.status(401).json({ message: 'Token inválido' });
      }
      return next();
    } catch (err) {
      console.log(err);
    }
}

module.exports = {
  token,
};