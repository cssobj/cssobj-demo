// js for index.html

cssobj({
  'html,body':{
    height:'100%'
  },
  body:{
    fontFamily:'Arial, Helvetica',
    fontSize:14,
    lineHeight:1.5,
    color: '#333333',
    paddingBottom:30
  },
  '.diff':{
    fontWeight:'bold'
  },
  h3:{
    color:'teal'
  },
  'h3 span':{
    fontSize:14
  },
  hr:{
    marginTop:30
  },
  '.demoarea':{
    padding:10
  },
  input:{
    width:50
  },
  textarea:{
    width: 768,
    height: 100
  },
  '.readonly':{
    background:'#cecece',
    height: 150
  },
  '@media (max-width:768)':{
    textarea:{
      width: '100%'
    }
  }
}, {
  local:false,
  plugins:{
    value:cssobj_plugin_value_default_unit()
  }
})

function addPluginDisplayCSS (cssID, textID) {
  cssID.options.plugins.post.push(function (result) {
    var el = $(textID)
    if(el) el.value = getCSSText(result.cssdom)
    return result
  })
  cssID.update()
}

function getCSSText(dom) {
  if(!dom) return ''
  var sheet = dom.sheet || dom.styleSheet
  if(sheet.cssText) return sheet.cssText
  var str = ''
  var rules = sheet.cssRules || sheet.rules
  for(var i = 1, len = rules.length; i < len; i++) {
    str += rules[i].cssText + '\n'
  }
  return str
}

function createDom(parent, tag, attrs) {
  var el = document.createElement(tag)
  !(parent||document.body).appendChild(el)
  attrs = attrs||{}
  Object.keys(attrs).forEach(function(v) {
    el[v] = attrs[v]
  })
  return el
}

function removeDom(dom) {
  return dom.parentNode.removeChild(dom)
}

function $(id) {
  return document.getElementById(id)
}

document.onkeydown = function(event) {
  var e = event||window.event
  var key = e.which || e.keyCode
  var el = document.activeElement
  if(/input/i.test(el.tagName)) {
    var old = parseFloat(el.value)
    if(key==38) el.value = old+1
    if(key==40) el.value = old-1
  }
}


function updateDiff(diffID) {

  return function (result) {
    if(!result.diff) return
    var el = $(diffID)
    var str = ''
    if(result.diff.changed) str += '[changed]'+result.diff.changed.map(function(v) {
      var s = v.selText || v.groupText
      s += '('
      s+= v.diff.changed ? ' * ' + v.diff.changed : ''
      s+= v.diff.added ? ' + ' + v.diff.added : ''
      s+= v.diff.removed ? ' - ' + v.diff.removed : ''
      return s + ')'
    })
    if(result.diff.removed) str += '[removed]' + result.diff.removed.map(function(v) {
      return v.selText || v.groupText
    })
    if(result.diff.added) str += '[added]' + result.diff.added.map(function(v) {
      return v.selText || v.groupText
    })
    if(str) el.innerHTML = 'DIFF RESULT '+str
  }

}
