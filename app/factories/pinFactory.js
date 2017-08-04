'use strict';

pinApp.factory("PinFactory", function($q, $http, FirebaseUrl, FBcreds) {

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
            $http.post(`${FirebaseUrl}pins.json`,
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



    return { getAllPins, postNewPin, editNewPin, deletePin };
});