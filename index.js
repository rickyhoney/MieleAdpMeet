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

var meetname;
var argomento;
var datameet;
var orameet;
apiServer.listen(port, host, () => {
    console.log("server connected at http://%s:%d", host, port);
});

//http://localhost:3000/nuovo?name=riccardo&surname=miele&login=ricc&password=AAA
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

//http://localhost:3000/leggi
apiServer.get("/leggi", (req, res) => {

    fs.readFile('studenti.json', 'utf-8', (err, data) => {
        if (err) {
            throw err;
        }
    
        const user = JSON.parse(data.toString());
    
        console.log(user);

        res.send(user);
        
    });


});

apiServer.get("creazione", (req, res) => {

    res.send(req.query.meetname 
        + req.query.argomento
        + req.query.datameet
        + req.query.orameet);

        const meet = {
            "nome": req.query.meetname ,
            "cognome":  req.query.argomento,
            "login": req.query.datameet,
            "password": req.query.orameet
        };

        const data = JSON.stringify(meet);

            fs.writeFile('meet.json', data, (err) => {
                if (err) {
                    throw err;
                }
                console.log("JSON data is saved.");
            });



})