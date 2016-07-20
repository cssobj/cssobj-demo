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


var demo4css = cssobj(demo4obj)

addPluginDisplayCSS(demo4css, 'demo4_text')

$('demo4_obj').value = JSON.stringify(demo4obj, null, 2)

$('demo4_obj').onkeyup = function() {
  try{
    demo4obj = JSON.parse(this.value)
    demo4css.obj = demo4obj
    demo4css.update()
  }catch(e){}
}
