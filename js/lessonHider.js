angular.module('directivePractice')
.directive('lessonHider', function(){

  return {
    templateUrl:'lessonHider.html',
    restrict: 'E',
    scope: {
      lesson: '=',
      dayAlert: '&'
    },
    controller: function($scope, mainServ) {
      $scope.getSchedule = mainServ.getSchedule()
    },
    link: function(scope, element, attr) {
      // console.log(scope)
      // console.log('---');
      // console.log(element);
      // console.log('----');
      // console.log(attr);
      scope.getSchedule.then(function(response) {
        scope.schedule = response.data;
        // console.log(response.data);
        scope.schedule.forEach(function(scheduleDay) {
          if(scheduleDay.lesson === scope.lesson) {
            // console.log(scheduleDay.weekday)
            scope.lessonDay = scheduleDay.weekday;
            element.css({'text-decoration': 'line-through'});
            return
          }


        })
      })
    }



  }
})
