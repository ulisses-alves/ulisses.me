angular.module('uaTemplates', []).run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('ua-layout/ua-layout.html',
    "<h1>Hello World!</h1>\n"
  );

}]);

angular.module('uaLayout', [])
.directive('uaLayout', [
  function () {
    return {
      restrict: 'AE',
      templateUrl: 'ua-layout/ua-layout.html'
    };
  }
]);

angular.module('ua', [
  'uaTemplates',
  'uaLayout'
]);

//# sourceMappingURL=ua.js.map