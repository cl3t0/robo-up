const express = require('express');
const path = require('path');
const shell = require('shelljs');
const router = express.Router();

router.get('/', (req, res) => {
    let command = req.query.command;
    res.sendFile(path.join(__dirname+'/front/index.html'));
});

router.get('/command', (req, res) => {
    res.send(shell.echo(req.query.command));
});

router.get('/indexjs', (req, res) => {
    res.sendFile(path.join(__dirname+'/front/js/index.js'));
});

module.exports = router;