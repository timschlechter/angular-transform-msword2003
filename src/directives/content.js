(function(global, angular) {
    'use strict';

    angular.module('angular-transform-msword2003').directive('content', [
        'encoder',
        function(encoder) {
            return {
                restrict: 'E',
                replace: true,
                transclude: true,
                template: encoder.encodeTemplateUrl('angular-transform-msword2003/src/directives/content.tpl.xml')
            };
        }
    ]);

})(this, this.angular);
