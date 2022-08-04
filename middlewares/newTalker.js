const fs = require('fs/promises');
const path = require('path');

async function newTalker(req, res) {
  try {
    const js = await fs.readFile(path.resolve(__dirname, '..', 'talker.json'), 'utf8');
    const id = JSON.parse(js).length;
    const { name, age, talk: { watchedAt, rate } } = req.body;
    const data = {
      name,
      id: id + 1,
      age,
      talk: {
        watchedAt,
        rate,
      },
    };
    await fs.writeFile(path.resolve(__dirname, '..', 'talker.json'), JSON.stringify([data]));
    return res.status(201).json(data);
  } catch (err) {
    console.log(err);
  }
}
module.exports = newTalker;