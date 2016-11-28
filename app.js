(function () {
'use strict';

angular.module('LunchCheck', [])

.controller('LunchCheckController', function ($scope) {
$scope.name ="";
$scope.text="";

$scope.foodFinder = function(){
  var array = splitString($scope.name);
  var len = array.length;

  if(array[0]==null || array[0]=="")
  {
      $scope.text = "Please Enter data first.";
  }
  else if(len>0 && len<=3){
  $scope.text = "Enjoy!";
}
  else  if (len>3) {
      $scope.text = "Too much!";
  }
  else {
    $scope.text = "Please Enter data first.";
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
