'use strict';

pinApp.controller("PinController", function($scope, $window, PinFactory, UserFactory) {

  let currentUser = null;

  UserFactory.isAuthenticated(currentUser)
  .then((user) => {
    currentUser = UserFactory.getUser();
    fetchPins();
  });

  function fetchPins() {
    let pinArr = [];
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
// modal delete button
    $('#myModal').on('show', function() {
    var id = $(this).data('id'),
        removeBtn = $(this).find('.danger');
});

$('.modalDelete').on('click', function(e) {
    e.preventDefault();

    var id = $(this).data('id');
    $('#myModal').data('id', id).modal('show');
});

$('#deleteModalButton').click(function() {
    // handle deletion here
    var id = $('#myModal').data('id');
    $('[data-id='+id+']').remove();
    $('#myModal').modal('hide');
});



});



