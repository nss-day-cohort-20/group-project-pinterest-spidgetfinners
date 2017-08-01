<<<<<<< HEAD
'use strict';

// defines pinApp to equal the value of the named app in index.html within ng-app="PinApp", while executing the $route module to be used within the app
let pinApp = angular.module("PinApp", ["ngRoute"])
// sets the firebase url as a global variable with its URL location, whenever called to run
.constant("FirebaseUrl", "https://spidgetfinners-51a49.firebaseio.com/");

// defines the function isAuth to equal the result of an anonymous function that expects userFactory to be passed in 
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
=======
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
>>>>>>> master
};

pinApp.config( ($routeProvider) => {
  $routeProvider
  .when('/', {
    templateUrl: 'partials/login.html',
    controller: 'userController'
  })
<<<<<<< HEAD
  .when('/pin/view', {
=======
   .when('/pin/view', {
>>>>>>> master
    templateUrl: 'partials/home.html',
    controller: 'pinController',
    resolve: {isAuth}
  })
<<<<<<< HEAD
  .when ('/pin/edit/board', {
    templateUrl: 'partials/pin-form.html',
    controller: ''
  });
}); 
=======
.when('/pin/edit/board', {
    templateUrl: 'partials/pin-form.html',
    controller: 'boardController',
    resolve: {isAuth}
  })
    .otherwise('/');
});
>>>>>>> master
