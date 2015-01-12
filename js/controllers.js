'use strict';

/* Controllers */

function CarListCtrl($scope, Car) {
  $scope.cars = Car.query();
  $scope.orderProp = 'age';}

function CarDetailCtrl($scope, $routeParams, Car) {
  $scope.car = Car.get({carId: $routeParams.carId}, function(car) {
    $scope.mainImageUrl = car.images[0]; });
  $scope.setImage = function(imageUrl) {
    $scope.mainImageUrl = imageUrl;  }}


