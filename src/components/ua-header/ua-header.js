angular.module('uaHeader', [])
.directive('uaHeader', [
  function () {
    return {
      restrict: 'E',
      templateUrl: 'ua-header.html'
    };
  }
]);
