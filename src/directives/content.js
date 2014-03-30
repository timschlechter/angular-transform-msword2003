(function(global, angular) {
    'use strict';

    angular.module('msword2003').directive('content', [
        'atService',
        function(atService) {
            return {
                restrict: 'E',
                replace: true,
                transclude: true,
                template: atService.getPreparedTemplate('angular-transform-msword2003/src/directives/content.tpl.xml')
            };
        }
    ]);

})(this, this.angular);
