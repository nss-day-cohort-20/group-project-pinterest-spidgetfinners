'use strict';

pinApp.controller("NavController", function($scope, $window, UserFactory) {

  $scope.isLoggedIn = false;

  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      $scope.isLoggedIn = null;
      console.log("currentUser logged in?", user.uid);
      console.log("logged in t-f", $scope.isLoggedIn );
      $scope.$apply();
    } else {
      $scope.isLoggedIn =false;
      $scope.$apply();
      console.log("user logged in?", $scope.isLoggedIn);
      $window.location.href = "#!/login";
    }
  });

  $scope.logout = () => {
    UserFactory.logoutUser();
  };

});
