(function () {
'use strict';

angular.module('module1-solution', [])

.controller('module1-controller', function ($scope) {
$scope.name ="Priya";
$scope.text="";

$scope.sayHello = function(){
  $scope.text = "Hello!";
}

$scope.clear = function(){
  $scope.text="";
}
});

})();
