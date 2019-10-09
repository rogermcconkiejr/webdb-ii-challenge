const server = require('./server.js');
const express = require('express');


const port = process.env.PORT || 5050;
server.listen(port, () => console.log(`\n** Running on port ${port} **\n`));