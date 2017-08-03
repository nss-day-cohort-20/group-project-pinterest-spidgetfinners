'use strict';

pinApp.controller("BoardController", function($scope, $window, PinFactory, UserFactory, BoardFactory) {

    $scope.pinTitle = "My New Board";
    $scope.pinItem = {
        description: "",
        url: "",
        uid: UserFactory.getUser()
    };



    $scope.saveBoard = () => {
        pinApp.postNewBoard($scope.pinItem)
            .then((data) => {
                console.log("pin data", data);
                $window.location.href = '#!/pin/home';
            });
    };

});

