angular.module('directivePractice')
.service('mainServ', function($http, $q){

  this.getSchedule = function() {
    return $http.get('schedule.json')
  }



})
