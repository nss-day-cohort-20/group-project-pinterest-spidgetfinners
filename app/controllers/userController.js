'use strict';

pinApp.controller("UserController", function($scope, $window, userFactory) {

  $scope.account = {
    email: "",
    password: ""
  };

   $scope.register = () => {
    // TODO validate that user doesn't exist
    console.log("you clicked register");
    userFactory.createUser($scope.account)
    .then( (userData) => {
      console.log("New User!", userData);
      $scope.login();
    });
  };

  $scope.login = () => {
    userFactory.loginUser($scope.account)
    .then( (userData) => {
      console.log("userData", userData);
      $window.location.href = '#!/login';
    });
  };

});

