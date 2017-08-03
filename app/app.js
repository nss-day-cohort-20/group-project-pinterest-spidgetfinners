 "use strict";
// defines pinApp as an angular module using ngRoute to route the modules
let pinApp = angular.module("PinApp", ["ngRoute"])
// using the property .constant to set global variable FirebaseUrl
.constant("FirebaseUrl", "https://spidgetfinners-51a49.firebaseio.com/");

let isAuth =(userFactory) => {
  return new Promise( (resolve, reject) => {
    userFactory.isAuthenticated()
    .then( (userBoolean) => {
     if(userBoolean)
      resolve();
     else
      reject();
    });
  });
};

pinApp.config( ($routeProvider) => {
  $routeProvider
  .when('/', {
    templateUrl: 'partials/login.html',
    controller: 'UserController'
  })
  .when('/pin/home', {
    templateUrl: 'partials/home.html',
    controller: 'PinController',
    resolve: {isAuth}
  })
  .when('/pin/home', {
    templateUrl: 'partials/create-pin-form.html',
    // templateUrl: 'partials/home.html',
    controller: 'PinController',
    resolve: {isAuth}
  })
  .otherwise('/');
});

// todoApp.config( ($routeProvider) => {
//   $routeProvider
//   .when('/', {
//     templateUrl: 'partials/login.html',
//     controller: 'UserController'
//   })
//   .when('/todos/view', {
//     templateUrl: 'partials/todo-list.html',
//     controller: 'TodoListController',
//     resolve: {isAuth}
//   })
//   .when('/todos/new', {
//     templateUrl: 'partials/todo-form.html',
//     controller: 'TodoAddController',
//     resolve: {isAuth}
//   })
//   .when('/todos/detail/:todoId', { // anything after the colon will tell angular to save it as a property on routeParams, here as 'todoId' 
//     templateUrl: 'partials/todo-detail.html',
//     controller: 'TodoDetailController',
//     resolve: {isAuth}
//   })
//   .when('/todos/edit/:todoId', {
//     templateUrl: 'partials/todo-form.html',
//     controller: 'TodoEditController',
//     resolve: {isAuth}
//   })
//   .otherwise('/');
// });
