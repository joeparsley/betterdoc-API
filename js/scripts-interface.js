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
  // var finalSplit = symptomSplit.replace(/\s/g, '%20');

  var test = new UserInfo(symptomSplit, userAddress);
  test.getDoctor();
  console.log(test);



});


});
