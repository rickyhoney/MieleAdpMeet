const { response } = require("express");
var express = require("express");
var apiServer = express();
const fs = require('fs');
const { request } = require("https");

var port=3000;
var host="localhost";
var name;
var surname;
var login;
var password;

apiServer.listen(port, host, () => {
    console.log("server connected at http://%s:%d", host, port);
});

apiServer.get("/nuovo", (req, res) => {
    res.send(req.query.name 
            + req.query.surname
            + req.query.login
            + req.query.password);

            const utente = {
                "nome": req.query.name ,
                "cognome":  req.query.surname,
                "login": req.query.login,
                "password": req.query.password
            };
            
            const data = JSON.stringify(utente);

            fs.writeFile('studenti.json', data, (err) => {
                if (err) {
                    throw err;
                }
                console.log("JSON data is saved.");
            });


            
});

