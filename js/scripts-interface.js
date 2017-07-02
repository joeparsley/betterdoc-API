// REQUIRE CONSTRUCTOR FROM BACK-END
var UserInfo = require('./../js/scripts.js').userInfoModule;
// DISPLAY FUNCTION
var displayResponse = function(response) {
  $('.output').text(response);
}
// START DOCUMENT READY
$(document).ready(function() {
 // START SUBMIT FUNCTION
$('#form').submit(function(e) {
  e.preventDefault();
  // STORE USER DATA
  var userSymptom = $('#user-symptom').val();
  var userAddress = $('#user-address').val();
  // FORMAT USERINPUT FOR GET REQUEST
  var symptomSplit = userSymptom.replace(/[,]\s/g, '%2C%20').replace(/\s/g, '%20');
  var addressSplit = userAddress.replace(/\s/g, '+');
  // INITIALIZE NEW OBJECT
  var userFinal = new UserInfo(symptomSplit, addressSplit);
  // RUN INFORMATION THROUGH PROTOTYPES IN BACK-END
  userFinal.getLocation( (lat,lng) => {
    userFinal.getSymptom(displayResponse);
  });
  console.log(userFinal);
  });
// END SUBMIT FUNCTION

});
