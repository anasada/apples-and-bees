document.write(
    unescape("%3Cscript src='https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js' type='text/javascript'%3E%3C/script%3E")
  );


/// Block 1 Conditions: 
// 6 maps * 3 configs * # each 
// now 18 maps -- but its 3 versions of original 6. 
const eachTimes = 3;
const amountCondition = 18 * eachTimes; // number of times presenting each condition
// const amountCondition = 7; // delete later!!!

var trialsPartOne = new Array(); 
var map    = 1;  //maps 1-18

var configurations =  [[1, 1, 2],  // AAB, ABA, BAA
				       [1, 2, 1], 
				       [2, 1, 1]];

for(var i = 0; i < amountCondition; i++){ 
	if (map>18){map = 1}

    if (i < amountCondition / 3){ // for 1/3 of trials, AAB
		trialsPartOne[i] = new Array();
    	trialsPartOne[i].push(map, configurations[0]);
     }
     
     else if ((i >= amountCondition / 3) && (i < amountCondition / 3 * 2)){ // 2nd 3rd, ABA
		trialsPartOne[i] = new Array();
    	trialsPartOne[i].push(map, configurations[1]);
     }
     
     else if ((i >= amountCondition / 3 * 2) && (i < amountCondition)){ // 3rd 3rd BAA
		trialsPartOne[i] = new Array();
    	trialsPartOne[i].push(map, configurations[2]);
     }
   	map++
}

// trials shown in different random order for each participant
function shuffle(array) {
	let currentIndex = array.length,  randomIndex;
  
	// While there remain elements to shuffle.
	while (currentIndex != 0) {
  
	  // Pick a remaining element.
	  randomIndex = Math.floor(Math.random() * currentIndex);
	  currentIndex--;
  
	  // And swap it with the current element.
	  [array[currentIndex], array[randomIndex]] = [
		array[randomIndex], array[currentIndex]];
	}
  
	return array;
  }
  
shuffle(trialsPartOne);



/// Block 2 Conditions: 
// Map_new * 3 ABconfigs * # each (3 versions)
const eachTimes2 = 3;
const amountCondition2 = 3 * eachTimes2; // number of times presenting each condition

var trialsPartTwo = new Array(); 
var map    = 19;  //maps 19-21

for(var i = 0; i < amountCondition2; i++){ 
    if (map>21){map = 19}
    if (i < amountCondition2 / 3){ // for 1/3 of trials, AAB
		trialsPartTwo[i] = new Array();
    	trialsPartTwo[i].push(map, configurations[0]);
     }
     
     else if ((i >= amountCondition2 / 3) && (i < amountCondition2 / 3 * 2)){ // 2nd 3rd, ABA
		trialsPartTwo[i] = new Array();
    	trialsPartTwo[i].push(map, configurations[1]);
     }
     
     else if ((i >= amountCondition2 / 3 * 2) && (i < amountCondition2)){ // 3rd 3rd BAA
		trialsPartTwo[i] = new Array();
    	trialsPartTwo[i].push(map, configurations[2]);
     }
    map++
}
shuffle(trialsPartTwo)

// Block 1 vs Block 2
block = 1;
if (block == 1){
	trials = trialsPartOne;
}
else{
	trials = trialsPartTwo;
}


// save each trial separately: record trials (maps + configs) order, final selections, CL
class recordData { 
	constructor() {
		this.blockOne = trialsPartOne 
		this.blockTwo = trialsPartTwo
	}
}

// //still working on it****
// var trialsData = []
// for (index in trials) {
//     var triNum = new recordData();
//     trialsData.push(triNum);
// }



///// 7 maps; different red/purple configurations
var ctx = document.getElementById("myCanvas").getContext("2d"); //canvas

