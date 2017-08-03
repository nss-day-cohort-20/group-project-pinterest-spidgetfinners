'use strict';

pinApp.factory("BoardFactory", function($q, $http, FirebaseUrl) {


    let getUserBoard = (userId) => {
        console.log("userId", userId);
        return $q((resolve, reject) => {
            $http.get(`${FirebaseUrl}boards.json?orderBy="uid"&equalTo="${userId}"`)
                .then((boardData) => {
                    resolve(boardData);
                })
                .catch((err) => {
                    console.log("oops", err);
                    reject(err);
                });
        });
    };

    let postNewBoard = (newBoard) => {
        return $q((resolve, reject) => {
            $http.post(`${FirebaseUrl}pics.json`,
                    angular.toJson(newBoard))
                .then((newBoardData) => {
                    resolve(newBoardData);
                })
                .catch((err) => {
                    reject(err);
                });
        });
    };

    let editNewBoard = (board) => {
        return $q((resolve, reject) => {
            let boardId = board.id;
            if (boardId) {
                $http.put(`${FirebaseUrl}boards/${boardId}.json`,
                        angular.toJson(board))
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

    let deleteBoard = (boardId) => {
        return $q((resolve, reject) => {
            if (boardId) {
                $http.delete(`${FirebaseUrl}boards/${boardId}.json`)
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



    return { getUserBoard, postNewBoard, editNewBoard, deleteBoard };
});