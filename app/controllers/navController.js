'use strict';

pinApp.controller("NavController", function($scope, $window, UserFactory) {

  $scope.isLoggedIn = false;

  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      $scope.isLoggedIn = null;
      $scope.$apply();
    } else {
      $scope.isLoggedIn =false;
      $scope.$apply();
      $window.location.href = "#!/login";
    }
  });

  $scope.logout = () => {
    UserFactory.logoutUser();
  };

});



