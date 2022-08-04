const fs = require('fs/promises');
const path = require('path');

async function searchName(req, res) {
  try {
    const { q } = req.query;
    const dataJS = await fs.readFile(path.resolve(__dirname, '..', 'talker.json'), 'utf8');
    const data = JSON.parse(dataJS);
    console.log('data', data);
    const filterName = data.filter((r) => r.name.includes(q));
    console.log('filter', filterName);
    return res.status(200).json(filterName);
  } catch (err) {
    console.log(err);
    return res.status(500).end();
  }
}

module.exports = searchName;