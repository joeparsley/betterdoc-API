var UserInfo = function(symptom, address) {
  this.symptom = symptom;
  this.adress = address;

};

UserInfo.prototype.getDoctor = function() {
  return "hello this worked";
};

exports.userInfoModule = UserInfo;
