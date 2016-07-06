angular.module('mainApp', []);
angular.module('mainApp').controller('FirstController', ['$scope', function($scope){
  io.socket.get('/cars', function(data){
    $scope.cars = data;
    $scope.$apply();
  });
  io.socket.on('car', function(event){
    switch (event.verb) {
      case 'created':
        $scope.cars.push(event.data);
        $scope.$apply();
        break;
    }
  })

}]);
