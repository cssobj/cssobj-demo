# cssobj-plugin-gencss

Generate css text from [cssobj-core](https://github.com/cssobj/cssobj-core).

## Usage

``` javascript
var cssobj_core = require('cssobj-core')
var pluginGenCSS = require('cssobj-plugin-gencss')
var cssobj = cssobj_core({plugins: [pluginGenCSS(option)] })
var result = cssobj(obj)

// result.css will have the css text generated
```

## Install

``` javascript
npm install cssobj/cssobj-plugin-gencss
```

## API

### `var plugin = pluginGenCSS(option)`

Get plugin function to apply, pass option.

### *PARAMS*

### `option`

 - `indent` : {string} Indent string for each level when format css, default is '  ' (2 space).

 - `newLine` : {string} New-line string. default is '\n'.

 - `initIndent` : {string} Init indent for all lines. default is ''.

### *RETURN*

A function can be as cssobj plugin.


## Example

``` javascript
pluginGenCSS({indent:'\t', initIndent:'\t'})  // all lines will have \t infront

pluginGenCSS({newLine:''})  //all lines will join together

```

## Helpers

This plugin can use with [plugin-stylize](https://github.com/cssobj/cssobj-plugin-stylize) to apply generated css text into `<style>` tag.



