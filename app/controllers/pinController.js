'use strict';

pinApp.controller("PinController", function($scope, $window, PinFactory, UserFactory) {

  let currentUser = null;

  UserFactory.isAuthenticated(currentUser)
  .then((user) => {
    currentUser = UserFactory.getUser();
     // fetchPins();
  });

}); 