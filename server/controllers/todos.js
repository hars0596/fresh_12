const title = require('../models').title;

module.exports = {
  create(req, res) {
    return title
      .create({
        title: req.body.title,
      })
      .then(todo => res.status(201).send(todo))
      .catch(error => res.status(400).send(error));
  },
};
