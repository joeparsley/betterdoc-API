var apiKey = require('./../.env').apiKey;
var apiKeyMap = require('./../.env').apiKeyMap;

var UserInfo = function(symptom, address) {
  this.symptom = symptom;
  this.address = [];
};

UserInfo.prototype.getSymptom = function() {
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query=' + this.symptom + '&location=45.535081%2C-122.5947734%2C100&user_location=45.535081%2C-122.5947734&skip=0&limit=1&user_key=' + apiKey).then(function(response){
    console.log(response);
  })
    .fail(function(error) {
    $('#output').text("try again");
  });

};


UserInfo.prototype.getLocation = function() {
  $.get('https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=' + apiKeyMap).then(function(response){
    // var lat = response.results[0].geometry.location.lat;
    // var lng = response.results[0].geometry.location.lng;
    console.log(response.results[0].geometry.location.lat);
    console.log(response.results[0].geometry.location.lng);
  })
    .fail(function(error) {
    $('#output').text("try again");
  });

};

exports.userInfoModule = UserInfo;
