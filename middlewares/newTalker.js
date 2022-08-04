const fs = require('fs/promises');
const path = require('path');

async function newTalker(req, res) {
  try {
    const js = await fs.readFile(path.resolve(__dirname, '..', 'talker.json'), 'utf8');
    const arquivo = JSON.parse(js);
    const { name, age, talk } = req.body;
    const data = {
      name,
      id: arquivo.length + 1,
      age,
      talk,
    };
    arquivo.push(data);
    await fs.writeFile(path.resolve(__dirname, '..', 'talker.json'), JSON.stringify(arquivo));
    return res.status(201).json(data);
  } catch (err) {
    console.log(err);
  }
}
module.exports = newTalker;