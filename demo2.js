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

