(function(global, angular) {
    'use strict';

    angular.module('angular-transform-msword2003').directive('document', [
        'encoder',
        function(encoder) {
            return {
                restrict: 'E',
                transclude: true,
                replace: true,
                template: encoder.encodeTemplateUrl('angular-transform-msword2003/src/directives/document.tpl.xml')
            };
        }
    ]);

})(this, this.angular);
