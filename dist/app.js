'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _expressVue = require('express-vue');

var _expressVue2 = _interopRequireDefault(_expressVue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
var pageTitle = 'Vyvr';

var vueOptions = {
    rootPath: _path2.default.join(__dirname, '/views'),
    vue: {
        head: {
            title: pageTitle,
            meta: [{ name: 'application-name', content: 'Vyvr - Portfolio Website' }, { name: 'description', content: 'A landing page for my own person' }, { property: 'og:title', content: pageTitle }, { name: 'twitter:title', content: pageTitle }, { name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no' }, { rel: 'icon', type: 'image/png', href: '/favicon_32x32.png', sizes: '32x32' }, { script: './js/vue.min.js' }, { style: './css/index.css', content: 'text/css' }],
            structuredData: {
                '@context': 'http://schema.org',
                '@type': 'WebSite',
                'url': 'https://www.vyvr.com',
                'about': 'Landing page for my own person',
                'author': [{
                    'email': 'jonas.vandevyver@gmail.com'
                }]
            }
        }
    },
    layout: {
        html: {
            start: '<!DOCTYPE html><html>',
            end: '</html>'
        },
        body: {
            start: '<body>',
            end: '</body>'
        },
        template: {
            start: '<div id="app">',
            end: '</div>'
        }
    }
};

app.set('port', process.env.PORT || 4000);
app.use((0, _morgan2.default)('dev'));

app.use(_express2.default.static('./public'));
var expressVueMiddleware = _expressVue2.default.init(vueOptions);
app.use(expressVueMiddleware);

app.get('/', function (req, res) {
    var data = {
        title: 'Jonas Van de Vyver'
    };
    res.renderVue('index', data);
});

app.use(function (req, res) {
    res.status(404).sendFile(_path2.default.join(__dirname, '/public', '404.html'));
});

app.listen(app.get('port'), function () {
    console.log('Application Running On: http://localhost:' + app.get('port'));
});

module.exports = app;