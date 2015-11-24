
var Boggle = {
	started: false,
	$boggleSquares: $('.boggle-square'),
  $timer: $('#time'),
	squares : [
		['R', 'R', 'G', 'V', 'W', 'O'],
		['W', 'U', 'N', 'T', 'O', 'O'],
		['M', 'E', 'A', 'E', 'E', 'E'],
		['F', 'R', 'Y', 'S', 'A', 'I'],
		['S', 'Y', 'R', 'F', 'P', 'I'],
		['A', 'R', 'F', 'S', 'A', 'F'],
		['L', 'C', 'T', 'P', 'I', 'C'],
		['S', 'S', 'N', 'S', 'U', 'E'],
		['I', 'E', 'C', 'P', 'T', 'S'],
		['T', 'O', 'U', 'T', 'O', 'O'],
		['D', 'H', 'N', 'T', 'O', 'D'],
		['E', 'L', 'I', 'T', 'C', 'I'],
		['J', 'K', 'B', 'X', 'Z', 'Qu'],
		['E', 'N', 'N', 'N', 'D', 'A'],
		['L', 'O', 'N', 'D', 'R', 'H'],
		['E', 'E', 'E', 'E', 'A', 'A'],
		['O', 'H', 'D', 'L', 'R', 'H'],
		['N', 'A', 'M', 'G', 'N', 'E'],
		['E', 'C', 'C', 'N', 'T', 'S'],
		['D', 'N', 'O', 'L', 'H', 'H'],
		['U', 'G', 'E', 'E', 'M', 'A'],
		['E', 'T', 'I', 'T', 'I', 'I'],
		['M', 'T', 'E', 'T', 'O', 'T'],
		['R', 'A', 'S', 'A', 'I', 'F'],
		['U', 'W', 'L', 'I', 'Qu', 'K'],
	],

	init: function() {
		$('button').on('click', Boggle.start);
	},

	start: function() {
		Boggle.started = true;
    Boggle.$boggleSquares.show();
    Boggle.$timer.show();
    Boggle.$timer.html("3 minutes 00 seconds");
    $('h2').hide();
		var shuffled = _.shuffle(Boggle.squares);
		Boggle.renderBoard(shuffled);

		//timer
    var startedAt = new Date().getTime() + 181000;
      
    var gameTimer = setInterval(function(){ 
      var timer = new Date().getTime();

      //minutes
      var min = ((startedAt - timer) / 1000)/60;
      var min = min.toString();
	    min = min.slice(0, (min.indexOf(".")));
	    Number(min); 

      //seconds
      var sec = ((startedAt - timer) / 1000);
      var sec = Math.floor(sec % 60);

      if (sec < 10) {
        Boggle.$timer.html(min + " minutes 0" + sec + " seconds");
      } else {
        Boggle.$timer.html(min + " minutes " + sec + " seconds");
      }

      //game over
      if (min == 0 && sec == 1) {
        Boggle.$boggleSquares.hide();
        Boggle.$timer.hide();
        $('h2').show();
        clearInterval(gameTimer);
        $('button').unbind('click');
        Boggle.init();
      }

      }, 500);
	},

	renderBoard: function(squares) {
		//take random letter from each squares array
		_.each(squares, function(square, i){
			var $square = Boggle.$boggleSquares.eq(i);
			$square.text(square[Boggle.randomNumber()]);
		});
	},

	randomNumber: function() {
		return _.random(0, 5);
	}
}

Boggle.init();


