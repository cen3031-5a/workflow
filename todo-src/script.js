// Code goes here

var myApp = angular.module('app', []);

myApp.controller('MainCtrl', function ($scope){
  $scope.newItem = "";
  $scope.newPri = "";

 $scope.todos = {
    entries : [
        {
            "name": "Learn Angular", 
           	"pri": "NOW"
        }, 
        { 
            "name": "Learn node"
        }]};
  
  $scope.addItem = function(){
    console.log("in add");
    if ($scope.newItem !== ""){
      $scope.todos.entries.push({"name": $scope.newItem, "pri": $scope.newPri});
      $scope.newItem = "";
      $scope.newPri = "";
    }
  }
    
  $scope.deleteItem = function(item){
    console.log("in delete");
    var index = $scope.todos.entries.indexOf(item);
    $scope.todos.entries.splice(index, 1);
  }

  $scope.clearCompletedItems = function(){
    //if string doesn't contains --complete-- then add it
    for(var i in $scope.todos){
      if($scope.todos[i].indexOf("--complete--") != -1){
        $scope.todos.pop($scope.todos[i]);
      }
    }
  }
    
  $scope.complete = function(item){
   if(item.name.indexOf("--complete--") == -1){
     var index = $scope.todos.entries.indexOf(item);
     $scope.todos.entries.splice(index, 1);
     $scope.todos.entries.push({"name": item.name+"--complete--", "pri": $scope.newPri});
     $scope.newItem = "";
    $scope.newPri = "";
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