var demo2obj = {
  ul:{
    listStyleType: 'disc',
    li:{
      color:'#999',
      'span,strong':{
        color:'red',
        '&:after':{
          content:'": "'
        }
      }
    }
  }
}


var demo2css = cssobj(demo2obj)

addPluginDisplayCSS(demo2css, 'demo2_text')

$('demo2area').innerHTML = $('demo2_html').value
$('demo2_obj').value = JSON.stringify(demo2obj, null, 2)

$('demo2_obj').onkeyup = function() {
  try{
    demo2obj = JSON.parse(this.value)
    demo2css.obj = demo2obj
    demo2css.update()
  }catch(e){}
}
