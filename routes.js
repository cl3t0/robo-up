const express = require('express');
const path = require('path');
const shell = require('shelljs');
const router = express.Router();

const assets_controller = require('./front/assets_controller');

router.get('/', (req, res) => {
    let command = req.query.command;
    res.sendFile(path.join(__dirname+'/front/index.html'));
});

router.get('/command', (req, res) => {
    res.send(shell.echo(req.query.command));
});

router.get('/indexjs', assets_controller.indexjs);
router.get('/img', assets_controller.img);

module.exports = router;