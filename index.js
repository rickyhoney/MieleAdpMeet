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

var a = true;

const FIFO = require('fast-fifo');
const q = new FIFO();


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
    
        var list = new ArrayList;
            list.add([user]);


        console.log(user);

        res.send(user);
        
    });
});

//http://localhost:3000/disponibili
apiServer.get("/disponibili", (req, res) => {

    fs.readFile('meet.json', 'utf-8', (err, data) => {
        if (err) {
            throw err;
        }
    
        const dispo = JSON.parse(data.toString());
    
        console.log(dispo);

        res.send(dispo);
        
    });
});

//http://localhost:3000/creazione?meetname=TPS&argomento=test&datameet=oggi&orameet=adesso
// apiServer.get("/provaconfronto", (req, res) => {

    res.send(req.query.name 
            + req.query.surname
            + req.query.login
            + req.query.password);

            fs.readFile('studenti.json', 'utf-8', (err, data) => {
                if (err) {
                    throw err;
                }
            
                const user = JSON.parse(data.toString());
            
                
                    q.push(user);
                
                while(a){

                

                    if(req.query.name == q.shift()){

                        console.log("nome gia usato")

                    } else{

                    

                    const utente = {
                        "nome": req.query.name ,
                        "cognome":  req.query.surname,
                        "login": req.query.login,
                        "password": req.query.password
                    };

                    const data = JSON.stringify(utente);

                    fs.writeFile('studenti.json', data, (err) => {
                        if (err) {
                           console.log("err")
                        }
                    console.log("JSON data is saved.");

                    });

                    a=false;
                }
        
                //console.log(user);
        
                //res.send(user);
                       
            }

            });
        });