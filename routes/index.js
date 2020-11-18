const apiRouter = require('express').Router();

const {}

apiRouter.use('/presentation', async (req, res, next) => {
  try {
    res.json({ result: 42 });
  } catch (err) {
    next(err);
  }
});

module.exports = apiRouter;