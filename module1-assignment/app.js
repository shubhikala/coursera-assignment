(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.lunchMenuTxt = '';
  $scope.name = "Yaakov";

  $scope.checkIfTooMuch = function () {
    if($scope.lunchMenuTxt.length === 0) {
      $scope.message = "Please enter data first";
    } else {
      var lunchArray = $scope.lunchMenuTxt.split(',');
      console.log(lunchArray);

      if(lunchArray.length <= 3) {
        $scope.message = "Enjoy!";
      } else {
        $scope.message = "Too much!";
      }
    }

  };

};



})();
