document.write(
    unescape("%3Cscript src='https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js' type='text/javascript'%3E%3C/script%3E")
  );

var w = 500; //grid width
var squares = 5; // 5x5 grid (divided by 5)
var square_size = (w/squares);


// 3 Practice Rounds
const amountPrac = 3; 

var trialsPrac = new Array(); 
var mapPrac        = 1;  //maps 1-3

var configurations =  [[1, 1, 2],  // AAB, ABA, BAA
				       [1, 2, 1], 
				       [2, 1, 1]];


// Don't need to shuffle practice rounds
for(var i = 0; i < amountPrac; i++){ 
    if (i < amountPrac / 3){ // for 1/3 of trials, AAB
		trialsPrac[i] = new Array();
    	trialsPrac[i].push(mapPrac, configurations[0]);
     }
     
     else if ((i >= amountPrac / 3) && (i < amountPrac / 3 * 2)){ // 2nd 3rd, ABA
		trialsPrac[i] = new Array();
    	trialsPrac[i].push(mapPrac, configurations[1]);
     }
     
     else if ((i >= amountPrac / 3 * 2) && (i < amountPrac)){ // 3rd 3rd BAA
		trialsPrac[i] = new Array();
    	trialsPrac[i].push(mapPrac, configurations[2]);
     }
	 mapPrac++
}

// //still working on it****
// var trialsPracData = []
// for (index in trialsPrac) {
//     var triNum = new recordData();
//     trialsPracData.push(triNum);
// }


///// 7 maps; different red/purple configurations
var ctxPrac = document.getElementById("myCanvasPrac").getContext("2d"); //canvas

