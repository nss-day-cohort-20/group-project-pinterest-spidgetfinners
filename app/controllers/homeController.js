'use strict';

pinApp.controller("HomeController", function($scope, $window, PinFactory, UserFactory) {

    $scope.pins = [];

    function fetchPins() {
        let pinArr = [];
        let currentUser = UserFactory.getUser();
        PinFactory.getAllPins(currentUser)
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
    fetchPins();


});