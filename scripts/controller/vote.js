app.controller('AuthController', function($scope) {
  $scope.changeVote = function(vote, flag) {
    $scope.vote = vote == flag ? 'None' : flag;
    alert($scope.vote);
  };
});