// Each time clicks next, generates different map
var counter = -1 // starts at -1 for each user
function generateMap(){

	/// Setup for each trial:
	// Reset instructions 
    document.getElementById("pleasePoint").innerHTML = "Click on the item that you wish to highlight for your partner.";
    document.getElementById("pleasePoint").style.color = "black";

    clickIndex = 0; // reset every trial (for purplePoint)
    zeroIndex  = 0;

	// Can't click next yet, but can choose zero
	document.getElementById("expNext").hidden = true;
	document.getElementById("zeroBox").hidden = false;

	// Reomve  confidence rating question
	var windBox = document.getElementById("windowBox");
	windBox.style.display = "none";
	var resBox = document.getElementById("resultRate");
	resBox.style.display = "none";


	// Adjust counter, maps, configurations
	counter++
	if (counter > trials.length){
		return 
	}
	var mapNumber   = trials[counter][0]; // a number from 1-7
	var itemsConfig = trials[counter][1]; // an array of 2 ones and 1 two

	// trialsData[counter]; //delete later (but what it is)

	// Clear canvas each time gen map 
	ctx.clearRect(0, 0, w, w); 



	// Design maps
	/// Map 1: 
	if (mapNumber == 1) {
		// green tile (start)
		g_x0 = w - square_size;
		g_y0 = w - square_size;

		// red tile (goal)
		r_x0  = 0;
		r_y0  = square_size;

		// purple tiles
		p1_x0 = square_size * 4;
		p1_y0 = square_size;
		p2_x0 = square_size;
		p2_y0 = square_size * 3;
		p3_x0 = square_size;
		p3_y0 = square_size * 4;
	}


	/// Map 2:
	else if (mapNumber == 2) {
		// green tile (start)
		g_x0 = w - square_size;
		g_y0 = w - square_size;

		// red tile 
		r_x0  = 0;
		r_y0  = square_size * 3;

		// purple tiles
		p1_x0 = square_size * 4;
		p1_y0 = 0;
		p2_x0 = square_size * 3;
		p2_y0 = 0;
		p3_x0 = square_size * 4;
		p3_y0 = square_size * 2;
	}


	/// Map 3: 
	else if (mapNumber == 3) {
		// green tile (start)
		g_x0 = w - square_size;
		g_y0 = w - square_size;
		
		// red tile (goal)
		r_x0  = 0;
		r_y0  = square_size * 3;

		// purple tiles
		p1_x0 = square_size * 2;
		p1_y0 = square_size;
		p2_x0 = square_size;
		p2_y0 = square_size;
		p3_x0 = square_size * 3;
		p3_y0 = square_size * 4;
	}



	/// Map 4: 
	else if (mapNumber == 4) {
		// green tile (start)
		g_x0 = w - square_size;
		g_y0 = w - square_size;
		
		// red tile (goal)
		r_x0  = 0;
		r_y0  = square_size * 3;

		// purple tiles
		p1_x0 = square_size;
		p1_y0 = 0;
		p2_x0 = square_size * 2;
		p2_y0 = square_size * 2;
		p3_x0 = square_size * 4;
		p3_y0 = square_size * 2;
	}



	/// Map 5:
	else if (mapNumber == 5) {
		// green tile (start)
		g_x0 = w - square_size;
		g_y0 = w - square_size;
		
		// red tile (goal)
		r_x0  = 0;
		r_y0  = square_size * 3

		// purple tiles
		p1_x0 = square_size * 2;
		p1_y0 = square_size * 4;
		p2_x0 = square_size;
		p2_y0 = square_size * 4;
		p3_x0 = square_size * 4;
		p3_y0 = square_size * 3;
	}


	/// Map 6 (prev. 7): 
	else if (mapNumber == 6) {
		// green tile (start)
		g_x0 = w - square_size;
		g_y0 = w - square_size;
		
		// red tile (goal)
		r_x0  = 0;
		r_y0  = square_size;

		// purple tiles
		p1_x0 = square_size * 3;
		p1_y0 = square_size;
		p2_x0 = square_size * 4;
		p2_y0 = square_size * 2;
		p3_x0 = 0;
		p3_y0 = square_size * 3;
	}


	/// Map 7 (rotate map1 vers1): 
	else if (mapNumber == 7) {
		// green tile (start)
		g_x0 = 0;
		g_y0 = square_size * 4;
		
		// red tile (goal)
		r_x0  = square_size * 3;
		r_y0  = 0;

		// purple tiles
		p1_x0 = square_size * 3;
		p1_y0 = square_size * 4;
		p2_x0 = square_size;
		p2_y0 = square_size;
		p3_x0 = 0;
		p3_y0 = square_size;
	}

	/// Map 8 (rotate map1 vers2): 
	else if (mapNumber == 8) {
		// green tile (start)
		g_x0 = square_size * 4;
		g_y0 = 0;
		
		// red tile (goal)
		r_x0  = square_size;
		r_y0  = square_size * 4;

		// purple tiles
		p1_x0 = square_size;
		p1_y0 = 0;
		p2_x0 = square_size * 3;
		p2_y0 = square_size * 3;
		p3_x0 = square_size * 4;
		p3_y0 = square_size * 3;
	}


	/// Map 9 (rotate map2 vers1): 
	else if (mapNumber == 9) {
		// green tile (start)
		g_x0 = 0;
		g_y0 = square_size * 4;
		
		// red tile (goal)
		r_x0  = square_size;
		r_y0  = 0;

		// purple tiles
		p1_x0 = square_size * 4;
		p1_y0 = square_size * 4;
		p2_x0 = square_size * 4;
		p2_y0 = square_size * 3;
		p3_x0 = square_size * 2;
		p3_y0 = square_size * 4;
	}

	/// Map 10 (rotate map2 vers2): 
	else if (mapNumber == 10) {
		// green tile (start)
		g_x0 = 0;
		g_y0 = 0;
		
		// red tile (goal)
		r_x0  = square_size * 4;
		r_y0  = square_size;

		// purple tiles
		p1_x0 = 0;
		p1_y0 = square_size * 4;
		p2_x0 = square_size;
		p2_y0 = square_size * 4;
		p3_x0 = 0;
		p3_y0 = square_size * 2;
	}


	/// Map 11 (rotate map3 vers1): 
	else if (mapNumber == 11) {
		// green tile (start)
		g_x0 = 0;
		g_y0 = 0;
		
		// red tile (goal)
		r_x0  = square_size * 4;
		r_y0  = square_size;

		// purple tiles
		p1_x0 = square_size * 2;
		p1_y0 = square_size * 3;
		p2_x0 = square_size * 3;
		p2_y0 = square_size * 3;
		p3_x0 = square_size;
		p3_y0 = 0;
	}

	/// Map 12 (rotate map3 vers2): 
	else if (mapNumber == 12) {
		// green tile (start)
		g_x0 = square_size * 4;
		g_y0 = 0;
		
		// red tile (goal)
		r_x0  = square_size * 3;
		r_y0  = square_size * 4;

		// purple tiles
		p1_x0 = square_size;
		p1_y0 = square_size * 2;
		p2_x0 = square_size;
		p2_y0 = square_size * 3;
		p3_x0 = square_size * 4;
		p3_y0 = square_size;
	}

	/// Map 13 (rotate map4 vers1): 
	else if (mapNumber == 13) {
		// green tile (start)
		g_x0 = 0;
		g_y0 = square_size * 4;
		
		// red tile (goal)
		r_x0  = square_size;
		r_y0  = 0;

		// purple tiles
		p1_x0 = square_size * 2;
		p1_y0 = square_size * 2;
		p2_x0 = square_size * 4;
		p2_y0 = square_size;
		p3_x0 = square_size * 2;
		p3_y0 = square_size * 4;
	}

	/// Map 14 (rotate map4 vers2): 
	else if (mapNumber == 14) {
		// green tile (start)
		g_x0 = 0;
		g_y0 = square_size * 4;
		
		// red tile (goal)
		r_x0  = square_size * 4;
		r_y0  = square_size * 3;

		// purple tiles
		p1_x0 = square_size * 2;
		p1_y0 = square_size * 2;
		p2_x0 = square_size * 3;
		p2_y0 = 0;
		p3_x0 = 0;
		p3_y0 = square_size * 2;
	}

	/// Map 15 (rotate map5 vers1): 
	else if (mapNumber == 15) {
		// green tile (start)
		g_x0 = 0;
		g_y0 = square_size * 4;
		
		// red tile (goal)
		r_x0  = square_size;
		r_y0  = 0;

		// purple tiles
		p1_x0 = 0;
		p1_y0 = square_size * 2;
		p2_x0 = 0;
		p2_y0 = square_size;
		p3_x0 = square_size;
		p3_y0 = square_size * 4;
	}

	/// Map 16 (rotate map5 vers2): 
	else if (mapNumber == 16) {
		// green tile (start)
		g_x0 = 0;
		g_y0 = 0;
		
		// red tile (goal)
		r_x0  = square_size * 4;
		r_y0  = square_size;

		// purple tiles
		p1_x0 = square_size * 2;
		p1_y0 = 0;
		p2_x0 = square_size * 3;
		p2_y0 = 0;
		p3_x0 = 0;
		p3_y0 = square_size;
	}

	/// Map 17 (rotate map6 vers1): 
	else if (mapNumber == 17) {
		// green tile (start)
		g_x0 = 0;
		g_y0 = square_size * 4;
		
		// red tile (goal)
		r_x0  = square_size * 3;
		r_y0  = 0;

		// purple tiles
		p1_x0 = square_size * 3;
		p1_y0 = square_size * 3;
		p2_x0 = square_size * 2;
		p2_y0 = square_size * 4;
		p3_x0 = square_size;
		p3_y0 = 0;
	}

	/// Map 18 (rotate map6 vers2): 
	else if (mapNumber == 18) {
		// green tile (start)
		g_x0 = square_size * 4;
		g_y0 = 0;
		
		// red tile (goal)
		r_x0  = square_size;
		r_y0  = square_size * 4;

		// purple tiles
		p1_x0 = square_size;
		p1_y0 = square_size;
		p2_x0 = square_size * 2;
		p2_y0 = 0;
		p3_x0 = square_size * 3;
		p3_y0 = square_size * 4;
	}




	//// Block 2:
	/// Map 19: 
	if (mapNumber == 19) {
		// green tile (start)
        g_x0 = square_size * 4;
        g_y0 = square_size * 4;
    
        // red tile (goal)
        r_x0  = 0;
        r_y0  = 0;
    
        // purple tiles
        p1_x0 = square_size * 4;
        p1_y0 = 0;
        p2_x0 = square_size * 2;
        p2_y0 = square_size * 2;
        p3_x0 = 0;
        p3_y0 = square_size * 4;
	}

	/// Map 20:
	else if (mapNumber == 20) {
        // green tile (start)
        g_x0 = 0;
        g_y0 = square_size * 4;

		// red tile 
		r_x0  = square_size * 4;
		r_y0  = 0;

		// purple tiles
		p1_x0 = square_size * 4;
		p1_y0 = square_size * 4;
		p2_x0 = square_size * 2;
		p2_y0 = square_size * 2;
		p3_x0 = 0;
		p3_y0 = 0;
	}

	/// Map 21: 
	else if (mapNumber == 21) {
        // green tile (start)
        g_x0 = square_size * 4;
        g_y0 = 0;

		// red tile (goal)
		r_x0  = 0;
		r_y0  = square_size * 4;

		// purple tiles
		p1_x0 = 0;
		p1_y0 = 0;
		p2_x0 = square_size * 2;
		p2_y0 = square_size * 2;
		p3_x0 = square_size * 4;
		p3_y0 = square_size * 4;
	}




	///// Make the grid drawing 

	// Red/finish tile
	ctx.beginPath();
	ctx.fillStyle = "#e04136";
	ctx.rect(r_x0, r_y0, square_size, square_size);
	ctx.fill();
	ctx.closePath();

	// Green/start tile
	ctx.beginPath() 
	ctx.fillStyle = "#07cb07";
	ctx.rect(g_x0, g_y0, square_size, square_size);
	ctx.fill();
	ctx.closePath();

	// Purple tiles
	ctx.beginPath();
	ctx.fillStyle = "#b4a7d6";
	ctx.rect(p1_x0, p1_y0, square_size, square_size);
	ctx.rect(p2_x0, p2_y0, square_size, square_size);
	ctx.rect(p3_x0, p3_y0, square_size, square_size);
	ctx.fill();
	ctx.closePath();

	// Apples & Bees images (randomized p's config equally before)
	// var itemsConfig = trials[counter][1]; // an array of 2 ones and 1 two
	itemAt_p1 = itemsConfig[0];
	itemAt_p2 = itemsConfig[1];
	itemAt_p3 = itemsConfig[2];

	// whether p1 is apple or bee, draw accordingly 
	if (itemAt_p1 == 1) {
		drawApple(ctx, p1_x0, p1_y0, square_size);
	}
	else if (itemAt_p1 == 2) {
		drawBee(ctx, p1_x0, p1_y0, square_size);
	}

	// p2
	if (itemAt_p2 == 1) {
		drawApple(ctx, p2_x0, p2_y0, square_size);
	}
	else if (itemAt_p2 == 2) {
		drawBee(ctx, p2_x0, p2_y0, square_size);
	}

	// p3
	if (itemAt_p3 == 1) {
		drawApple(ctx, p3_x0, p3_y0, square_size);
	}
	else if (itemAt_p3 == 2) {
		drawBee(ctx, p3_x0, p3_y0, square_size);
	}


	// Grid lines (code put after tiles so will be overlayed)
	ctx.beginPath() 
	for (let i=0; i<=w; i=i+square_size){
		//horizontal lines
		ctx.moveTo(0,i);
		ctx.lineTo(w,i);

		//vertical lines
		ctx.moveTo(i,0);
		ctx.lineTo(i,w);
	}
	ctx.lineWidth = 2;
	ctx.strokeStyle = "#626262";
	ctx.stroke();
	ctx.closePath();



	// Walls on maps 1/ 6 (prev. 7)/7/8/17/18
	if (mapNumber==1){
		ctx.beginPath();
		ctx.lineWidth = 11;
		ctx.strokeStyle = "black";
		ctx.moveTo(square_size, (w-square_size));
		ctx.lineTo(square_size, w);
		ctx.stroke();
		ctx.closePath();
	}

	else if (mapNumber==6){ 
		ctx.beginPath();
		ctx.lineWidth = 10;
		ctx.strokeStyle = "black";
		ctx.lineJoin = "bevel";
		ctx.strokeRect(square_size, (square_size*2), square_size, (square_size*2));
		ctx.closePath();
	}

	else if (mapNumber==7){
		ctx.beginPath();
		ctx.lineWidth = 11;
		ctx.strokeStyle = "black";
		ctx.moveTo(0, square_size);
		ctx.lineTo(square_size, square_size);
		ctx.stroke();
		ctx.closePath();
	} 

	else if (mapNumber==8){
		ctx.beginPath();
		ctx.lineWidth = 11;
		ctx.strokeStyle = "black";
		ctx.moveTo(square_size*4, square_size*4);
		ctx.lineTo(w, square_size*4);
		ctx.stroke();
		ctx.closePath();
	} 

	else if (mapNumber==17){ 
		ctx.beginPath();
		ctx.lineWidth = 10;
		ctx.strokeStyle = "black";
		ctx.lineJoin = "bevel";
		ctx.strokeRect(square_size, square_size, (square_size*2), square_size);
		ctx.closePath();
	}

	else if (mapNumber==18){ 
		ctx.beginPath();
		ctx.lineWidth = 10;
		ctx.strokeStyle = "black";
		ctx.lineJoin = "bevel";
		ctx.strokeRect(square_size*2, square_size*3, (square_size*2), square_size);
		ctx.closePath();
	}

	//set back to default
	ctx.strokeStyle ="#000"; 
	ctx.lineWidth=1;



	// Display scores for each map (here because different in block 2)
	if (block ==1){
		assignPoints();
	}
	else{
		assignPointsTwo();
	}

	// Player's role:
	pointPurple();
}



