angular.module('uaLayoutLine', [])
.directive('uaLayoutLine', [
  function () {
    return {
      restrict: 'A',
      require: '^uaLayout',
      link: link
    };

    function link (scope, element, attrs, uaLayoutCtrl) {
      var layoutElement = uaLayoutCtrl.element[0];
      var nodeList = layoutElement.querySelectorAll('[ua-layout-line]');
      var lineElements = Array.prototype.slice.call(nodeList, 0);
      var index = lineElements.indexOf(element[0]);
      attrs.$set('uaLayoutLine', index + 1);
    }
  }
]);
