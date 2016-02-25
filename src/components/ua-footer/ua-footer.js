angular.module('uaFooter', [])
.directive('uaFooter', [
  function () {
    return {
      restrict: 'E',
      templateUrl: 'ua-footer.html'
    };
  }
]);