var onlyOnePurple = new Array ();

function pointPurple(){

	var mapNumber   = trials[counter][0]; // a number from 1-7

	// Message to point
	document.getElementById("pleasePoint").hidden = false;

	// access which purple tile clicked
	var elem = document.getElementById("myCanvas");
	pWidth = 600 / 5; // (canvas width / square); bc canvas fitted to screen 

	elemLeft = elem.offsetLeft, //know locations of canvas
    elemTop = elem.offsetTop, 
    elements = []; // consider all purple tile locations as elements 


	// find tile locations given where canvas was drawn
	/// Map 1: 
	if (mapNumber == 1) {
		// purple tiles
		ip1_x0 = pWidth * 4;
		ip1_y0 = pWidth;
		ip2_x0 = pWidth;
		ip2_y0 = pWidth * 3;
		ip3_x0 = pWidth;
		ip3_y0 = pWidth * 4;
	}


	/// Map 2:
	else if (mapNumber == 2) {
		// purple tiles
		ip1_x0 = pWidth * 4;
		ip1_y0 = 0;
		ip2_x0 = pWidth * 3;
		ip2_y0 = 0;
		ip3_x0 = pWidth * 4;
		ip3_y0 = pWidth * 2;
	}


	/// Map 3: 
	else if (mapNumber == 3) {
		// purple tiles
		ip1_x0 = pWidth * 2;
		ip1_y0 = pWidth;
		ip2_x0 = pWidth;
		ip2_y0 = pWidth;
		ip3_x0 = pWidth * 3;
		ip3_y0 = pWidth * 4;
	}



	/// Map 4: 
	else if (mapNumber == 4) {
		// purple tiles
		ip1_x0 = pWidth;
		ip1_y0 = 0;
		ip2_x0 = pWidth * 2;
		ip2_y0 = pWidth * 2;
		ip3_x0 = pWidth * 4;
		ip3_y0 = pWidth * 2;
	}



	/// Map 5:
	else if (mapNumber == 5) {
		// purple tiles
		ip1_x0 = pWidth * 2;
		ip1_y0 = pWidth * 4;
		ip2_x0 = pWidth;
		ip2_y0 = pWidth * 4;
		ip3_x0 = pWidth * 4;
		ip3_y0 = pWidth * 3;
	}


	/// Map 6 (prev. 7): 
	else if (mapNumber == 6) {
		// purple tiles
		ip1_x0 = pWidth * 3;
		ip1_y0 = pWidth;
		ip2_x0 = pWidth * 4;
		ip2_y0 = pWidth * 2;
		ip3_x0 = 0;
		ip3_y0 = pWidth * 3;
	}


	/// Map 7 (rotate map1 vers1): 
	else if (mapNumber == 7) {
		// purple tiles
		ip1_x0 = pWidth * 3;
		ip1_y0 = pWidth * 4;
		ip2_x0 = pWidth;
		ip2_y0 = pWidth;
		ip3_x0 = 0;
		ip3_y0 = pWidth;
	}

	/// Map 8 (rotate map1 vers2): 
	else if (mapNumber == 8) {
		// purple tiles
		ip1_x0 = pWidth;
		ip1_y0 = 0;
		ip2_x0 = pWidth * 3;
		ip2_y0 = pWidth * 3;
		ip3_x0 = pWidth * 4;
		ip3_y0 = pWidth * 3;
	}


	/// Map 9 (rotate map2 vers1): 
	else if (mapNumber == 9) {
		// purple tiles
		ip1_x0 = pWidth * 4;
		ip1_y0 = pWidth * 4;
		ip2_x0 = pWidth * 4;
		ip2_y0 = pWidth * 3;
		ip3_x0 = pWidth * 2;
		ip3_y0 = pWidth * 4;
	}

	/// Map 10 (rotate map2 vers2): 
	else if (mapNumber == 10) {
		// purple tiles
		ip1_x0 = 0;
		ip1_y0 = pWidth * 4;
		ip2_x0 = pWidth;
		ip2_y0 = pWidth * 4;
		ip3_x0 = 0;
		ip3_y0 = pWidth * 2;
	}


	/// Map 11 (rotate map3 vers1): 
	else if (mapNumber == 11) {
		// purple tiles
		ip1_x0 = pWidth * 2;
		ip1_y0 = pWidth * 3;
		ip2_x0 = pWidth * 3;
		ip2_y0 = pWidth * 3;
		ip3_x0 = pWidth;
		ip3_y0 = 0;
	}

	/// Map 12 (rotate map3 vers2): 
	else if (mapNumber == 12) {
		// purple tiles
		ip1_x0 = pWidth;
		ip1_y0 = pWidth * 2;
		ip2_x0 = pWidth;
		ip2_y0 = pWidth * 3;
		ip3_x0 = pWidth * 4;
		ip3_y0 = pWidth;
	}

	/// Map 13 (rotate map4 vers1): 
	else if (mapNumber == 13) {
		// purple tiles
		ip1_x0 = pWidth * 2;
		ip1_y0 = pWidth * 2;
		ip2_x0 = pWidth * 4;
		ip2_y0 = pWidth;
		ip3_x0 = pWidth * 2;
		ip3_y0 = pWidth * 4;
	}

	/// Map 14 (rotate map4 vers2): 
	else if (mapNumber == 14) {
		// purple tiles
		ip1_x0 = pWidth * 2;
		ip1_y0 = pWidth * 2;
		ip2_x0 = pWidth * 3;
		ip2_y0 = 0;
		ip3_x0 = 0;
		ip3_y0 = pWidth * 2;
	}

	/// Map 15 (rotate map5 vers1): 
	else if (mapNumber == 15) {
		// purple tiles
		ip1_x0 = 0;
		ip1_y0 = pWidth * 2;
		ip2_x0 = 0;
		ip2_y0 = pWidth;
		ip3_x0 = pWidth;
		ip3_y0 = pWidth * 4;
	}

	/// Map 16 (rotate map5 vers2): 
	else if (mapNumber == 16) {
		// purple tiles
		ip1_x0 = pWidth * 2;
		ip1_y0 = 0;
		ip2_x0 = pWidth * 3;
		ip2_y0 = 0;
		ip3_x0 = 0;
		ip3_y0 = pWidth;
	}

	/// Map 17 (rotate map6 vers1): 
	else if (mapNumber == 17) {
		// purple tiles
		ip1_x0 = pWidth * 3;
		ip1_y0 = pWidth * 3;
		ip2_x0 = pWidth * 2;
		ip2_y0 = pWidth * 4;
		ip3_x0 = pWidth;
		ip3_y0 = 0;
	}

	/// Map 18 (rotate map6 vers2): 
	else if (mapNumber == 18) {
		// purple tiles
		ip1_x0 = pWidth;
		ip1_y0 = pWidth;
		ip2_x0 = pWidth * 2;
		ip2_y0 = 0;
		ip3_x0 = pWidth * 3;
		ip3_y0 = pWidth * 4;
	}

	// BLOCK TWO
	/// Map 19: 
	if (mapNumber == 19) {
		 // purple tiles
        ip1_x0 = pWidth * 4;
        ip1_y0 = 0;
        ip2_x0 = pWidth * 2;
        ip2_y0 = pWidth * 2;
        ip3_x0 = 0;
        ip3_y0 = pWidth * 4;
	}



	/// Map 20:
	else if (mapNumber == 20) {
        // purple tiles
		ip1_x0 = pWidth * 4;
		ip1_y0 = pWidth * 4;
		ip2_x0 = pWidth * 2;
		ip2_y0 = pWidth * 2;
		ip3_x0 = 0;
		ip3_y0 = 0;
	}


	/// Map 21: 
	else if (mapNumber == 21) {
        // purple tiles
		ip1_x0 = 0;
		ip1_y0 = 0;
		ip2_x0 = pWidth * 2;
		ip2_y0 = pWidth * 2;
		ip3_x0 = pWidth * 4;
		ip3_y0 = pWidth * 4;
	}



	// put the p's of this round in an array 
	elements.push({
		name: "p1",
		width: pWidth,
		height: pWidth,
		top: ip1_y0,
		left: ip1_x0
	});

	elements.push({
		name: "p2",
		width: pWidth,
		height: pWidth,
		top: ip2_y0,
		left: ip2_x0
	});

	elements.push({
		name: "p3",
		width: pWidth,
		height: pWidth,
		top: ip3_y0,
		left: ip3_x0
	});

	// Monitor when click on a purple box 
	elem.addEventListener('click', handler); //**true makes it ask only once
}




