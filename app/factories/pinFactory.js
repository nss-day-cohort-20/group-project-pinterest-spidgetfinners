'use strict';

pinApp.factory("PinFactory", function($q, $http, FirebaseUrl) {

    let getAllPins = (userId) => {
        console.log("userId", userId);
        return $q((resolve, reject) => {
            $http.get(`${FirebaseUrl}Pins.json?orderBy="uid"&equalTo="${userId}"`)
                .then((pinData) => {
                    resolve(pinData);
                })
                .catch((err) => {
                    console.log("oops", err);
                    reject(err);
                });
        });
    };

    let postNewPin = (newPin) => {
        return $q((resolve, reject) => {
            $http.post(`${FirebaseUrl}pics.json`,
                    angular.toJson(newPin))
                .then((newPinData) => {
                    resolve(newPinData);
                })
                .catch((err) => {
                    reject(err);
                });
        });
    };

    let editNewPin = (pin) => {
        return $q((resolve, reject) => {
            let pinId = pin.id;
            if (pinId) {
                $http.put(`${FirebaseUrl}pins/${pinId}.json`,
                        angular.toJson(pin))
                    .then((data) => {
                        resolve(data);
                    })
                    .catch((err) => {
                        reject(err);
                    });
            } else {
                console.log("Error can not complete");
            }
        });
    };

    let deletePin = (pinId) => {
        return $q((resolve, reject) => {
            if (pinId) {
                $http.delete(`${FirebaseUrl}pins/${pinId}.json`)
                    .then((data) => {
                        resolve(data);
                    })
                    .catch((err) => {
                        reject(err);
                    });
            } else {
                console.log("id can't be found");
            }
        });
    };
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


    return {
        getAllPins,
        postNewPin,
        editNewPin,
        deletePin
    };
});
