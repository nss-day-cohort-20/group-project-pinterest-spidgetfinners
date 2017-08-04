'use strict';

pinApp.controller("createPinController", function($scope, $window, PinFactory, UserFactory) {
 
 // $scope.pinTitle = "My New Pin";
    $scope.pinItem = {
    	userPinTitle: "",
        description: "",
        catagory: "",
        url: "",
    };


    $scope.savePin = () => {
    	console.log("pinItem", $scope.pinItem);
    	$scope.pinItem.uid = UserFactory.getUser();
           PinFactory.postNewPin($scope.pinItem)
            .then((data) => {
                console.log("pin data", data);
                $window.location.href = '#!/pin/home';
            });
    };

});