// Need to track double clicks
var clickArray = new Array(); 
var clickIndex = 0; // check if clicked the same item as the prev index 

// Function for when click on an item
var handler = function(event) {

	// this shouldn't come up anymore since going straight to confidence
	if (onlyOnePurple[counter] == 1){
		alert("You have already made your selection. Please click next.");
		return;
	}

	// x and y are the coordinates of where the mouse clicked; given page and canvas
	var x = event.pageX - elemLeft,
		y = event.pageY - elemTop;

	
	// Go through each purple tile's location 
	elements.forEach(function(element) {
			if (y > element.top && y < element.top + element.height && x > element.left && x < element.left + element.width) {
				// Reset counter for zero button 
				 zeroIndex = 0;

				 // Instruct to double click 
				 document.getElementById("pleasePoint").innerHTML = "Click on the location again to confirm your choice.";
				 document.getElementById("pleasePoint").style.color = "#911879";
 
				 
				 // First click:
				 if (clickIndex == 0){
					 // Show them what they clicked 
					 ctx.beginPath();
					 ctx.strokeStyle = "#FFBD21";
					 ctx.lineWidth = 8;
					 if (element.name == "p1"){
						 ctx.strokeRect(p1_x0, p1_y0, square_size, square_size);
					 }
 
					 else if (element.name == "p2"){
						 ctx.strokeRect(p2_x0, p2_y0, square_size, square_size);
					 }
 
					 else if (element.name == "p3"){
						 ctx.strokeRect(p3_x0, p3_y0, square_size, square_size);
					 }
					 ctx.closePath();
				 }
				 
 
 
				 // Process double click 
				 clickArray[clickIndex] = element.name // save what picked this time 
 
				 // After first click:
				 if (clickIndex > 0) { 
					 	// if this p is equal to previous p => double clicked
						 if ((clickArray[clickIndex] == clickArray[clickIndex-1])){
							 recordSelections(element.name);
 
							 // Hide zeroBox, hide instructions
							 document.getElementById("pleasePoint").hidden = true;
							 document.getElementById("zeroBox").hidden = true;
							 document.getElementById("expNext").hidden = false;
 
							 event.stopImmediatePropagation();
 
							 // Stop from selecting more
							 onlyOnePurple[counter] = 1;
 
							 // Go on to confidence rating
							 checkConfidence();
						 }

						 // if clicked a different tile
						 else {
							 // Erase what previously clicked 
							 resetMap();
 
							 // Highlight what they clicked NOW
							 ctx.beginPath();
							 ctx.strokeStyle = "#FFBD21";
							 ctx.lineWidth = 8;
							 if (element.name == "p1"){
								 ctx.strokeRect(p1_x0, p1_y0, square_size, square_size);
							 }
 
							 else if (element.name == "p2"){
								 ctx.strokeRect(p2_x0, p2_y0, square_size, square_size);
							 }
 
							 else if (element.name == "p3"){
								 ctx.strokeRect(p3_x0, p3_y0, square_size, square_size);
							 }
							 ctx.closePath();
							 }
					}
 
				 clickIndex++ //finished first click 
			 }
	 });
 
 }; 



