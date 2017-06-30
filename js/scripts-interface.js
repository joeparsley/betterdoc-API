var apiKey = require('./../.env').apiKey;
// var apiKeyMap = require('./../.env').apiKeyMap;
var UserInfo = require('./../js/scripts.js').userInfoModule;


var displayResponse = function(response) {
  $('.output').text(response);
};

$(document).ready(function() {

$('#form').submit(function(e) {
  e.preventDefault();

  var userSymptom = $('#user-symptom').val();
  var userAddress = $('#user-address').val();

  var symptomSplit = userSymptom.replace(/[,]\s/g, '%2C%20').replace(/\s/g, '%20');
  var addressSplit = userAddress.replace(/\s/g, '+');

  var userFinal = new UserInfo(symptomSplit, addressSplit);

  userFinal.getLocation();


  console.log(userFinal);

  // displayResponse(.results[0].geometry.location.lat);





  });


});
