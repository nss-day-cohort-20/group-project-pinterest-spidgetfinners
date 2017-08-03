'use strict';

pinApp.controller("PinController", function($scope, $window, PinFactory, userFactory) {

  let currentUser = null;

  userFactory.isAuthenticated(currentUser)
  .then((user) => {
    currentUser = userFactory.getUser();
    fetchPins();
  });

  function fetchPins() {
    let pinArr = [];
    PinFactory.getPins(currentUser)
    .then((pinList) => {
      let pinData = pinList.data;
      Object.keys(pinData).forEach((key) => {
        pinData[key].id = key;
        pinArr.push(pinData[key]);
      });
      $scope.pins = pinArr;
    })
    .catch((err) => {
      console.log("error", err);
    });
  }

  $scope.savePins = () => {
    pinApp.postNewItem($scope.pinItem)
    .then( (data) => {
      console.log("pin data", data);
      $window.location.href = '#!/pin/home';
    });
  };

}); 