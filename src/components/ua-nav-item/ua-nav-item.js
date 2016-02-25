angular.module('uaNavItem', [])
.directive('uaNavItem', [
  function () {
    return {
      restrict: 'E',
      templateUrl: 'ua-nav-item.html',
      transclude: true,
      scope: {
        url: '@uaUrl'
      }
    };
  }
]);
