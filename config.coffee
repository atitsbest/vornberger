exports.config =
    # See http://brunch.io/#documentation for docs.
    files:
        javascripts:
            joinTo:
                'js/app.js': /^app/,
                'js/vendor.js': /^(bower_components|vendor)/
            order:
                before: [
                    'bower_components/modernizr/modernizr.js',
                    'bower_components/jquery/dist/jquery.js',
                    'bower_components/underscore/underscore.js'
               ]

        stylesheets:
            joinTo:
                'css/app.css': /^app/,
                'css/vendor.css': /^(bower_components|vendor)/
            order:
                after: [
                    'assets/css/main.css',
                    'vendor/styles/helpers.css'
                ]

        templates:
            joinTo: 'js/templates.js'

    plugins:
        less:
            dumpLineNumber: 'comments'


