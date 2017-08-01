'use strict';

pinApp.controller("pinController", function($scope, $window, pinFactory, userFactory) {

  let currentUser = null;

  userFactory.isAuthenticated()
  .then( (user) => {
    console.log("user status", user);
    currentUser = userFactory.getUser();
  
  });

 });


