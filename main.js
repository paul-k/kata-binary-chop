// Requirejs Configuration Options
require.config({
    // to set the default folder
    baseUrl: '',
    // paths: maps ids with paths (no extension)
    paths: {
        'jasmine': ['libs/jasmine-2.3.4/jasmine'],
        'jasmine-html': ['libs/jasmine-2.3.4/jasmine-html'],
        'jasmine-boot': ['libs/jasmine-2.3.4/boot'],
    },
    // shim: makes external libraries compatible with requirejs (AMD)
    shim: {
        'jasmine-html': {
            deps: ['jasmine']
        },
        'jasmine-boot': {
            deps: ['jasmine', 'jasmine-html']
        }
    }
});

require(['jasmine-boot'], function() {
    require(['specs/binary-chop.spec'], function() {
        window.onload();
    });
});