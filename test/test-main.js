var tests = [];
for (var file in window.__karma__.files) {
    if (window.__karma__.files.hasOwnProperty(file)) {
        if (/tests\.js$/.test(file)) {
            tests.push(file);
        }
    }
}

requirejs.config({
    // Karma serves files from '/base'
    baseUrl: '/base',

    paths: {
        angularTransform: 'bower_components/angular-transform/dist/angular-transform.min',
        angular: 'bower_components/angular/angular.min',
        lodash: 'node_modules/lodash/lodash',
        text: 'node_modules/text/text'
    },

    shim: {
        'lodash': {
            exports: '_'
        }
    },

    // ask Require.js to load these files (all our tests)
    deps: tests,

    // start test run, once Require.js is done
    callback: window.__karma__.start
});
