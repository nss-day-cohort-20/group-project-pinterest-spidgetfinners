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
    controller: 'userController'
  })
  .when('/pin/view', {
    templateUrl: 'partials/home.html',
    controller: 'pinController',
    resolve: {isAuth}
  })
  .when('/pin/edit/board', {
    templateUrl: 'partials/pin-form.html',
    controller: 'boardController',
    resolve: {isAuth}
  })
  .otherwise('/');
});