'use strict';

pinApp.controller("BoardController", function($scope, $window, PinFactory, UserFactory, BoardFactory) {

    let currentUser = null;

    UserFactory.isAuthenticated(currentUser)
        .then((user) => {
            currentUser = UserFactory.getUser();
            fetchBoards();
        });

    function fetchBoards() {
        console.log("test", fetchBoards);
        let boardArr = [];
        BoardFactory.getAllBoards(currentUser)
            .then((boardList) => {
                let boardData = boardList.data;
                Object.keys(boardData).forEach((key) => {
                    boardData[key].id = key;
                    boardArr.push(boardData[key]);
                });
                $scope.boards = boardArr;
            })
            .catch((err) => {
                console.log("error", err);
            });
    }

    $scope.boardTitle = "My New Board";
    $scope.boardItem = {
        userTitle: "",
        description: "",
        catagory: "",
    };



    $scope.saveBoard = () => {
        console.log("boardItem", $scope.boardItem);
        $scope.boardItem.uid = UserFactory.getUser();
        BoardFactory.postNewBoard($scope.boardItem)
            .then((data) => {
                console.log("pin data", data);
                $window.location.href = '#!/pin/home';
            });
    };

});

