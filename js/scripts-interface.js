var apiKey = require('./../.env').apiKey;
var UserInfo = require('./../js/scripts.js').userInfoModule;



$(document).ready(function() {

$('#form').submit(function(e) {
  e.preventDefault();

  var userSymptom = $('#user-symptom').val();
  var userAddress = $('#user-address').val();
  var test = new UserInfo(userSymptom, userAddress);




});


});
