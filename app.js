'use strict';

import express      from 'express';
import path         from 'path';
import logger       from 'morgan';
import expressVue   from 'express-vue';

let app         = express();
const pageTitle = 'Vyvr';

const vueOptions = {
    rootPath: path.join(__dirname, '/views'),
    vue: {
        head: {
            title: pageTitle,
            meta: [
                {name: 'application-name',  content: 'Vyvr - Portfolio Website'},
                {name: 'description',       content: 'A landing page for my own person'},
                {property: 'og:title',      content: pageTitle},
                {name: 'twitter:title',     content: pageTitle},
                {name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no'},
                {rel: 'icon', type: 'image/png', href: '/favicon_32x32.png', sizes: '32x32'},
                {script: './js/vue.min.js'},
                {style: './css/index.css', content: 'text/css'}
            ],
            structuredData: {
                '@context': 'http://schema.org',
                '@type': 'WebSite',
                'url': 'https://www.vyvr.com',
                'about': 'Landing page for my own person',
                'author': [{
                    'email': 'jonas.vandevyver@gmail.com'
                }],
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

app.set('port', (process.env.PORT || 4000));
app.use(logger('dev'));

app.use(express.static('./public'));
const expressVueMiddleware = expressVue.init(vueOptions);
app.use(expressVueMiddleware);


app.get('/', (req, res) => {
    const data = {
        title: 'Jonas Van de Vyver',
    };
    res.renderVue('index', data);
});

app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, '/public', '404.html'));
});

app.listen(app.get('port'), () => {
    console.log(`Application Running On: http://localhost:${app.get('port')}`);
});

module.exports = app;
