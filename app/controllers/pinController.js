'use strict';

pinApp.controller("pinController", function($scope, $window, userFactory) {

  let currentUser = null;

  userFactory.isAuthenticated()
  .then( (user) => {
    console.log("user status", user);
    currentUser = userFactory.getUser();
  
  });

 });


