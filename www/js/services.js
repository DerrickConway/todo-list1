angular.module('starter.services', [])

.factory('Lists', function() {
  var data = {
      index: 0,
      lists: []
  };

  function chooseList(i) {
      data.index = i;
  };
    
  // create a todo list
  function addNewList(title) {
      var newList = { title: title, tasks: [] };
      data.lists.push(newList);
      data.index = data.lists.length - 1;
  };
  
  // this is for the create a new task
  function addNewTask(title, labels) {//NewTAsk
      if (title.length !== 0) {
          var newTask = {title: title, date: (new Date()), completed: false, labels: labels };
          data.lists[data.index].newTask.push(newTask);                                            //newTask
      }
  };

  // this is to delete the list
  function deleteList(i) {
      data.lists.splice(i, 1);
  };
  
  function deleteTask(i) {
      data.lists[data.index].tasks.splice(i, 1);
  };

  return {
    data: data,
    chooseList: chooseList,
    addNewList: addNewList,
    addNewTask: addNewTask,
    deleteTask: deleteTask,
    deleteList: deleteList
  }
})
// i used code for the load and save from
//  http://stackoverflow.com/questions/28293790/how-to-save-load-web-app-setting-in-ionic-framework-after-we-close-it
.factory('Storage', function() {
  // this function loads lists
  function load() {
    var ls = localStorage['todo'];
    var lists;
      
    if(ls) {
      lists = angular.fromJson(ls);
    } else {
      lists = [
        { title: "COLLEGE", tasks: [] },
        { title: "WORK", tasks: [] },
        { title: "GYM", tasks: [] }]
    }
    
    return lists;
  };
  
  // changes lists to Json and save it
  function save (lists) {
    localStorage['todo'] = angular.toJson(lists);
  };

  return {
      load: load,
      save: save
  }
});