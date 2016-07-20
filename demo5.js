// demo 5

function updateObj() {
  try{
    demo5obj = JSON.parse($('demo5_obj').value, parseFunction)
    demo5css.obj = demo5obj
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

var demo5obj = {
  '.box1':{
    $id:'box1',
    width:10,
    height: 'function(prev,node,ref) {return this.width}'
  },
  '.box2':{
    $order:2,
    height: 'function(prev,node,ref) {return ref.box1.lastVal.height + ref.box3.lastVal.height}'
  },
  '.box3':{
    $id:'box3',
    $order:1,
    height: 'function(prev,node,ref) {return ref.box1.lastVal.width*2}'
  }
}


var demo5css = cssobj({}, {
  plugins:{
    value:cssobj_plugin_value_default_unit()
  }
})

addPluginDisplayCSS(demo5css, 'demo5_text')

$('demo5_obj').value = JSON.stringify(demo5obj, null, 2)

$('demo5_obj').onkeyup = updateObj

updateObj()
