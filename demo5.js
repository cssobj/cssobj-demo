// demo 5

function updateObj() {
  try{
    var func = new Function('demo5css.obj='+$('demo5_obj').value)
    func()
    demo5css.update()
  }catch(e){}
}

function parseFunction(k, v) {
  if (typeof v === 'string') {
    var m = v.match(/\s*function\s*\(([a-z,]*)\)\s*{(.*)}\s*/i)
    if(!m) return v
    var param = m[1].split(',')
    if(param.length<3) return v
    return new Function(param[0], param[1], param[2], m[2])
  }
  return v
}

var demo5css = cssobj({}, {
  plugins:[
    cssobj_plugin_default_unit()
  ],
  onUpdate: updateDiff('demo5_diff')
})

addPluginDisplayCSS(demo5css, 'demo5_text')

$('demo5_obj').onkeyup = updateObj

updateObj()
