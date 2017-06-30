var apiKey = require('./../.env').apiKey;



$(document).ready(function() {
  var exampleInstance = new ExampleModule('args');

  console.log(exampleInstance.examplePrototype());
});
