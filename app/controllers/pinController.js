'use strict';

<<<<<<< HEAD
pinApp.controller("pinController", function($scope, $window, pinFactory, userFactory) {
=======
pinApp.controller("pinController", function($scope, $window, userFactory) {
>>>>>>> master

  let currentUser = null;

  userFactory.isAuthenticated()
  .then( (user) => {
    console.log("user status", user);
    currentUser = userFactory.getUser();
  
  });

 });


