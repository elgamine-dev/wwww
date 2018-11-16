var current = 0;
var player;
var options = {
  controls:0,
  showinfo: 0,
  listType:'playlist',
};
var height;
var playlists;

function ytStateChange(st){
  watcher[st.data] && watcher[st.data]()
}

function onYouTubePlayerAPIReady(){
  console.warn('onytr')
  $.ajax({
    url:'tube.json',
    dataType:"json",
    success:function(data){
      playlists = data.playlists;
      setPlayer(data.playlists[0].id);
      makeMenu(data.playlists);
    }
  });
}

var watcher = {
  '-1':function(){
    console.log('unstarted');
  },
  '0':function(){
    console.log('ended');
    wait(handler.next);
  },
  '1':function(){
    console.log('playing');
  },
  '2':function(){
    console.log('paused');
  },
  '5':function(){
    console.log('cued');
    player.playVideo();
  },
};

var handler = {
  play: function(){
    var state = player.getPlayerState();
    if (state !== 1) {
      player.playVideo();
    } else {
      player.pauseVideo();
    }
  },
  next: function(){
    current += 1;
    player.nextVideo();
  },
  prev: function(){
    current -= 1;
    player.previousVideo();
  },
  hide: function(){
    $('.videoHide').toggle();
  },
  list: function(){
    $('#pls-menu').toggle();
  },
  setList: function(ceci){
    var pos = $(ceci).attr('pos');
    var id = playlists[pos].id;
    player.loadPlaylist({
      listType:'playlist',
      list: id
    });
    handler.list();
  },
  arb : function(){
    var stuff = prompt('what pls?');
    player.loadPlaylist({
      listType:'playlist',
      list: stuff
    });
  }
};

function setPlayer(chaine){
  options['list'] = chaine;
  height = $(window).height() - 50;
  $('.videoWrapper,.videoHide').css('height',height);
  player = new YT.Player('ytplayer',{
    height:'390',
    width :height,
    playerVars: options,
  });
  player.addEventListener('onStateChange', ytStateChange);
}

function makeMenu(pls){
  var len = pls.length;
  for (var i=0;i<len;i++){
    var el = '<li><button action="setList" pos="'+i+'">'+pls[i].title+'</button></li>';
    $('#pls-menu').append(el);
  }
}

function wait(cb){
  setTimeout(cb,3000);
}

$(document).ready(function(){
  //watch button interface
  $('body').on('click', '[action]', function(){
    console.log('action')
    var action = $(this).attr('action');
    handler[action] && handler[action](this);
  });
});