function newTalker(req, res) {
    return res.status(201).json(
        {
            id: 1,
            name: 'Danielle Santos',
            age: 56,
            talk: {
              watchedAt: '22/10/2019',
              rate: 5,
            },
          },
    );
}

module.exports = newTalker;