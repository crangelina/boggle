
var Boggle = {
	started: false,
	$boggleSquares: $('.boggle-square'),
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
		var shuffled = _.shuffle(Boggle.squares);
		Boggle.renderBoard(shuffled);
		//timer
    var startedAt = new Date().getTime();
      setInterval(function(){ 
        var timer = new Date().getTime();

        //minutes
        var min = ((timer-startedAt) / 1000)/60;
        var min = min.toString();
		    min = min.slice(0, (min.indexOf(".")));
		    Number(min); 

        //seconds
        var sec = ((timer-startedAt) / 1000);
        var sec = Math.floor(sec % 60);

        if (sec < 10) {
          $('#time').html(min + " minutes 0" + sec + " seconds");
        } else {
          $('#time').html(min + " minutes " + sec + " seconds");
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

//Math.floor(90/60) >> 1
//Math/floor(90%60) >> 30
// if min < 10 concat string 0 in front of it
