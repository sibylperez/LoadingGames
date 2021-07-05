const { Router } = require ('express');
 
const router = Router();

router.get('/' , (req, res) => {
    res.send('holiiiis')
});

module.exports = router;