function drawApple(ctx, p_x0, p_y0, square_size){
	  item_size = square_size - 10; // made a little smaller and moved over so won't cover grid lines
	  apple_image = new Image();
	  apple_image.src = 'img/purpleapple.png';
	  apple_image.onload = function(){
		ctx.drawImage(apple_image, p_x0+5, p_y0+5, item_size, item_size);
	}
}


function drawBee(ctx, p_x0, p_y0, square_size){
	  item_size = square_size - 10;
	  bee_image = new Image();
	  bee_image.src = 'img/purplebee.png';
	  bee_image.onload = function(){
		ctx.drawImage(bee_image, p_x0+5, p_y0+5, item_size, item_size);
	}
}




function assignPoints(){
	// Show scores at stakefor each map (all same for block 1)
	document.getElementById("scores").innerHTML = "Red Goal  = <b>+20</b><br> \
														Apples    = <b>+5</b><br>\
														Bee       = <b>-25</b><br>\
														Step Cost = <b>-1</b>"; 
													
}


// BLOCK TWO: 
var randScoresList = new Array();
for (var i = 0; i < trials.length; i++) {
	if (i < Math.round(trials.length/2)){
		randScoresList.push(1);
	}
	else {
		randScoresList.push(2);
	}
}
shuffle(randScoresList); // array of ones and twos to randomly show extremes

