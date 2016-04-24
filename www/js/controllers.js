angular.module('starter.controllers', [])

.run(function($ionicPlatform, Lists, Storage) {
    // load all list
    $ionicPlatform.ready(function() {
        Lists.data.lists = Storage.load();
    });
    
    // save list if paused
    $ionicPlatform.on('pause', function(){
        Storage.save(Lists.data.lists);
    });
})

// controller of side menu
.controller('AppCtrl', function($scope, Lists) {
    $scope.data = Lists.data;
    $scope.chooseList = Lists.chooseList;
})

// controller of home
.controller('HomeCtrl', function($scope, Lists) {
    function isEmpty() {
      return (Lists.data.lists.length == 0);
    };
    
    $scope.data = Lists.data;
    $scope.chooseList = Lists.chooseList;
    $scope.deleteList = Lists.deleteList;
    $scope.isEmpty = isEmpty;
})



// controller of new list view
.controller('NewListCtrl', function($scope, Lists) {
    var data = {
        title: ""
    };
    
    function addNewList() {
        Lists.addNewList(data.title);
        data.title = "";
    };
    
    $scope.data = data;
    $scope.addNewList = addNewList;
})

// controller for list view
.controller('ListCtrl', function($scope, Lists) {
    // Check if the current list is empty
    function isEmpty() {
      return (Lists.data.lists[Lists.data.index].tasks.length == 0);
    };
    
    // delete task
    function deleteTask (index) {
      Lists.deleteTask(index);
    };
    
    $scope.data = Lists.data;
    $scope.save = Lists.save;
    $scope.isEmpty = isEmpty;
    $scope.deleteTask = deleteTask;
})
// controller for search
.controller('SearchCtrl', function($scope, Lists) {
    var data = {
        searchTerm: "",
        results: []
    };
    
    // this searchs for tasks
    // tou have to enter right letter
    function search() {
        data.results = [];
         // reset search 
        for (var l = 0; l < Lists.data.lists.length; ++l) {
            for (var t = 0; t < Lists.data.lists[l].tasks.length; ++t) {
                for (var label = 0; label < Lists.data.lists[l].tasks[t].labels.length; ++label) {
                    if (Lists.data.lists[l].tasks[t].labels[label].toUpperCase() === data.searchTerm.toUpperCase()) {
                        data.results.push(Lists.data.lists[l].tasks[t]);
                        break;
                    }
                }
            }
        }
    };
    
    // return list if empty
    function isEmpty() {
      return (data.results.length == 0);
    };
    
    $scope.data = data;
    $scope.search = search;
    $scope.isEmpty = isEmpty;
})
// controller for single new task view
.controller('NewTaskCtrl', function($scope, Lists) {//newTask
    var data = {
        title: "",
        label: "",
        labels: []
    };
    
    // add label to the new task
    function addNewLabel() {
        if (data.label) {
          data.labels.push(data.label);
          data.label = "";
        }
    };
    
    // add task to list
    function addNewTask() {//NewTask
        Lists.addNewTask(data.title, data.labels);//NewTask,, i think
        data.title = "";
        data.label = "";
        data.labels = [];
    };
    
    // return the all labels
    function formattedLabels() {
        return data.labels.join(", ");
    };
    
    // check labels
    function isEmpty() {
        return (data.labels.length == 0);
    };
    
    $scope.data = data;
    $scope.addNewLabel = addNewLabel;
    $scope.addNewTask = addNewTask;//NewTask
    $scope.formattedLabels = formattedLabels;
    $scope.isEmpty = isEmpty;
});
