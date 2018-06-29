var path = require("path");
// var mongojs = require("mongojs");
// var databaseUrl = "photodb";
// var collections = ["inventory"];
// var db = mongojs(databaseUrl, collections);
var db = require("../models/photo.js");
var mongoose = require("mongoose");
module.exports = function(app) {
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../index.html"));
    });
    app.get("/webdev", function(req, res) {
        res.sendFile(path.join(__dirname, "../index.html"));
    });
    app.get("/photo", function(req, res) {
        res.sendFile(path.join(__dirname, "../pages/photo.html"));
    });
    app.get("/cat", function(req, res) {
        res.sendFile(path.join(__dirname, "../pages/categories.html"));
    });
    app.get("/landing", function(req, res) {
        res.sendFile(path.join(__dirname, "../pages/landingPage.html"));
    });
    app.get("/all", function(req, res) {
        // Query: In our database, go to the students collection, then "find" everything 
        db.find({}, function(err, found) {
            // Log any errors if the server encounters one
            if (err) {
                console.log(err);
            }
            // Otherwise, send the result of this query to the browser
            else {
                res.json(found);
            }
        });
    });



    app.get('*', function(req, res) {
        res.sendFile(path.join(__dirname, "../pages/404page.html"));
    });


};