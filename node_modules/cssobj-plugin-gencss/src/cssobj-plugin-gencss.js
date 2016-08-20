// plugin for cssobj

import {dashify, defaults} from '../../cssobj-helper/lib/cssobj-helper.js'

export default function cssobj_plugin_gencss (option) {

  option = defaults(option, {
    indent: '  ',
    initIndent: '',
    newLine: '\n'
  })

  var initIndent = option.initIndent
  var newLine = option.newLine
  var indentStr = option.indent

  return {
    post: function (result) {
    var str = []
    var walk = function(node, indent) {
      if (!node) return ''

      // cssobj generate vanilla Array, it's safe to use constructor, fast
      if (node.constructor === Array) return node.map(function (v) {walk(v,indent)})

      if(node.key && node.key.charAt(0)=='$') return ''

      // nested media rule will pending proceed
      if(node.at=='media' && node.selParent && !node.pending) {
        node.pending=true
        return node.selParent.postArr.push(node)
      }
      delete node.pending

      var prop = node.prop
      var selText = node.selTextPart
      var groupText = node.groupText

      if(!prop) return

      // child node (but not "" key) will add indent
      if(node.parentRule && !node.ruleNode && !node.selParent) indent += indentStr

      // media node will reset indent
      if(node.at=='media') indent = initIndent

      node.postArr = []
      var children = node.children
      var isGroup = node.type=='group'

      // groupNode if have selText, add indent
      var indent2 = selText&&isGroup ? indent + indentStr :indent

      // node have not any selector will have no indent in cssText, else add indent in prop
      var indent3 = !selText && !groupText ? initIndent : indent2 + indentStr

      // get cssText from prop
      var cssText = Object.keys(prop).map(function(k) {
        if(k.charAt(0)=='$') return ''
        for(var v, str='', i=prop[k].length; i--; ) {
          v = prop[k][i]
          str += indent3 + (node.inline ? node.selText + ' ' + k+';' : dashify(k)+': '+v+';') + newLine
        }
        return str
      }).join('')

      if(isGroup) {
        str.push(indent + groupText+' {' + newLine)
      }

      if (cssText) str.push(selText ? indent2 + (node.inline ? cssText : selText + ' {' + newLine + cssText + indent2 + '}' + newLine) : cssText )

      for(var c in children) {
        // empty key will pending proceed
        if(c==='') node.postArr.push(children[c])
        else walk(children[c], indent)
      }

      if(isGroup) {
        str.push(indent+'}' + newLine)
      }

      // media rules need a stand alone block
      node.postArr.map(function(v) {
        walk(v,indent)
      })
      delete node.postArr
    }

    walk(result.root, initIndent)
    result.css = str.join('')
    return result
    }
  }

}
