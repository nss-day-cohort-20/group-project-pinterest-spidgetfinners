'use strict';

pinApp.controller("BoardController", function($scope, $window, PinFactory, UserFactory) {

  $scope.pinTitle = "Add New Task";
  $scope.pinItem = {
    Bio: "",
    image: "",
    Id: "",
    uid: UserFactory.getUser()
  };

 }); 