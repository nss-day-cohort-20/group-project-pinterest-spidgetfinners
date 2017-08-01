'use strict';

pinApp.controller("UserController", function($scope, $window, userFactory) {

  $scope.account = {
    email: "",
    password: ""
  };

  $scope.register = () => {
    console.log("you clicked register");
    userFactory.createUser($scope.account)
    .then( (userData) => {
      console.log("User", userData);
      $scope.login();
    });
  };

  $scope.login = () => {
    userFactory.loginUser($scope.account)
    .then( (userData) => {
      console.log("userData", userData);
      $window.location.href = '#!/pin/view';
    });
  };

  $scope.logout = () => {
    userFactory.logoutUser($scope.account)
    .then( (userData) => {
      console.log("logout clicked");
      $window.location.href = '#!/';
    });
  };

});

