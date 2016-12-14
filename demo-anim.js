// js for index.html

var demo_animobj = {
  '.box':{
    $id: 'box',
    float:'none'
  }
}

var demo_animcss = cssobj(demo_animobj, {
  local:{space:'_demo-anim_'},
  plugins:[
    cssobj_plugin_default_unit()
  ],
  onUpdate: updateDiff('demo_anim_diff')
}, {left: 10})

addPluginDisplayCSS(demo_animcss, 'demo_anim_text')

function demo_anim_runner() {
  var box = demo_animobj['.box']
  var data = demo_animcss.state
  data.left += data.dir || 1
  if(data.left>500) data.dir=-1
  if(data.left<0) data.dir=1
  box.marginLeft = data.left
  demo_animcss.update()
}

setInterval(demo_anim_runner, 4)
