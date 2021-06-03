const router = require('express').Router();
module.exports = router;

router.get('/', async (req, res) => {
    try {
        res.render('homepage', {
        });
    } catch (err) {
        res.status(500).json(err);
    }
});