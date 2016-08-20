# cssobj-plugin-csstext

Get cssText from CSSOM.

## Install

``` javascript
npm install cssobj/cssobj-plugin-csstext
```

## Usage:

### Option 1: as a plugin

It **must** load after [plugin-cssom](https://github.com/cssobj/cssobj-plugin-cssom).

``` javascript
var pluginCssText = require('cssobj-plugin-csstext')

var result = cssobj(obj)

result.options.plugins.push( pluginCssText(callback) )

function callback(css) {
  // for every time result.update
  // css === the whole cssom text of result
}
```

### Option 2: as callback for onUpdate

``` javascript
var result = cssobj(obj, { onUpdate: pluginCssText(callback).post })
```

