'use strict';
<<<<<<< HEAD
                                                          // 'da heck is this?
pinApp.controller("navController", function($scope, $window, userFactory) {

  // $scope.searchText = filterFactory;
=======
                                                          
pinApp.controller("NavController", function($scope, $window, userFactory) {

  
>>>>>>> master
  $scope.isLoggedIn = false;

  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      $scope.isLoggedIn = null;
      console.log("currentUser logged in?", user.uid);
      console.log("logged in t-f", $scope.isLoggedIn );
      $scope.$apply();
    } else {
      $scope.isLoggedIn = true;
      $scope.$apply();
      console.log("user logged in?", $scope.isLoggedIn);
      $window.location.href = "#!/login";
    }
  });

  $scope.logout = () => {
    console.log("logout clicked");
    userFactory.logoutUser();
  };

});
