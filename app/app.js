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
};

pinApp.config( ($routeProvider) => {
  $routeProvider
  .when('/', {
    templateUrl: 'partials/login.html',
    controller: 'userController'
  })
  .when('/pin/view', {
    templateUrl: 'partials/home.html',
    controller: 'pinController',
    resolve: {isAuth}
  })
  .when ('/pin/edit/board', {
    templateUrl: 'partials/pin-form.html',
    controller: ''
  });
}); 
