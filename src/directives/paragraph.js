(function(global, angular) {
    'use strict';

    angular.module('msword2003').directive('paragraph', [
        'atService',
        function(atService) {
            return {
                restrict: 'E',
                replace: true,
                transclude: true,
                scope: {
                    title: '='
                },
                template: atService.getPreparedTemplate('angular-transform-msword2003/src/directives/paragraph.tpl.xml')
            };
        }
    ]);

})(this, this.angular);
