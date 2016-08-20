// cssobj plugin, use with plugin-cssom

import {arrayKV} from '../../cssobj-helper/lib/cssobj-helper.js'

export default function cssobj_plugin_csstext(callback) {

  var cb = function(str) {
    typeof callback=='function' && callback(str)
  }

  return {
    post: function getCSSText(result) {

      var dom = result.cssdom

      if(!dom) return cb(''), result
      var sheet = dom.sheet || dom.styleSheet
      if(sheet.cssText) return cb(sheet.cssText), result

      var str = ''
      var rules = sheet.cssRules || sheet.rules
      for(var i = 0, len = rules.length; i < len; i++) {
        str += rules[i].cssText + '\n'
      }

      return cb(str), result
    }
  }
}

// helper function to add plugin
cssobj_plugin_csstext.addPlugin = function(result, callback) {
  arrayKV(result.options, 'plugins', cssobj_plugin_csstext(callback))
}

