// Code goes here

var myApp = angular.module('app', []);

myApp.controller('MainCtrl', function ($scope){
  $scope.todos = ["Learn Angular", "Learn node"];
  $scope.newItem = "";
  
  $scope.addItem = function(){
    console.log("in add");
    if ($scope.newItem !== ""){
      $scope.todos.push($scope.newItem);
      $scope.newItem = "";
    }
  }
    
  $scope.deleteItem = function(item){
    console.log("in delete");
    var index = $scope.todos.indexOf(item);
    $scope.todos.splice(index, 1);
  }

  $scope.clearCompletedItems = function(){
    var clearedTodos = [];
    var completedString = "--complete--";
    
    //if string doesn't contains --complete-- then add it
    for(var i in $scope.todos){
      if($scope.todos[i].indexOf(completedString) != -1){
        clearedTodos.push($scope.todos[i]);
      }
    }
    $scope.todos = clearedTodos;
  }
    
  $scope.complete = function(item){
   if(item.indexOf("--complete--") == -1){
     var index = $scope.todos.indexOf(item);
     $scope.todos.splice(index, 1);
     $scope.todos.push(item+"--complete--");
     $scope.newItem = "";
   }
  }
  
});

/*************************
 * Homework (not rly):
 * - "enter" button functionality instead of clicking button
 * - edit button functionality
 * - button to mark item as "complete"
 * - have a total number of items at the top
 * - make it prettier
 * - add a due date
 * - add reminder (setInterval)
 * 
 * *********************/