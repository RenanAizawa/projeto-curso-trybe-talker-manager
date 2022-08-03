const fs = require('fs/promises');
const path = require('path');

const idTalker = async (req, res) => {
    try {
        const { id } = req.params;
        const js = await fs.readFile(path.resolve(__dirname, '..', 'talker.json'), 'utf8');
        const data = JSON.parse(js);
        const idFind = data.find((r) => r.id === Number(id));
        if (idFind === undefined) {
          return res.status(404).json({ message: 'Pessoa palestrante não encontrada' }); 
        }
        res.status(200).json(idFind);
    } catch (err) {
        console.log(err);
    }
};

module.exports = idTalker;