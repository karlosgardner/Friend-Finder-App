var path = require("path");

module.exports = function(app) {

  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/loving_black_couple.jpg"));
  });
  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  });

};