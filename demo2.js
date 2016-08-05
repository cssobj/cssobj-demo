var demo2obj = {
  ul:{
    listStyleType: 'disc',
    flex:1,
    display:'flex',
    // for IE
    imeMode: 'auto',
    background: ['-webkit-linear-gradient(grey, white)', 'linear-gradient(grey, white)'],
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


function updateDemo2() {
  try{
    (new Function('demo2css.obj=' + $('demo2_obj').value))()
  }catch(e){}
    demo2css.update()
}

$('demo2_obj').onkeyup = updateDemo2
updateDemo2()
