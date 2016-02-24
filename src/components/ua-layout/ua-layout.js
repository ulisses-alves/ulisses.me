angular.module('uaLayout', [
  'uaHeader',
  'uaNav'
])
.directive('uaLayout', [
  function () {
    return {
      restrict: 'AE',
      templateUrl: 'ua-layout.html'
    };
  }
]);
