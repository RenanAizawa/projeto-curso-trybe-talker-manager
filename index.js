const express = require('express');
const bodyParser = require('body-parser');
const testTalker = require('./middlewares/testTalker');
const idTalker = require('./middlewares/idTalker');
const login = require('./middlewares/login');
const testEmail = require('./middlewares/testEmail');
const testPassword = require('./middlewares/testPassword');
const newTalker = require('./middlewares/newTalker');
const { token } = require('./middlewares/testNewTalker');

const app = express();

app.use(bodyParser.json());

const HTTP_OK_STATUS = 200;
const PORT = '3000';

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.get('/talker', testTalker);

app.post('/talker', token, newTalker);

app.get('/talker/:id', idTalker);

app.post('/login', testEmail, testPassword, login);

app.listen(PORT, () => {
  console.log('Online');
});
