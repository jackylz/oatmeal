/*
* path.js
* Created by zhen.lin @ 2017.06.25
*/
'use strict'

const path = require("path");

Object.keys(path).forEach( (key) => {
    exports[key] = () => {
        return path[key].apply(path, arguments);
    }
});

exports.normalize = (p) => {
    return path.normalize(p).split(path.sep).join('/');
};

exports.join = (p/*, p2, p3 ...*/) => {
    return path.join.apply(path, arguments).split(path.sep).join('/');
};