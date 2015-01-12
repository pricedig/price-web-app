'use strict';

/* App Module */

angular.module('carcat', ['carcatFilters', 'carcatServices']).
  config(['$routeProvider', function($routeProvider) {
  $routeProvider.
      when('/cars', {templateUrl: 'partials/car-list.html',   controller: CarListCtrl}).
      when('/cars/:carId', {templateUrl: 'partials/car-detail.html', controller: CarDetailCtrl}).
      otherwise({redirectTo: '/cars'});
}]);
