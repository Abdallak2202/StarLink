const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cors = require ('cors');
const morgan = require('morgan');
const axios = require('axios');

const server = express();

server.use(cors());
server.use(express.json());

server.listen(3001, console.log('Escuchando en puerto 3001'));
