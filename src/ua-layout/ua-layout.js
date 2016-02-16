angular.module('uaLayout', [])
.directive('uaLayout', [
  function () {
    return {
      restrict: 'AE',
      templateUrl: 'ua-layout/ua-layout.html'
    };
  }
]);