countReveal = -1;
function assignPointsTwo(){
	// each half different extremes
	countReveal++
    if (randScoresList[countReveal] == 1){
		document.getElementById("scores").innerHTML = "Red Goal  = <b>+20</b><br> \
														Apples    = <b>+5</b><br>\
														Bee       = <b>-25</b><br>\
														Step Cost = <b><span class='red'>0</b></span>"; 
	}
	else{
		document.getElementById("scores").innerHTML = "Red Goal  = <b>+20</b><br> \
														Apples    = <b>+5</b><br>\
														Bee       = <b>-25</b><br>\
														Step Cost = <span class='red'><b>-5</b></span>"; 
	}
}



function confirmZero(){
	var elem = document.getElementById("myCanvas");

	 // First time clicking: 
	 if (zeroIndex == 0){
        // Instruct to double click 
        document.getElementById("pleasePoint").innerHTML = "You are choosing to not select any items. Click the button again to confirm your choice.";
        document.getElementById("pleasePoint").style.color = "#911879";
        zeroIndex++;
    }

    // Second time clicking:
    else {
        // Record the data 
		recordSelections("zero");

		// Hide zeroBox, ask for confidence rating, hide instructions
		document.getElementById("pleasePoint").hidden = true;
		document.getElementById("zeroBox").hidden = true;
		document.getElementById("expNext").hidden = false;

		// If chose not to click any items, don't let them click any 
		elem.removeEventListener('click', handler);

         // Move on to confidence rating
        checkConfidence();
    }
}


function checkConfidence(){

	// Ask for confidence rating: display window with radio buttons
	var windBox = document.getElementById("windowBox");
	windBox.style.display = "block";
	var resBox = document.getElementById("resultRate");
	resBox.style.display = "block";

	// Hide Next
	document.getElementById("expNext").hidden = true;

	// Add confirm button to it.
	document.getElementById("Confirm").hidden = false;

}


function postConfirm(){
	// Listen to Confirm button
	var confSelected = document.getElementsByName("ConfidenceScale");
	let selectedRating;
	var allRatings = new Array();
	var wasFilled = 0; // to not allow confirm without pressing

	// cycle through the radio buttons
	for(var i = 0; i < confSelected.length; i++) {
		if(confSelected[i].checked) {

			selectedRating = confSelected[i].value; // value of the button that was checked 
			allRatings[counter] = selectedRating;  // store

			wasFilled = 1; // allowed to continue now

			// After recording selection, reset the form  
			confSelected[i].checked = false;
		}
	}

	// Make sure clicked Confirm AFTER selected something 
	if (wasFilled == 0){
		alert("Please choose a rating first!")
	}
	else{
		
		// If on last trial, 
		if (counter == trials.length-1) {
			// get rid of everything currently being displayed
			var windBox = document.getElementById("windowBox");
			windBox.style.display = "none";
			var expPage = document.getElementById("formalPage");
			expPage.style.display = "none";


			// go to next instructions
			instr.next();
		}

		// Else if halfway through, 
		else if (counter == (Math.round(trials.length/2))){
			
			// get rid of everything currently being displayed
			var windBox = document.getElementById("windowBox");
			windBox.style.display = "none";
			var expPage = document.getElementById("formalPage");
			expPage.style.display = "none";

			// Show attention check 
			var attentionPage = document.getElementById("attentionCheck");
			attentionPage.style.display = "block";

		}

		// Otherwise, generate next map
		else {
			generateMap();
		}
	}

}


// which p did they select, or "zero" if didn't (make sure to record other data too)
var selectData = new Array(); 
function recordSelections(p){ 
	selectData.push(p);
}


