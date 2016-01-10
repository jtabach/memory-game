var $oneP;
var $twoP;
var selected = false;
// var timeDone = true;

$(document).ready(init);

function init() {
	// if (timeDone) {
		$('div').on('click', checkCoverLayer);
	// }
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
			// timeDone = false;
		}
	}
}

function selectPiece() {
	$oneP.removeClass('blue');
	console.log($oneP.attr('id'))
	selected = true;
}

function checkForMatch() {
	$twoP.removeClass('blue');
	if ($oneP.attr('id') !== $twoP.attr('id')) {
		setTimeout(function() {
			$oneP.addClass('blue');
			$twoP.addClass('blue');
			// timeDone = true;
		}, 1000);
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

function resetGame() {
	$('.container').children().children().addClass('blue');
}