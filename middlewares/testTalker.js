const fs = require('fs/promises');
const path = require('path');

const testTalker = async (req, res, next) => {
    try {
        const talkers = await fs.readFile(path.resolve(__dirname, '..', 'talker.json'), 'utf8');
        if (talkers.length === 0) return res.status(200).json([]);
        res.status(200).json(JSON.parse(talkers));
    } catch (err) {
        console.log(err);
        next();
    }
};

module.exports = testTalker;

// async function teste() {
//     const lerArquivo = await fs.readFile('talker.json', 'utf8');
//     console.log(lerArquivo);
// }

// teste();