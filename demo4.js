// demo4
var demo4obj = {
  '.nav':{
    color:'red',
    '.item':{
      padding:'10px',
      '.active':{
        color:'orange'
      }
    }
  }
}


var demo4css = cssobj(demo4obj, {local:true, onUpdate: updateDiff('demo4_diff')})

addPluginDisplayCSS(demo4css, 'demo4_text')

$('demo4_obj').value = JSON.stringify(demo4obj, null, 2)

function updateDemo4() {
  try{
    (new Function('demo4css.obj=' + $('demo4_obj').value))()
  }catch(e){}
    demo4css.update()
}

$('demo4_obj').onkeyup = updateDemo4
updateDemo4()
