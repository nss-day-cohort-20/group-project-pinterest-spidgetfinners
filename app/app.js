 "use strict";
// defines pinApp as an angular module using ngRoute to route the modules
let pinApp = angular.module("PinApp", ["ngRoute"])
// using the property .constant to set global variable FirebaseUrl
.constant("FirebaseUrl", "https://spidgetfinners-51a49.firebaseio.com/");

let isAuth =(UserFactory) => {
  return new Promise( (resolve, reject) => {
    UserFactory.isAuthenticated()
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
  .when('/pin/view', {
    templateUrl: 'partials/home.html',
    controller: 'HomeController',
    resolve: {isAuth}
  })
  .when('/pin/add-pin-form', {
    templateUrl: 'partials/add-pin-form.html',
    controller: 'PinController',
    resolve: {isAuth}
  })
  .when('/board/create', {
    templateUrl: 'partials/create-new-board.html',
    controller: 'BoardController',
    resolve: {isAuth}
  })
  .when('/pin/create-pin-form', {
    templateUrl: 'partials/create-pin-form.html',
    controller: 'createPinController',
    resolve: {isAuth}
  })
  .otherwise('/');
});