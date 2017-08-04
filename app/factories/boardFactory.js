'use strict';

pinApp.factory("BoardFactory", function($q, $http, FirebaseUrl, FBcreds) {


  let getAllBoards = (userId) => {
    console.log("userId", userId);
    return $q((resolve, reject) => {
      $http.get(`${FirebaseUrl}board.json?orderBy="uid"&equalTo="${userId}"`)
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
      $http.post(`${FirebaseUrl}boards.json`,
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
        $http.put(`${FirebaseUrl}board/${boardId}.json`,
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
        $http.delete(`${FirebaseUrl}board/${boardId}.json`)
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

    return { getAllBoards, postNewBoard, editNewBoard, deleteBoard };
});