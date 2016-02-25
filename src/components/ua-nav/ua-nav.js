angular.module('uaNav', [
  'uaNavItem'
])
.directive('uaNav', [
  function () {
    return {
      restrict: 'E',
      templateUrl: 'ua-nav.html',
      transclude: {
        item: '?uaNavItem'
      }
    };
  }
]);
