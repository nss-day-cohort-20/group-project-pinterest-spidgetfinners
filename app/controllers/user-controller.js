'use strict';

pinApp.controller("UserController", function($scope, $window, userFactory) {

  $scope.account = {
    email: "",
    password: ""
  };

   $scope.register = () => {
    userFactory.createUser($scope.account)
    .then( (userData) => {
      $scope.login();
    });
  };

  $scope.login = () => {
    userFactory.loginUser($scope.account)
    .then( (userData) => {
      $window.location.href = '#!/pin/view';
    });
  };

});

