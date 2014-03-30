(function(global, angular) {
    'use strict';

    angular.module('msword2003').directive('document', [
        'atService',
        function(atService) {
            return {
                restrict: 'E',
                transclude: true,
                replace: true,
                template: atService.getPreparedTemplate('angular-transform-msword2003/src/directives/document.tpl.xml')
            };
        }
    ]);

})(this, this.angular);
