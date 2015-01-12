'use strict';

/* Services */

angular.module('carcatServices', ['ngResource']).
    factory('Car', function($resource){
  return $resource('cars/:carId.json', {}, {
    query: {method:'GET', params:{carId:'cars'}, isArray:true}
  });
});
