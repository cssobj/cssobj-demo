var demo2obj = {
  ul:{
    listStyleType: 'disc',
    // for IE
    imeMode: 'auto',
    transform:'scale(0.8)',
    borderImage: 'none',
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

var demo2css = cssobj(demo2obj, {onUpdate: updateDiff('demo2_diff')})

addPluginDisplayCSS(demo2css, 'demo2_text')

$('demo2area').innerHTML = $('demo2_html').value
$('demo2_obj').value = JSON.stringify(demo2obj, null, 2)

$('demo2_obj').onkeyup = function() {
  try{
    demo2obj = JSON.parse(this.value)
  }catch(e){}
    demo2css.obj = demo2obj
    demo2css.update()
}
