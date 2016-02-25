angular.module('uaTemplates', []).run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('ua-footer.html',
    "<footer>\n" +
    "  <i class=\"ua-keyword\">}</i>\n" +
    "</footer>\n"
  );


  $templateCache.put('ua-header.html',
    "<header>\n" +
    "  <h1>\n" +
    "    <i class=\"ua-keyword\">class</i>\n" +
    "    <i class=\"ua-entity\">HelloWorld</i>\n" +
    "    <i class=\"ua-keyword\">{</i>\n" +
    "  </h1>\n" +
    "</header>\n"
  );


  $templateCache.put('ua-layout-line.html',
    ""
  );


  $templateCache.put('ua-layout.html',
    "<ua-header ua-layout-line></ua-header>\n" +
    "<ua-nav ua-layout-line>\n" +
    "  <ua-nav-item ua-url=\"#\">Home</ua-nav-item>\n" +
    "  <ua-nav-item ua-url=\"#\">Code</ua-nav-item>\n" +
    "  <ua-nav-item ua-url=\"#\">About</ua-nav-item>\n" +
    "</ua-nav>\n" +
    "<ua-footer ua-layout-line></ua-footer>\n"
  );


  $templateCache.put('ua-nav-item.html',
    "<a class=\"ua-syntax ua-string\" href=\"{{url}}\" ng-transclude></a>\n"
  );


  $templateCache.put('ua-nav.html',
    "<div class=\"ua-syntax\">\n" +
    "  <i class=\"ua-keyword\">this</i>.<i class=\"ua-member\">navigation</i> = [\n" +
    "  <nav ng-transclude=\"item\"></nav> ];\n" +
    "</div>\n"
  );

}]);

angular.module('uaFooter', [])
.directive('uaFooter', [
  function () {
    return {
      restrict: 'E',
      templateUrl: 'ua-footer.html'
    };
  }
]);

angular.module('uaHeader', [])
.directive('uaHeader', [
  function () {
    return {
      restrict: 'E',
      templateUrl: 'ua-header.html'
    };
  }
]);

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

angular.module('ua', [
  'uaTemplates',
  'uaLayout'
]);

//# sourceMappingURL=ua.js.map