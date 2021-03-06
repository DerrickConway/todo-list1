
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/tabs.html',
    controller: 'AppCtrl'
  })
  
    .state('app.home', {
      url: '/home',
      views: {
        'home': {
          templateUrl: 'templates/home.html',
          controller: 'HomeCtrl'
        }
      }
    })
  
    .state('app.search', {
    url: '/search',
    views: {
      'search': {
        templateUrl: 'templates/search.html',
        controller: 'SearchCtrl'
      }
    }
  })
  
    .state('app.newList', {
      url: '/home/newList',
      views: {
        'home': {
          templateUrl: 'templates/newList.html',
          controller: 'NewListCtrl'
        }
      }
    })

  .state('app.list', {
    url: '/home/list',
    views: {
      'home': {
        templateUrl: 'templates/list.html',
        controller: 'ListCtrl'
      }
    }
  })
  
  .state('app.newTask', {//newTask
    url: '/home/newTask',//newTask
    views: {
      'home': {
        templateUrl: 'templates/newTask.html',//newTask
        controller: 'NewTaskCtrl'//newTask
      }
    }
  });

  $urlRouterProvider.otherwise('/app/home');
});