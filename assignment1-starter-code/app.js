(function(){
'use strict';
angular.module('LCApp',[])
.controller('LunchCheckController', LunchCheckController);
LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.Lunch="";
  $scope.Result="";
  $scope.Color="Blue";

  $scope.CheckLunch= function(){
  var TotalItem = 0;
   if ($scope.Lunch !=""){
      var Lunch=$scope.Lunch.split(",");
     for (var i=0; i < Lunch.length; i++){
    if ( (Lunch[i].trim())!=""){
    TotalItem++;
  }
}
if (TotalItem>3){
  $scope.Color="Red";
  $scope.Result=   "Too much!";
}
else{
    $scope.Color="Green";
    $scope.Result=   "Enjoy!";
}

   }
   else {
     $scope.Color="Black";
     $scope.Result=   "Please enter data first";
   }

};
}
})();
