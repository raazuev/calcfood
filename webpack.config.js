'use strict';

let path = require('path');

module.exports = {
    mode: 'development',
    entry: './js/index.js',
    output: {
        filename: 'bungle.js',
        path: __dirname + '/js'
    },
    watch: true,

    devtool: 'source-map',

    module: {}
};