// Each time clicks next, generates different map
var counterPrac = -1 // starts at -1 for each user
function generateMapPrac(){

    // Reset instructions 
    document.getElementById("pleasePointPrac").innerHTML = "Click on the item that you wish to highlight for your partner. <br>(Note: They can only move up/down/left/right. They CANNOT move diagonally)";
    document.getElementById("pleasePointPrac").style.color = "black";

    clickIndexPrac = 0; // reset every trial (for purplePoint)
    zeroIndexPrac = 0;

	// Can't click next yet, but can choose zero
	document.getElementById("expNextPrac").hidden = true;
	document.getElementById("zeroBoxPrac").hidden = false;

	// Reomve  confidence rating question
	var windBoxPrac = document.getElementById("windowBoxPrac");
	windBoxPrac.style.display = "none";
	var resBoxPrac = document.getElementById("resultRatePrac");
	resBoxPrac.style.display = "none";

	// Adjust counter, maps, configurations
	counterPrac++
	if (counterPrac > trialsPrac.length){
		return 
	}
	var mapNumberPrac = trialsPrac[counterPrac][0]; // a number from 1-7
	var itemsConfig   = trialsPrac[counterPrac][1]; // an array of 2 ones and 1 two

	//Clear canvas each time gen map 
	ctxPrac.clearRect(0, 0, w, w); 

	/// Map 1: 
	if (mapNumberPrac == 1) {
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
	else if (mapNumberPrac == 2) {
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
	else if (mapNumberPrac == 3) {
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
	else if (mapNumberPrac == 4) {
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
	else if (mapNumberPrac == 5) {
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


	/// Map 6:
	else if (mapNumberPrac == 6) {
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


	/// Map 7: 
	else if (mapNumberPrac == 7) {
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



	///// Make the grid drawing 

	// Red/goal tile
	ctxPrac.beginPath();
	ctxPrac.fillStyle = "#e04136";
	ctxPrac.rect(r_x0, r_y0, square_size, square_size);
	ctxPrac.fill();
	ctxPrac.closePath();

	// Purple tiles
	ctxPrac.beginPath();
	ctxPrac.fillStyle = "#b4a7d6";
	ctxPrac.rect(p1_x0, p1_y0, square_size, square_size);
	ctxPrac.rect(p2_x0, p2_y0, square_size, square_size);
	ctxPrac.rect(p3_x0, p3_y0, square_size, square_size);
	ctxPrac.fill();
	ctxPrac.closePath();

	// Apples & Bees images (randomized p's config equally before)
	// var itemsConfig = trials[counter][1]; // an array of 2 ones and 1 two
	itemAt_p1 = itemsConfig[0];
	itemAt_p2 = itemsConfig[1];
	itemAt_p3 = itemsConfig[2];

	// whether p1 is apple or bee, draw accordingly 
	if (itemAt_p1 == 1) {
		drawApple(ctxPrac, p1_x0, p1_y0, square_size);
	}
	else if (itemAt_p1 == 2) {
		drawBee(ctxPrac, p1_x0, p1_y0, square_size);
	}

	// p2
	if (itemAt_p2 == 1) {
		drawApple(ctxPrac, p2_x0, p2_y0, square_size);
	}
	else if (itemAt_p2 == 2) {
		drawBee(ctxPrac, p2_x0, p2_y0, square_size);
	}

	// p3
	if (itemAt_p3 == 1) {
		drawApple(ctxPrac, p3_x0, p3_y0, square_size);
	}
	else if (itemAt_p3 == 2) {
		drawBee(ctxPrac, p3_x0, p3_y0, square_size);
	}



	// Green square always in bottom-right
	ctxPrac.beginPath() 
	let g_0 = w - square_size;

	ctxPrac.fillStyle = "#07cb07";
	ctxPrac.rect(g_0, g_0, square_size, square_size);
	ctxPrac.fill();
	ctxPrac.closePath();


	// Grid lines (code put after tiles so will be overlayed)
	ctxPrac.beginPath() 
	for (let i=0; i<=w; i=i+square_size){
		//horizontal lines
		ctxPrac.moveTo(0,i);
		ctxPrac.lineTo(w,i);

		//vertical lines
		ctxPrac.moveTo(i,0);
		ctxPrac.lineTo(i,w);
	}
	ctxPrac.lineWidth = 2;
	ctxPrac.strokeStyle = "#626262";
	ctxPrac.stroke();
	ctxPrac.closePath();


	/// Walls on maps 1 and 7
	if (mapNumberPrac==1){
		ctxPrac.beginPath();
		ctxPrac.lineWidth = 11;
		ctxPrac.strokeStyle = "black";
		ctxPrac.moveTo(square_size, (w-square_size));
		ctxPrac.lineTo(square_size, w);
		ctxPrac.stroke();
		ctxPrac.closePath();
	}

	else if (mapNumberPrac==7){ 
		ctxPrac.beginPath();
		ctxPrac.lineWidth = 10;
		ctxPrac.strokeStyle = "black";
		ctxPrac.lineJoin = "bevel";
		ctxPrac.strokeRect(square_size, (square_size*2), square_size, (square_size*2));
		ctxPrac.closePath();
	}
	//set back to default
	ctxPrac.strokeStyle ="#000"; 
	ctxPrac.lineWidth=1;



	// Display scores for each map
	assignPointsPrac();


	// Player's role:
	pointPurplePrac()
}



var onlyOnePurplePrac = new Array ();

function pointPurplePrac(){

	var mapNumberPrac = trialsPrac[counterPrac][0]; // a number from 1-7

	// Message to point
	document.getElementById("pleasePointPrac").hidden = false;

	// access which purple tile clicked
	var elem = document.getElementById("myCanvasPrac");
	pWidth = 600 / 5; // (canvas width / square); bc canvas fitted to screen 

	elemLeft = elem.offsetLeft, //know locations of canvas
    elemTop = elem.offsetTop, 
    elements = []; // consider all purple tile locations as elements 

	// find tile locations given where canvas was drawn
	/// Map 1: 
	if (mapNumberPrac == 1) {
		// red tile (goal)
		ir_x0   = 0;
		ir_y0   = pWidth;

		// purple tiles
		ip1_x0 = pWidth * 4;
		ip1_y0 = pWidth;
		ip2_x0 = pWidth;
		ip2_y0 = pWidth * 3;
		ip3_x0 = pWidth;
		ip3_y0 = pWidth * 4;
	}


	/// Map 2:
	else if (mapNumberPrac == 2) {
		// red tile 
		ir_x0   = 0;
		ir_y0   = pWidth * 3;

		// purple tiles
		ip1_x0 = pWidth * 4;
		ip1_y0 = 0;
		ip2_x0 = pWidth * 3;
		ip2_y0 = 0;
		ip3_x0 = pWidth * 4;
		ip3_y0 = pWidth * 2;
	}


	/// Map 3: 
	else if (mapNumberPrac == 3) {
		// red tile (goal)
		ir_x0   = 0;
		ir_y0   = pWidth * 3;

		// purple tiles
		ip1_x0 = pWidth * 2;
		ip1_y0 = pWidth;
		ip2_x0 = pWidth;
		ip2_y0 = pWidth;
		ip3_x0 = pWidth * 3;
		ip3_y0 = pWidth * 4;
	}



	/// Map 4: 
	else if (mapNumberPrac == 4) {
		// red tile (goal)
		ir_x0   = 0;
		ir_y0   = pWidth * 3;

		// purple tiles
		ip1_x0 = pWidth;
		ip1_y0 = 0;
		ip2_x0 = pWidth * 2;
		ip2_y0 = pWidth * 2;
		ip3_x0 = pWidth * 4;
		ip3_y0 = pWidth * 2;
	}



	/// Map 5:
	else if (mapNumberPrac == 5) {
		// red tile (goal)
		ir_x0   = 0;
		ir_y0   = pWidth * 3

		// purple tiles
		ip1_x0 = pWidth * 2;
		ip1_y0 = pWidth * 4;
		ip2_x0 = pWidth;
		ip2_y0 = pWidth * 4;
		ip3_x0 = pWidth * 4;
		ip3_y0 = pWidth * 3;
	}


	/// Map 6:
	else if (mapNumberPrac == 6) {
		// red tile (goal)
		ir_x0   = 0;
		ir_y0   = 0;

		// purple tiles
		ip1_x0 = pWidth * 4;
		ip1_y0 = 0;
		ip2_x0 = pWidth * 2;
		ip2_y0 = pWidth * 2;
		ip3_x0 = 0;
		ip3_y0 = pWidth * 4;
	}


	/// Map 7: 
	else if (mapNumberPrac == 7) {
		// red tile (goal)
		ir_x0   = 0;
		ir_y0   = pWidth;

		// purple tiles
		ip1_x0 = pWidth * 3;
		ip1_y0 = pWidth;
		ip2_x0 = pWidth * 4;
		ip2_y0 = pWidth * 2;
		ip3_x0 = 0;
		ip3_y0 = pWidth * 3;
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
	elem.addEventListener('click', handlerPrac); //**true makes it ask only once

}

// Need to track double clicks
var clickArrayPrac = new Array(); 
var clickIndexPrac = 0; // check if clicked the same item as the prev index 

// Function for when click on an item
var handlerPrac = function(event) {

	if (onlyOnePurplePrac[counterPrac] == 1){
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
                zeroIndexPrac = 0;

                // Instruct to double click 
                document.getElementById("pleasePointPrac").innerHTML = "Click on the location again to confirm your choice.";
                document.getElementById("pleasePointPrac").style.color = "#911879";

				// if (confirm("Press OK to confirm your selection.\nPress CANCEL to make a different selection.") == true) {
					
                if (clickIndexPrac == 0){
                    // Show them what they clicked 
                    ctxPrac.beginPath();
                    ctxPrac.strokeStyle = "#FFBD21";
                    ctxPrac.lineWidth = 8;
                    if (element.name == "p1"){
                        ctxPrac.strokeRect(p1_x0, p1_y0, square_size, square_size);
                    }

                    else if (element.name == "p2"){
                        ctxPrac.strokeRect(p2_x0, p2_y0, square_size, square_size);
                    }

                    else if (element.name == "p3"){
                        ctxPrac.strokeRect(p3_x0, p3_y0, square_size, square_size);
                    }
                    ctxPrac.closePath();
                }
                


                // Process double click 
                clickArrayPrac[clickIndexPrac] = element.name // save what picked this time 

                if (clickIndexPrac > 0) { // track after first click 
                    // if this x, y is equal to previous x,y => double clicked
                        if ((clickArrayPrac[clickIndexPrac] == clickArrayPrac[clickIndexPrac-1])){
                            recordSelectionsPrac(element.name);

                            // Hide zeroBox, hide instructions
                            document.getElementById("pleasePointPrac").hidden = true;
                            document.getElementById("zeroBoxPrac").hidden = true;
                            document.getElementById("expNextPrac").hidden = false;

                            event.stopImmediatePropagation();

                            // Stop from selecting more
                            onlyOnePurplePrac[counterPrac] = 1;

                            // Confidence rating
                            checkConfidencePrac();
                        }
                        else {
                            // Erase what previously clicked 
                            resetMapPrac();

                            // Highlight what they clicked NOW
                            ctxPrac.beginPath();
                            ctxPrac.strokeStyle = "#FFBD21";
                            ctxPrac.lineWidth = 8;
                            if (element.name == "p1"){
                                ctxPrac.strokeRect(p1_x0, p1_y0, square_size, square_size);
                            }

                            else if (element.name == "p2"){
                                ctxPrac.strokeRect(p2_x0, p2_y0, square_size, square_size);
                            }

                            else if (element.name == "p3"){
                                ctxPrac.strokeRect(p3_x0, p3_y0, square_size, square_size);
                            }
                            ctxPrac.closePath();
                            }
                   }

                clickIndexPrac++ //for next click 
			}
	});

}; 



function assignPointsPrac(){
	document.getElementById("scoresPrac").innerHTML = "Red Goal  = <b>+20</b><br> \
														Apples    = <b>+5</b><br>\
														Bee       = <b>-25</b><br>\
														Step Cost = <b>-1</b></b>"; 
}


function confirmZeroPrac(){
	var elem = document.getElementById("myCanvasPrac");

    // First time clicking: 
    if (zeroIndexPrac == 0){
        // Instruct to double click 
        document.getElementById("pleasePointPrac").innerHTML = "You are choosing to not select any items. Click the button again to confirm your choice.";
        document.getElementById("pleasePointPrac").style.color = "#911879";
        zeroIndexPrac++;
    }

    // Second time clicking:
    else {
        // Record the data 
		recordSelectionsPrac("zero");

		// Hide zeroBox, ask for confidence rating, hide instructions
		document.getElementById("pleasePointPrac").hidden = true;
		document.getElementById("zeroBoxPrac").hidden = true;
		document.getElementById("expNextPrac").hidden = false;

		// If chose not to click any items, don't let them click any 
		elem.removeEventListener('click', handlerPrac);

         // Move on to confidence rating
        checkConfidencePrac();
    }

}


function checkConfidencePrac(){

	// Ask for confidence rating: display window with radio buttons
	var windBoxPrac = document.getElementById("windowBoxPrac");
	windBoxPrac.style.display = "block";
	var resBoxPrac = document.getElementById("resultRatePrac");
	resBoxPrac.style.display = "block";

	// Hide Next
	document.getElementById("expNextPrac").hidden = true;

	// Add confirm button to it.
	document.getElementById("ConfirmPrac").hidden = false;

}


function postConfirmPrac(){
	// Listen to Confirm button
	var confSelected = document.getElementsByName("ConfidenceScale");
	let selectedRating;
	var pracRatings = new Array();
	var wasFilled = 0; // to not allow confirm without pressing

	// cycle through the radio buttons
	for(var i = 0; i < confSelected.length; i++) {
		if(confSelected[i].checked) {

			selectedRating = confSelected[i].value; // value of the button that was checked 
			pracRatings[counterPrac] = selectedRating;  // store

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
		
		// If not on last trial, 
		if (counterPrac == trialsPrac.length-1) {
			// get rid of everything currently being displayed
			var windBoxPrac = document.getElementById("windowBoxPrac");
			windBoxPrac.style.display = "none";
			var pracPage = document.getElementById("practicePage");
			pracPage.style.display = "none";


			// go to next instructions
			instr.next();
		}
		// Then, generate next map
		else {
			generateMapPrac();
		}
	}

}


// which p did they select, or "zero" if didn't (make sure to record other data too)
var selectDataPrac = new Array(); 
function recordSelectionsPrac(p){ 
	selectDataPrac.push(p);
}



// Restore canvas to previous state 
function resetMapPrac(){

    var mapNumberPrac = trialsPrac[counterPrac][0]; // a number from 1-7
	var itemsConfig   = trialsPrac[counterPrac][1]; // an array of 2 ones and 1 two

	//Clear canvas each time gen map 
	ctxPrac.clearRect(0, 0, w, w); 

	/// Map 1: 
	if (mapNumberPrac == 1) {
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
	else if (mapNumberPrac == 2) {
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
	else if (mapNumberPrac == 3) {
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
	else if (mapNumberPrac == 4) {
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
	else if (mapNumberPrac == 5) {
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


	/// Map 6:
	else if (mapNumberPrac == 6) {
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


	/// Map 7: 
	else if (mapNumberPrac == 7) {
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



	///// Make the grid drawing 

	// Red/goal tile
	ctxPrac.beginPath();
	ctxPrac.fillStyle = "#e04136";
	ctxPrac.rect(r_x0, r_y0, square_size, square_size);
	ctxPrac.fill();
	ctxPrac.closePath();

	// Purple tiles
	ctxPrac.beginPath();
	ctxPrac.fillStyle = "#b4a7d6";
	ctxPrac.rect(p1_x0, p1_y0, square_size, square_size);
	ctxPrac.rect(p2_x0, p2_y0, square_size, square_size);
	ctxPrac.rect(p3_x0, p3_y0, square_size, square_size);
	ctxPrac.fill();
	ctxPrac.closePath();

	// Apples & Bees images (randomized p's config equally before)
	// var itemsConfig = trials[counter][1]; // an array of 2 ones and 1 two
	itemAt_p1 = itemsConfig[0];
	itemAt_p2 = itemsConfig[1];
	itemAt_p3 = itemsConfig[2];

	// whether p1 is apple or bee, draw accordingly 
	if (itemAt_p1 == 1) {
		drawApple(ctxPrac, p1_x0, p1_y0, square_size);
	}
	else if (itemAt_p1 == 2) {
		drawBee(ctxPrac, p1_x0, p1_y0, square_size);
	}

	// p2
	if (itemAt_p2 == 1) {
		drawApple(ctxPrac, p2_x0, p2_y0, square_size);
	}
	else if (itemAt_p2 == 2) {
		drawBee(ctxPrac, p2_x0, p2_y0, square_size);
	}

	// p3
	if (itemAt_p3 == 1) {
		drawApple(ctxPrac, p3_x0, p3_y0, square_size);
	}
	else if (itemAt_p3 == 2) {
		drawBee(ctxPrac, p3_x0, p3_y0, square_size);
	}



	// Green square always in bottom-right
	ctxPrac.beginPath() 
	let g_0 = w - square_size;

	ctxPrac.fillStyle = "#07cb07";
	ctxPrac.rect(g_0, g_0, square_size, square_size);
	ctxPrac.fill();
	ctxPrac.closePath();


	// Grid lines (code put after tiles so will be overlayed)
	ctxPrac.beginPath() 
	for (let i=0; i<=w; i=i+square_size){
		//horizontal lines
		ctxPrac.moveTo(0,i);
		ctxPrac.lineTo(w,i);

		//vertical lines
		ctxPrac.moveTo(i,0);
		ctxPrac.lineTo(i,w);
	}
	ctxPrac.lineWidth = 2;
	ctxPrac.strokeStyle = "#626262";
	ctxPrac.stroke();
	ctxPrac.closePath();


	/// Walls on maps 1 and 7
	if (mapNumberPrac==1){
		ctxPrac.beginPath();
		ctxPrac.lineWidth = 11;
		ctxPrac.strokeStyle = "black";
		ctxPrac.moveTo(square_size, (w-square_size));
		ctxPrac.lineTo(square_size, w);
		ctxPrac.stroke();
		ctxPrac.closePath();
	}

	else if (mapNumberPrac==7){ 
		ctxPrac.beginPath();
		ctxPrac.lineWidth = 10;
		ctxPrac.strokeStyle = "black";
		ctxPrac.lineJoin = "bevel";
		ctxPrac.strokeRect(square_size, (square_size*2), square_size, (square_size*2));
		ctxPrac.closePath();
	}
	//set back to default
	ctxPrac.strokeStyle ="#000"; 
	ctxPrac.lineWidth=1;
}
