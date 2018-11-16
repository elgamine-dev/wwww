var fonts = [ 
  'Quicksand::latin',
  'Lobster::latin',
  'Oswald::latin',
  'Montserrat::latin',
  'Roboto+Slab::latin',
  'Raleway:400,900:latin',
  'Pacifico::latin',
  'Lato::latin',
  'Lora::latin',
  'Arvo::latin',
];

function loadFonts (){

  WebFontConfig = {
    google: { families: fonts }
  };
  (function() {
    var wf = document.createElement('script');
    wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
      '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
    wf.type = 'text/javascript';
    wf.async = 'true';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(wf, s);
  })(); 

}

function addFont(f, weight){
  weight= weight ||'';
  return f + ':' + weight + ':latin';
}

function setFont(){
  var currFont = $(this).attr('gfont');
  var currFontWeight = $(this).attr('gfont-weight') || '';
  var currFontSpaces = currFont.replace(/\+/g,' ');
  $(this).css('font-family', '\''+currFontSpaces+'\'');
  $(this).attr('title', currFontSpaces);
  return addFont(currFont, currFontWeight);
}
  
  
(function(cb, fontsArr){
  
  var refs = $('[gfont]');
  var l = refs.length;
  for(var i=0; l>i;i++){
    fontsArr.push(setFont.apply(refs[i]));
  }
  console.log(fonts);
  cb();
  
})(loadFonts, fonts);
  
  
(function(){
  var bgcol = $('[bgcolor]');
  var col = $('[color]');
  
  $.each(col, function(){
    var Col = $(this).attr('color');
    $(this).css('color', Col);
  });
  $.each(bgcol, function(){
    var bgCol = $(this).attr('bgcolor');
    $(this).css('background-color', bgCol);
  });
})();

(function(){

  var footer = $('.fonts');
  var len = fonts.length;
  
  for(var i=0;i<len;i++){
    var pos  = fonts[i].indexOf(':');
    var font = fonts[i].substr(0,pos).replace(/\+/g,' ');
    footer.append('<dd><span style="font-family:\''+font+'\';" font="'+font+'" title="'+font+'">'+font+'</span></dd>');
  }

  $('body').on('mouseenter', 'span[font]',function(){
    var f = $(this).attr('font');
    $('.juge').css('font-family', f);
  });
    
})();    


function judge() {
  var j = $('.juge');
  var trig = $('[trig]');
  var initialContent = j.html();
  var current;
  var actions = {
    askContent: function(){
      current = prompt('Que mettre à la place');
      actions.changeContent();
    },
    changeContent: function(){
      j.html(current);
    }
  }
  
  trig.on('click', actions.askContent);
  
}

$(document).ready(judge);





