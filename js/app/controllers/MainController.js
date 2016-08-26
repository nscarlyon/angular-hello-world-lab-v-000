function MainController($scope) {
  $scope.name = "natasha";
  $scope.phone = "429-1951-3333";
  $scope.email = "email@gmail.com";
}

angular
  .module('app')
  .controller('MainController', MainController)
