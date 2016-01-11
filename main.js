var $oneP;
var $twoP;
var selected = false;

var colors = ['red', 'red', 'orange', 'orange','yellow',
	'yellow','green','green','purple','purple','brown','brown'];

var colorReset = colors.map(function(val) {
	return val;
});

$(document).ready(init);

function init() {
	randomize();
	clickHandler();
		
}

function clickHandler() {
	$('.col-lg-3').on('click', checkCoverLayer);
	$('button').on('click', resetGame);
}

function checkCoverLayer() {
	if (!selected) {
		if ($(this).hasClass('blue')){
			$oneP = $(this);
			selectPiece();
		}
	} else {
		if ($(this).hasClass('blue')){
			$twoP = $(this);
			checkForMatch();
		}
	}
}

function selectPiece() {
	$oneP.removeClass('blue');
	selected = true;
}

function checkForMatch() {
	$twoP.removeClass('blue');
	if ($oneP.attr('id') !== $twoP.attr('id')) {
		$('div').off('click');
		setTimeout(function() {
			$oneP.addClass('blue');
			$twoP.addClass('blue');
			clickHandler();
		}, 500);
	} else {
		checkForWin();
	}
	selected = false;
}

function checkForWin() {
	if (!$('.container').children().children().hasClass('blue')){
		alert("You Win");
	}
}

function randomize() {
	$container = $('.container');
	var rand;
	var length = colors.length;
	var colorGot;
	for (var i = 0; i < length; i++) {
		rand = Math.floor(Math.random()*colors.length);
		colorGot = colors[rand];
		$container.find('div:nth-child('+(i+1)+')').attr('id', colorGot);
		colors.splice(rand, 1);
	}
}

function resetGame() {
	colors = colorReset.map(function(val) {
		return val;
	});
	$('.row').children().addClass('blue');
	randomize();
}