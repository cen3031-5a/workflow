// Code goes here

var myApp = angular.module('app', []);

myApp.controller('MainCtrl', function($scope) {

  $scope.newItem = "";
  $scope.newPri = "";
  $scope.priorities = ["NOW", "Tomorrow", "Someday"];
  $scope.todos = {
    "entries": [
      {
        "name": "Learn Angular",
        "pri": "NOW"
      }, {
        "name": "Learn node"
      }
    ]
  };

  $scope.count = function() {
    console.log($scope.todos.entries);
    var count = 0;
    for (i in $scope.todos.entries) {
      count++;
      console.log(count);
    }
    $scope.counter = count;
  }

  $scope.addItem = function() {
    console.log("in add");
    if ($scope.newItem !== "") {
      $scope.todos.entries.push({"name": $scope.newItem, "pri": $scope.newPri});
      $scope.newItem = "";
      $scope.newPri = "";
    }
    console.log($scope.todos)
    $scope.count();
  }

  $scope.deleteItem = function(item) {
    console.log("in delete");
    var index = $scope.todos.entries.indexOf(item);
    $scope.todos.entries.splice(index, 1);
    $scope.count();

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
     $scope.newPri = $scope.todos.entries[index].pri;
     $scope.todos.entries.splice(index, 1);
     $scope.todos.entries.push({"name": item.name+"--complete--", "pri": $scope.newPri});
     $scope.newPri = "";
     $scope.newItem = "";
   }
  }

  $scope.clearCompletedItems = function() {
    //if string doesn't contains --complete-- then add it
    var work = false;
    for (var i in $scope.todos.entries) {
      if (work) {
        i--;
        work = false;
      };
      console.log($scope.todos.entries[i].name);
      var check = $scope.todos.entries[i].name.split("--");
      console.log(check);
      var arr = {};
      if (check[1] == "complete") {
        $scope.todos.entries.splice(i, 1);
        work = true;
        // arr.append(i)
        // console.log(arr);
      }

    }
    work = false;
    for (var i in $scope.todos.entries) {
      if (work) {
        i--;
        work = true;
      };
      console.log($scope.todos.entries[i].name);
      var check = $scope.todos.entries[i].name.split("--");
      console.log(check);
      var arr = {};
      if (check[1] == "complete") {
        $scope.todos.entries.splice(i, 1);
        work = true;
        // arr.append(i)
        // console.log(arr);
      }

    }
    $scope.count();


  }

  $scope.complete = function(item) {
    if (item.name.indexOf("--complete--") == -1) {
      var index = $scope.todos.entries.indexOf(item);
      $scope.newPri = $scope.todos.entries[index].pri;
      $scope.todos.entries.splice(index, 1);
      $scope.todos.entries.push({
        "name": item.name + "--complete--",
        "pri": $scope.newPri
      });
      $scope.newPri = "";
      $scope.newItem = "";
    }
  }

  $scope.editItem = function(id) {
    for (i in $scope.todos.entries) {
      if ($scope.todos.entries[i].name == id.name) {
        $scope.todos.entries[i].name = $scope.edit;
      }
    }
  };

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


  * Homework fd
 * - "enter" button functionality instead of clicking button
 * - edit button functionality
 * - button to mark item as "complete"
 * - have a total number of items at the top
 * - make it prettier
 * - add a due date
 * - add reminder (setInterval)
  * Homework (not rly):
 * - "enter" button functionality instead of clicking button
 * - edit button functionality
 * - button to mark item as "complete"
 * - have a total number of items at the top
 * - make it prettier
 * - add a due date
 * - add reminder (setInterval)
 jh
 * *********************/
