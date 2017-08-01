'use strict';

<<<<<<< HEAD
pinApp.controller("UserController", function($scope, $window, UserFactory) {
=======
pinApp.controller("userController", function($scope, $window, userFactory) {
>>>>>>> master

  $scope.account = {
    email: "",
    password: ""
  };

  $scope.register = () => {
<<<<<<< HEAD
    // TODO validate that user doesn't exist
    console.log("you clicked register");

  };

});

//   $scope.register = () => {
//     // TODO validate that user doesn't exist
//     console.log("you clicked register");
//     UserFactory.createUser($scope.account)
//     .then( (userData) => {
//       console.log("New User!", userData);
//       $scope.login();
//     });
//   };

//   $scope.login = () => {
//     UserFactory.loginUser($scope.account)
//     .then( (userData) => {
//       console.log("userData", userData);
//       $window.location.href = '#!/todos/view';
//     });
//   };
  
// });
=======
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
});
>>>>>>> master
