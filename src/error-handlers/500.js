module.exports = (err, req, res, next) => {
    res.status(500).send(`The following error has occured: ${err}`);
  };