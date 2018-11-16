 $(document).ready(function(){
	var letters;
 	var i = 0;
 	var waiter = {left:false,right:false};
 	$cont = $('.cont');
 	$trans = $('.trans');

 	(function(){
 		$('[lang-sel]').on('click', function(){
 			var ln = $(this).attr('lang-sel');
 			letters = langs[ln]
 			set(letters[i]);
 			$('aside').hide(600)
            $('#app').show(600)
 			watchHeight();

 		});
 	})()

 	var goleft = function(){
 		i = i-1;
 		go(i)
 	};
 	var goright = function(){
 		i = i+1;
 		go(i)
 	};

 	$('.left').on('click', goleft)
 	$('.right').on('click', goright)

 	$(document).on('keydown keypress', function (event) {
        if (event.keyCode == 39 && !disabled('right')) {
        	goright();
        }
        if (event.keyCode == 37 && !disabled('left')) {
            goleft();
        }
    });

 	function go(incr){
 		console.log(incr)
 		if(incr < 0 || incr > letters.length-1) {
 			incr = 0;
 		}
 		if (letters[incr] !== undefined) {
 			set(letters[incr])
 		} else {
 			incr = -1
 		}
 		i = incr
 	}

 	function set(l){
 		$cont.html(l.l)
 		l.t = l.t || ''
 		$trans.html(l.t)
 	}

 	function disabled(dir){
 		var ret = !!waiter[dir];
 		waiter[dir] = !waiter[dir];

    	setTimeout(function(){
    		waiter[dir] = false;
    	},600);
 		return ret;
 	}

    function watchHeight(){
        var height = $(window).height();
        $('.cont').css('font-size', height+'px');
        $(window).resize(function(){
            height = $(window).height();
            $('.cont').css('font-size', height+'px');
            console.log(height);
        });
        
    }
 });