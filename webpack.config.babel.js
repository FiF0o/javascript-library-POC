/**
 * Created by jonlazarini on 05/02/17.
 */

/**
 *
 * UMD Build
 * npmcdn.com
 *
 * package available when published at
 * npmcdn.com/javascript-library@1.2.0/dist/index.umd.js
 *
 **/

import {join} from 'path';

const include = join(__dirname, 'src');

export default {
    entry: './src/index.js',
    output: {
        path: join(__dirname, 'dist'),
        // universal module definition
        libraryTarget: 'umd',
        // get javascript-library of the window object - global
        library: 'javascript-library'
    },
    devtool: 'source-map',
    module: {
        loaders: [
            {test: /\.js$/, loader: 'babel-loader', include},
            {test: /\.json$/, loader: 'json-loader', include}
        ]
    }
}
