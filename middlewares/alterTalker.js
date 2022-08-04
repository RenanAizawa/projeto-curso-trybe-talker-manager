const fs = require('fs/promises');
const path = require('path');

async function alterTalker(req, res) {
    try {
      const { id } = req.params;
      const { name, age, talk: { watchedAt, rate } } = req.body;
      const data = await fs.readFile(path.resolve(__dirname, '..', 'talker.json'), 'utf8');
      const findTalker = JSON.parse(data).find((r) => r.id === Number(id));
      const filterT = JSON.parse(data).filter((r) => r.id !== Number(id));
      findTalker.name = name;
      findTalker.age = age;
      findTalker.talk.watchedAt = watchedAt;
      findTalker.talk.rate = rate;
      filterT.push(findTalker);
      await fs.writeFile(path.resolve(__dirname, '..', 'talker.json'), JSON.stringify(filterT));  
      return res.status(200).json(findTalker);
    } catch (error) {
      console.log(error);
    }
}

module.exports = alterTalker;