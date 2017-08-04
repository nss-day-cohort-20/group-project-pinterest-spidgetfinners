'use strict';

pinApp.controller("create-pinController", function($scope, $window, PinFactory, UserFactory) {
 
 $scope.pinTitle = "My New Pin";
    $scope.pinItem = {
    	userPinTitle: "",
        description: "",
        catagory: "",
        url: "",
        uid: PinFactory.getAllPins()
    };


    $scope.savepin = () => {
    	console.log("pinItem", $scope.pinItem);
           PinFactory.postNewPin($scope.pinItem)
            .then((data) => {
                console.log("pin data", data);
                $window.location.href = '#!/pin/home';
            });
    };

});

