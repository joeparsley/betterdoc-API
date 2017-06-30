var UserInfo = function(symptom, address) {
  this.symptom = symptom;
  this.adress = address;

};

UserInfo.prototype.getDoctor = function() {
  $.get('https://api.betterdoctor.com/2016-03-01/doctors?query=headache&location=45.535081%2C-122.5947734%2C100&user_location=45.535081%2C-122.5947734&skip=0&limit=1&user_key=36bbc70dc2f0d5f7cf79f560621e6455').then(function(response){
    console.log(response);
  });
};

exports.userInfoModule = UserInfo;
