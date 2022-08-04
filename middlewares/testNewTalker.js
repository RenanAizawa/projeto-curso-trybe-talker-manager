function token(req, res, next) {
    try {
      const { authorization } = req.headers;  
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

function nameV(req, res, next) {
  try {
    const { name } = req.body;
    if (!name || name.length === 0) {
      return res.status(400).json({ message: 'O campo "name" é obrigatório' });
    }
    if (name.length < 3) {
        return res.status(400).json({ message: 'O "name" deve ter pelo menos 3 caracteres' });
      }
    return next(); 
  } catch (err) {
    console.log(err);
  }
}

function ageV(req, res, next) {
  try {
    const { age } = req.body;
    if (!age || age.length === 0) {
        return res.status(400).json({ message: 'O campo "age" é obrigatório' });
      }
      if (age < 18) {
          return res.status(400).json({ message: 'A pessoa palestrante deve ser maior de idade' });
        }
    return next();
  } catch (err) {
    console.log(err);
  }
}

function talkV(req, res, next) {
  try {
    const { talk } = req.body;
    if (!talk) {
      return res.status(400).json({ message: 'O campo "talk" é obrigatório' });
    }
    return next();
  } catch (err) {
    console.log(err);
  }
}

function watchedAtV(req, res, next) {
  try {
    const { talk: { watchedAt } } = req.body;
    const dataGex = /^[0-9]{2}[/]{1}[0-9]{2}[/]{1}[0-9]{4}$/g;
    if (!watchedAt || watchedAt.length === 0) {
        return res.status(400).json({ message: 'O campo "watchedAt" é obrigatório' });
      }
    if (!dataGex.test(watchedAt)) {
        return res.status(400)
        .json({ message: 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"' });
    }
    return next();
  } catch (err) {
    console.log(err);
  }
  // o codigo do dataGex foi encontrado no site: https://stackoverflow.com/questions/5465375/javascript-date-regex-dd-mm-yyyy ; Desenvolvido pelo usuario: Pau <https://stackoverflow.com/users/4751165/pau>
  // Ele tem meu agradecimento e reconhecimento;
}

function rateV(req, res, next) {
  try {
    const { talk: { rate } } = req.body;
    if (rate === undefined || rate === '') {
      return res.status(400).json({ message: 'O campo "rate" é obrigatório' });
    }
    return next();
  } catch (err) {
    console.log(err);
  }
}

function rateV2(req, res, next) {
    try {
      const { talk: { rate } } = req.body;
      if ((rate < 1 || rate > 5)) {
        console.log('integer', Number.isInteger(rate));
        return res.status(400).json({ message: 'O campo "rate" deve ser um inteiro de 1 à 5' });
      }
      if (!Number.isInteger(rate)) {
        return res.status(400).json({ message: 'O campo "rate" deve ser um inteiro de 1 à 5' });
      }
      return next();
    } catch (err) {
      console.log(err);
    }
  }
module.exports = {
  token,
  nameV,
  ageV,
  talkV,
  watchedAtV,
  rateV,
  rateV2,
};