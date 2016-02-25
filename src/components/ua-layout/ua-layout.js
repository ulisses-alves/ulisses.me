angular.module('uaLayout', [
  'uaLayoutLine',
  'uaHeader',
  'uaFooter',
  'uaNav'
])
.directive('uaLayout', [
  function () {
    return {
      restrict: 'AE',
      templateUrl: 'ua-layout.html',
      controller: ['$element', controller]
    };

    function controller($element) {
      this.element = $element;
    }
  }
]);
