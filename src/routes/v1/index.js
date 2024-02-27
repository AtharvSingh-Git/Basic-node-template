const express = require('express');

const router = express.Router();
const { InfoController } = require('../../controllers')
// can be used to check weather our server is up & running or not
/* router.get('/info', (req ,res) => {
    return res.json({msg: "ok"});
} ) */
router.get('/info' , InfoController.info);

module.exports = router;

