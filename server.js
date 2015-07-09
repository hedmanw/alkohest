import express from 'express';
import bodyParser from 'body-parser';
import api from './api.js'
import Sequelize from "sequelize";

let app = express();

app.use(express.static(__dirname + '/build'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

let sequelize = new Sequelize('alkohest', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    }
});

api.createSchemata(sequelize);
api.registerPaths(app);

let port = process.argv[2] || 8080;

let server = app.listen(port, function () {
    let host = server.address().address;
    let port = server.address().port;

    console.log('Alkohest listening at http://%s:%s', host, port);
});
