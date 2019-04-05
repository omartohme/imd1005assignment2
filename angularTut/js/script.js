var page1 = angular.module('page1', []);


page1.controller('controller1', function($scope){
    $scope.numbr1 = 3;
    $scope.numbr2 = 5; 
    
    $scope.updateValue = function (){
        $scope.calculation = $scope.numbr1 + ' + ' + $scope.numbr2 + ' = ' + (+$scope.numbr1 + +$scope.numbr2);
        
    };
});