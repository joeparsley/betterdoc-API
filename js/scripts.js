// API KEYS
var apiKey = require('./../.env').apiKey;
var apiKeyMap = require('./../.env').apiKeyMap;
// CONSTUCTOR
var UserInfo = function(symptom, address) {
  this.symptom = symptom;
  this.address = address;
  this.lat = "";
  this.lng = "";
};
// PROTOTYPE FOR BETTERDOC API GET REQUEST
UserInfo.prototype.getSymptom = function(displayResponse) {
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query=' + this.symptom + '&location=' + this.lat + '%2C' + this.lng + '%2C100&user_location=' + this.lat + '%2C'+ this.lng + '&skip=0&limit=1&user_key=' + apiKey).then(function(response){
    displayResponse(response.data[0].profile.first_name,response.data[0].profile.last_name,response.data[0].profile.bio);
  })
    .fail(function(error) {
    $('#output').text("Ooops!");
  });
};
// PROTOTYPE FOR GOOGLEMAPS API GET REQUEST
UserInfo.prototype.getLocation = function(cb) {
  var self = this;
  $.get('https://maps.googleapis.com/maps/api/geocode/json?address=;' + this.address + '+CA&key=' + apiKeyMap).then(function(response) {
    var lat = response.results[0].geometry.location.lat;
    var lng = response.results[0].geometry.location.lng;
    self.lat = lat;
    self.lng = lng;
    cb(lat, lng);
  })
    .fail(function(error) {
    $('#output').text("Ooops!");
  });
};
// EXPORT TO INTERFACE
exports.userInfoModule = UserInfo;