// Restore canvas to previous state 
function resetMap(){

    var mapNumber = trials[counter][0]; // a number from 1-7
	var itemsConfig   = trials[counter][1]; // an array of 2 ones and 1 two

	//Clear canvas each time gen map 
	ctx.clearRect(0, 0, w, w); 

	/// Map 1: 
	if (mapNumber == 1) {
		// green tile (start)
		g_x0 = w - square_size;
		g_y0 = w - square_size;

		// red tile (goal)
		r_x0  = 0;
		r_y0  = square_size;

		// purple tiles
		p1_x0 = square_size * 4;
		p1_y0 = square_size;
		p2_x0 = square_size;
		p2_y0 = square_size * 3;
		p3_x0 = square_size;
		p3_y0 = square_size * 4;
	}


	/// Map 2:
	else if (mapNumber == 2) {
		// green tile (start)
		g_x0 = w - square_size;
		g_y0 = w - square_size;

		// red tile 
		r_x0  = 0;
		r_y0  = square_size * 3;

		// purple tiles
		p1_x0 = square_size * 4;
		p1_y0 = 0;
		p2_x0 = square_size * 3;
		p2_y0 = 0;
		p3_x0 = square_size * 4;
		p3_y0 = square_size * 2;
	}


	/// Map 3: 
	else if (mapNumber == 3) {
		// green tile (start)
		g_x0 = w - square_size;
		g_y0 = w - square_size;
		
		// red tile (goal)
		r_x0  = 0;
		r_y0  = square_size * 3;

		// purple tiles
		p1_x0 = square_size * 2;
		p1_y0 = square_size;
		p2_x0 = square_size;
		p2_y0 = square_size;
		p3_x0 = square_size * 3;
		p3_y0 = square_size * 4;
	}



	/// Map 4: 
	else if (mapNumber == 4) {
		// green tile (start)
		g_x0 = w - square_size;
		g_y0 = w - square_size;
		
		// red tile (goal)
		r_x0  = 0;
		r_y0  = square_size * 3;

		// purple tiles
		p1_x0 = square_size;
		p1_y0 = 0;
		p2_x0 = square_size * 2;
		p2_y0 = square_size * 2;
		p3_x0 = square_size * 4;
		p3_y0 = square_size * 2;
	}



	/// Map 5:
	else if (mapNumber == 5) {
		// green tile (start)
		g_x0 = w - square_size;
		g_y0 = w - square_size;
		
		// red tile (goal)
		r_x0  = 0;
		r_y0  = square_size * 3

		// purple tiles
		p1_x0 = square_size * 2;
		p1_y0 = square_size * 4;
		p2_x0 = square_size;
		p2_y0 = square_size * 4;
		p3_x0 = square_size * 4;
		p3_y0 = square_size * 3;
	}


	/// Map 6 (prev. 7): 
	else if (mapNumber == 6) {
		// green tile (start)
		g_x0 = w - square_size;
		g_y0 = w - square_size;
		
		// red tile (goal)
		r_x0  = 0;
		r_y0  = square_size;

		// purple tiles
		p1_x0 = square_size * 3;
		p1_y0 = square_size;
		p2_x0 = square_size * 4;
		p2_y0 = square_size * 2;
		p3_x0 = 0;
		p3_y0 = square_size * 3;
	}


	/// Map 7 (rotate map1 vers1): 
	else if (mapNumber == 7) {
		// green tile (start)
		g_x0 = 0;
		g_y0 = square_size * 4;
		
		// red tile (goal)
		r_x0  = square_size * 3;
		r_y0  = 0;

		// purple tiles
		p1_x0 = square_size * 3;
		p1_y0 = square_size * 4;
		p2_x0 = square_size;
		p2_y0 = square_size;
		p3_x0 = 0;
		p3_y0 = square_size;
	}

	/// Map 8 (rotate map1 vers2): 
	else if (mapNumber == 8) {
		// green tile (start)
		g_x0 = square_size * 4;
		g_y0 = 0;
		
		// red tile (goal)
		r_x0  = square_size;
		r_y0  = square_size * 4;

		// purple tiles
		p1_x0 = square_size;
		p1_y0 = 0;
		p2_x0 = square_size * 3;
		p2_y0 = square_size * 3;
		p3_x0 = square_size * 4;
		p3_y0 = square_size * 3;
	}


	/// Map 9 (rotate map2 vers1): 
	else if (mapNumber == 9) {
		// green tile (start)
		g_x0 = 0;
		g_y0 = square_size * 4;
		
		// red tile (goal)
		r_x0  = square_size;
		r_y0  = 0;

		// purple tiles
		p1_x0 = square_size * 4;
		p1_y0 = square_size * 4;
		p2_x0 = square_size * 4;
		p2_y0 = square_size * 3;
		p3_x0 = square_size * 2;
		p3_y0 = square_size * 4;
	}

	/// Map 10 (rotate map2 vers2): 
	else if (mapNumber == 10) {
		// green tile (start)
		g_x0 = 0;
		g_y0 = 0;
		
		// red tile (goal)
		r_x0  = square_size * 4;
		r_y0  = square_size;

		// purple tiles
		p1_x0 = 0;
		p1_y0 = square_size * 4;
		p2_x0 = square_size;
		p2_y0 = square_size * 4;
		p3_x0 = 0;
		p3_y0 = square_size * 2;
	}


	/// Map 11 (rotate map3 vers1): 
	else if (mapNumber == 11) {
		// green tile (start)
		g_x0 = 0;
		g_y0 = 0;
		
		// red tile (goal)
		r_x0  = square_size * 4;
		r_y0  = square_size;

		// purple tiles
		p1_x0 = square_size * 2;
		p1_y0 = square_size * 3;
		p2_x0 = square_size * 3;
		p2_y0 = square_size * 3;
		p3_x0 = square_size;
		p3_y0 = 0;
	}

	/// Map 12 (rotate map3 vers2): 
	else if (mapNumber == 12) {
		// green tile (start)
		g_x0 = square_size * 4;
		g_y0 = 0;
		
		// red tile (goal)
		r_x0  = square_size * 3;
		r_y0  = square_size * 4;

		// purple tiles
		p1_x0 = square_size;
		p1_y0 = square_size * 2;
		p2_x0 = square_size;
		p2_y0 = square_size * 3;
		p3_x0 = square_size * 4;
		p3_y0 = square_size;
	}

	/// Map 13 (rotate map4 vers1): 
	else if (mapNumber == 13) {
		// green tile (start)
		g_x0 = 0;
		g_y0 = square_size * 4;
		
		// red tile (goal)
		r_x0  = square_size;
		r_y0  = 0;

		// purple tiles
		p1_x0 = square_size * 2;
		p1_y0 = square_size * 2;
		p2_x0 = square_size * 4;
		p2_y0 = square_size;
		p3_x0 = square_size * 2;
		p3_y0 = square_size * 4;
	}

	/// Map 14 (rotate map4 vers2): 
	else if (mapNumber == 14) {
		// green tile (start)
		g_x0 = 0;
		g_y0 = square_size * 4;
		
		// red tile (goal)
		r_x0  = square_size * 4;
		r_y0  = square_size * 3;

		// purple tiles
		p1_x0 = square_size * 2;
		p1_y0 = square_size * 2;
		p2_x0 = square_size * 3;
		p2_y0 = 0;
		p3_x0 = 0;
		p3_y0 = square_size * 2;
	}

	/// Map 15 (rotate map5 vers1): 
	else if (mapNumber == 15) {
		// green tile (start)
		g_x0 = 0;
		g_y0 = square_size * 4;
		
		// red tile (goal)
		r_x0  = square_size;
		r_y0  = 0;

		// purple tiles
		p1_x0 = 0;
		p1_y0 = square_size * 2;
		p2_x0 = 0;
		p2_y0 = square_size;
		p3_x0 = square_size;
		p3_y0 = square_size * 4;
	}

	/// Map 16 (rotate map5 vers2): 
	else if (mapNumber == 16) {
		// green tile (start)
		g_x0 = 0;
		g_y0 = 0;
		
		// red tile (goal)
		r_x0  = square_size * 4;
		r_y0  = square_size;

		// purple tiles
		p1_x0 = square_size * 2;
		p1_y0 = 0;
		p2_x0 = square_size * 3;
		p2_y0 = 0;
		p3_x0 = 0;
		p3_y0 = square_size;
	}

	/// Map 17 (rotate map6 vers1): 
	else if (mapNumber == 17) {
		// green tile (start)
		g_x0 = 0;
		g_y0 = square_size * 4;
		
		// red tile (goal)
		r_x0  = square_size * 3;
		r_y0  = 0;

		// purple tiles
		p1_x0 = square_size * 3;
		p1_y0 = square_size * 3;
		p2_x0 = square_size * 2;
		p2_y0 = square_size * 4;
		p3_x0 = square_size;
		p3_y0 = 0;
	}

	/// Map 18 (rotate map6 vers2): 
	else if (mapNumber == 18) {
		// green tile (start)
		g_x0 = square_size * 4;
		g_y0 = 0;
		
		// red tile (goal)
		r_x0  = square_size;
		r_y0  = square_size * 4;

		// purple tiles
		p1_x0 = square_size;
		p1_y0 = square_size;
		p2_x0 = square_size * 2;
		p2_y0 = 0;
		p3_x0 = square_size * 3;
		p3_y0 = square_size * 4;
	}

	// BLOCK TWO
	/// Map 19: 
	if (mapNumber == 19) {
		// green tile (start)
        g_x0 = square_size * 4;
        g_y0 = square_size * 4;
    
        // red tile (goal)
        r_x0  = 0;
        r_y0  = 0;
    
        // purple tiles
        p1_x0 = square_size * 4;
        p1_y0 = 0;
        p2_x0 = square_size * 2;
        p2_y0 = square_size * 2;
        p3_x0 = 0;
        p3_y0 = square_size * 4;
	}



	/// Map 20:
	else if (mapNumber == 20) {
        // green tile (start)
        g_x0 = 0;
        g_y0 = square_size * 4;

		// red tile 
		r_x0  = square_size * 4;
		r_y0  = 0;

		// purple tiles
		p1_x0 = square_size * 4;
		p1_y0 = square_size * 4;
		p2_x0 = square_size * 2;
		p2_y0 = square_size * 2;
		p3_x0 = 0;
		p3_y0 = 0;
	}


	/// Map 21: 
	else if (mapNumber == 21) {
        // green tile (start)
        g_x0 = square_size * 4;
        g_y0 = 0;

		// red tile (goal)
		r_x0  = 0;
		r_y0  = square_size * 4;

		// purple tiles
		p1_x0 = 0;
		p1_y0 = 0;
		p2_x0 = square_size * 2;
		p2_y0 = square_size * 2;
		p3_x0 = square_size * 4;
		p3_y0 = square_size * 4;
	}



	///// Make the grid drawing 

	// Red/finish tile
	ctx.beginPath();
	ctx.fillStyle = "#e04136";
	ctx.rect(r_x0, r_y0, square_size, square_size);
	ctx.fill();
	ctx.closePath();

	// Green/start tile
	ctx.beginPath() 
	ctx.fillStyle = "#07cb07";
	ctx.rect(g_x0, g_y0, square_size, square_size);
	ctx.fill();
	ctx.closePath();

	// Purple tiles
	ctx.beginPath();
	ctx.fillStyle = "#b4a7d6";
	ctx.rect(p1_x0, p1_y0, square_size, square_size);
	ctx.rect(p2_x0, p2_y0, square_size, square_size);
	ctx.rect(p3_x0, p3_y0, square_size, square_size);
	ctx.fill();
	ctx.closePath();

	// Apples & Bees images (randomized p's config equally before)
	// var itemsConfig = trials[counter][1]; // an array of 2 ones and 1 two
	itemAt_p1 = itemsConfig[0];
	itemAt_p2 = itemsConfig[1];
	itemAt_p3 = itemsConfig[2];

	// whether p1 is apple or bee, draw accordingly 
	if (itemAt_p1 == 1) {
		drawApple(ctx, p1_x0, p1_y0, square_size);
	}
	else if (itemAt_p1 == 2) {
		drawBee(ctx, p1_x0, p1_y0, square_size);
	}

	// p2
	if (itemAt_p2 == 1) {
		drawApple(ctx, p2_x0, p2_y0, square_size);
	}
	else if (itemAt_p2 == 2) {
		drawBee(ctx, p2_x0, p2_y0, square_size);
	}

	// p3
	if (itemAt_p3 == 1) {
		drawApple(ctx, p3_x0, p3_y0, square_size);
	}
	else if (itemAt_p3 == 2) {
		drawBee(ctx, p3_x0, p3_y0, square_size);
	}


	// Grid lines (code put after tiles so will be overlayed)
	ctx.beginPath() 
	for (let i=0; i<=w; i=i+square_size){
		//horizontal lines
		ctx.moveTo(0,i);
		ctx.lineTo(w,i);

		//vertical lines
		ctx.moveTo(i,0);
		ctx.lineTo(i,w);
	}
	ctx.lineWidth = 2;
	ctx.strokeStyle = "#626262";
	ctx.stroke();
	ctx.closePath();



	// Walls on maps 1/ 6 (prev. 7)/7/8/17/18
	if (mapNumber==1){
		ctx.beginPath();
		ctx.lineWidth = 11;
		ctx.strokeStyle = "black";
		ctx.moveTo(square_size, (w-square_size));
		ctx.lineTo(square_size, w);
		ctx.stroke();
		ctx.closePath();
	}

	else if (mapNumber==6){ 
		ctx.beginPath();
		ctx.lineWidth = 10;
		ctx.strokeStyle = "black";
		ctx.lineJoin = "bevel";
		ctx.strokeRect(square_size, (square_size*2), square_size, (square_size*2));
		ctx.closePath();
	}

	else if (mapNumber==7){
		ctx.beginPath();
		ctx.lineWidth = 11;
		ctx.strokeStyle = "black";
		ctx.moveTo(0, square_size);
		ctx.lineTo(square_size, square_size);
		ctx.stroke();
		ctx.closePath();
	} 

	else if (mapNumber==8){
		ctx.beginPath();
		ctx.lineWidth = 11;
		ctx.strokeStyle = "black";
		ctx.moveTo(square_size*4, square_size*4);
		ctx.lineTo(w, square_size*4);
		ctx.stroke();
		ctx.closePath();
	} 

	else if (mapNumber==17){ 
		ctx.beginPath();
		ctx.lineWidth = 10;
		ctx.strokeStyle = "black";
		ctx.lineJoin = "bevel";
		ctx.strokeRect(square_size, square_size, (square_size*2), square_size);
		ctx.closePath();
	}

	else if (mapNumber==18){ 
		ctx.beginPath();
		ctx.lineWidth = 10;
		ctx.strokeStyle = "black";
		ctx.lineJoin = "bevel";
		ctx.strokeRect(square_size*2, square_size*3, (square_size*2), square_size);
		ctx.closePath();
	}



	//set back to default
	ctx.strokeStyle ="#000"; 
	ctx.lineWidth=1;
}


function afterAttend(){
	// Close attention check 
	var attentionPage = document.getElementById("attentionCheck");
	attentionPage.style.display = "none";

	// Show formal page
	var expPage = document.getElementById("formalPage");
	expPage.style.display = "block";

	// Continue experiment
	generateMap();

}


function namingFunc(){
	// Save username as variable 
	var playername = document.getElementById("username").value;

	// If not at least 3 characters, alert
	if (playername.length < 3){
		alert("Your username is too short. Please make it at least 3 characters.")
	}
	else{
		// When done, close this window to move on to instructions
		var windBoxInstr = document.getElementById("windowBoxInstr");
		windBoxInstr.style.display = "none";
		var nameDisplay = document.getElementById("namingDisplay");
		nameDisplay.style.display = "none";
	}

	// check if used before??
}


function startBlock2(){
	block = 2; 
}

