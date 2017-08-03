'use strict';

pinApp.factory("PinFactory", function($q, $http, FirebaseUrl) {

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
            // PUT the entire obj to FB
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

    let getPins = () => {
        return $q((resolve, reject) => {
            $http.get(`${FirebaseUrl}/image.json`)
                .then((pinData) => {
                    resolve(pinData);
                })
                .catch((err) => {
                    console.log("oops error");
                    reject(err);
                });
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
        getUserBoard,
        postNewBoard,
        editNewBoard,
        deleteBoard,
        getPins
    };
});