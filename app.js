(function () {
'use strict';

angular.module('module1-solution', [])

.controller('module1-controller', function ($scope) {
$scope.name ="";
$scope.text="";

$scope.foodFinder = function(){
  var array = splitString($scope.name);
  var len = array.length;
  if(len>1 && len<=3){
  $scope.text = "Enjoy!";
}
  else  if (len>3) {
      $scope.text = "Too much";
  }
  else if (len==0) {
    $scope.text = "Enter data.";
  }
}

function splitString(string)
{
  var array = string.split(",");
  return array;
}

$scope.clear = function(){
  $scope.text="";
}
});

})();
