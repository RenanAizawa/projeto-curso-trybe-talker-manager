const fs = require('fs/promises');
const path = require('path');

async function deleteTalker(req, res) {
    try {
      const { id } = req.params;
      const dataJson = await fs.readFile(path.resolve(__dirname, '..', 'talker.json'), 'utf8');
      const data = JSON.parse(dataJson);
      const filterId = data.filter((r) => r.id !== Number(id));
      await fs.writeFile(path.resolve(__dirname, '..', 'talker.json'), JSON.stringify(filterId));
      return res.status(204).json();
    } catch (err) {
      console.log(err);
    }
}

module.exports = deleteTalker;