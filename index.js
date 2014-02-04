'use strict';
var Path = require('path')
module.exports = function friendlyquire(realRequire) {
  var root = null
    , realResolve = realRequire.resolve

  function wrap(fn) {
    return function(path) {
      if (path[0] === '~') {
        if (!root) root = findRoot()
        path = Path.join(root, path.slice(1))
      }
      return fn(path)
    }
  }

  function findRoot() {
    var path = '.'
    for (var i = 0; i < 1000; i++)
      try { return realResolve(Path.join(path, 'package.json')) }
      catch (e) { path = Path.join(path, '..') }
    throw new Error('couldn\'t find package root')
  }

  var require = wrap(realRequire)
  require.resolve = wrap(realResolve)
  require.main = realRequire.main
  require.extensions = realRequire.extensions
  require.registerExtension = realRequire.registerExtension
  require.cache = realRequire.cache

  return require
}
