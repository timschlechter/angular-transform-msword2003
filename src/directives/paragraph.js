(function(global, angular) {
    'use strict';

    angular.module('angular-transform-msword2003').directive('paragraph', [
        'encoder',
        function(encoder) {
            return {
                restrict: 'E',
                replace: true,
                transclude: true,
                scope: {
                    title: '='
                },
                template: encoder.encodeTemplateUrl('angular-transform-msword2003/src/directives/paragraph.tpl.xml')
            };
        }
    ]);

})(this, this.angular);
