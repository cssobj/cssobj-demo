// js for index.html

var demo1obj = {
  '.box':{
    $id: 'box',
    background:'dimgrey',
    height:30,
    width:30,
    margin:10,
    float:'left'
  }
}

var demo1css = cssobj(demo1obj, {
  local:{prefix:'demo1_'},
  plugins:[
    cssobj_plugin_default_unit()
  ],
  onUpdate: updateDiff('demo1_diff')
})

addPluginDisplayCSS(demo1css, 'demo1_text')

function toggleDemo1Height() {
  var box = demo1obj['.box']
  if(typeof box.height=='function'){
    box.height = box.width
    $('demo1_height').parentNode.style.display = 'inline'
    $('demo1_height').value = box.width
    demo1css.update()
  } else {
    box.height = function() {
      return box.width/2
    }
    $('demo1_height').parentNode.style.display = 'none'
    demo1css.update()
  }
}
