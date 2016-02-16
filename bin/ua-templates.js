angular.module('uaTemplates', []).run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('ua-layout/ua-layout.html',
    "<h1>Hello World!</h1>\n"
  );

}]);
