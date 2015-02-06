var Player1 = function(options) {
	var args = options || {};

}

//Player Instance


var Computer = function(options) {
	var args = options || {};

}

//Computer Instance

var Ships = function(options) {
	var args = options || {};

	this.type = args.type;
	this.size = args.size;
	this.position = args.position;
	this.hit = false;
	// this.miss = args.miss;
}

Ships.prototype.hit = function (shipHit, hitUpdate) {
	shipHit.hit = hitUpdate;
	if (hitUpdate === true) {
		this.hit === true
	}
}

Ships.prototype.position = function (x, y, direction) {


	Ships.position = 
}


//Ships Instances

var BS = new Ships ({type: 'Battleship', size: 4});
var AC = new Ships ({type: 'Aircraft Carrier', size: 5});
var D = new Ships ({type: 'Destroyer', size: 3});
var PB = new Ships ({type : 'Patrol Boat', size: 2});
var S = new Ships ({type: 'Submarine', type: 3}) 



