var express = require('express');
var router = express.Router();

var ctrl = require('./controllers');

router.post('/preferences', ctrl.initPref);
router.get('/preferences/:id', ctrl.getPref);
router.put('/preferences/:id', ctrl.updatePref);
router.delete('/preferences/:id', ctrl.deletePref);

module.exports = router;

