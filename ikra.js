(function(){
  var ikra = function(){
    var hasUrl = window.location.search.split("&");
    if(hasUrl.length && hasUrl[0] !== ''){
      console.log(hasUrl[1])
      getPage(decodeURIComponent(hasUrl[0].replace('?link=', '')), hasUrl[1].replace('css=', ''));
    }
    $('form').submit(function(e){
      if($('input[name=css]:checked').val() === 'custom') {
        $('.select-css').html('<input type="text" name="custom" placeholder="selector imitation jquery :)">');
        e.preventDefault();
      }
    });
  }
  $(document).ready(ikra);
})();
function getPage(src, sel){
  sel = sel || '.post';
  $.getJSON('http://whateverorigin.org/get?url=' + encodeURIComponent(src) + '&callback=?',
    function(data) {
        var post = $(data.contents).find(sel);
        $("section").html(post);
        toggleMenu();
  });
}
function toggleMenu(){
  $('menu').toggle();
}

