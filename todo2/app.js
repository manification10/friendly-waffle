var app = angular.module('myApp', []);
app.controller('todoCtrl', function($scope) {
    $scope.task = "";
    $scope.todoList = [{'todoText':"Paint the town red", 'done': true}];
    $scope.add = function() {
        $scope.todoList.push({'todoText':$scope.task, 'done':false})
        $scope.task = "";
    }
}); 

