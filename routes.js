const router = require('express').Router();

router.get('/presentation', async (req, res, next) => {
  try {
    res.json({ result: 42 });
  } catch (err) {
    next(err);
  }
});

module.exports = router;