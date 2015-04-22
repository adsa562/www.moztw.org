'use strict';

requirejs.config({
  baseUrl: '/sandstone/js',
  shim: {
    app: ['jquery']
  },
  paths: {
    noext: 'lib/noext',
    async: 'lib/async',
    propertyParser: 'lib/propertyParser',
    goog: 'lib/goog',
    jquery: '//ajax.googleapis.com/ajax/libs/jquery/1.10.1/jquery.min'
  }
});

requirejs([
  'jquery',
  'layout/all',
  'module/all',
  'app',
  'ga'
], function ($, layout, module, app, google_analytics) {
  app.layout = layout;
  app.module = module;
  $(function () {
    app.init();
    google_analytics.init();
  });
});
