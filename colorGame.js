var numSquares=6;
var colors =generateRandomColors(numSquares);

 var squares = document.querySelectorAll(".square");
 var pickedColor = pickColor();
 var messageDisplay = document.querySelector("#message");
 var colorDisplay = document.getElementById("colorDisplay");
 var h1=document.querySelector("h1");
 var resetButton=document.querySelector("#reset");
 var easyBtn=document.querySelector("#easyBtn");
 var hardBtn=document.querySelector("#hardBtn");
resetButton.addEventListener("click",function(){
	//generate all new colors

	colors=generateRandomColors(numSquares);
	//pick a new random color from array
	pickedColor=pickColor();
	//change colorDisplay to match picked Color
	colorDisplay.textContent=pickedColor;
	this.textContent="New Colors"
	//to make the message disappear
	messageDisplay.textContent="";
	//change colors of squares
     for(i=0;i<squares.length;i++){
     	squares[i].style.backgroundColor=colors[i];
     }
     h1.style.backgroundColor="steelblue";
});

easyBtn.addEventListener("click",function(){
	 hardBtn.classList.remove("selected");
     easyBtn.classList.add("selected");
     numSquares=3;
     colors=generateRandomColors(numSquares);
     pickedColor=pickColor();
     colorDisplay.textContent=pickedColor;
     //hiding the bottom three colors
     for(var i=0;i<squares.length;i++){
     	if(colors[i]){
     		//Taking advantage of the fact that there are 3 colours now.If we click on easy we see only top 3 are changing.
     		squares[i].style.backgroundColor=colors[i];
     	}
     	else{
     		squares[i].style.display="none";
     	}
     }
});
hardBtn.addEventListener("click",function(){
  easyBtn.classList.remove("selected");
     hardBtn.classList.add("selected");
     colors=generateRandomColors(numSquares);
     pickedColor=pickColor();
     colorDisplay.textContent=pickedColor;
     for(var i=0;i<squares.length;i++){
     	squares[i].style.backgroundColor=colors[i];
     	squares[i].style.display="block";}
});









 colorDisplay.textContent = pickedColor;
 for(var i =0;i < squares.length;i++){
 	//add initial colors to square
       squares[i].style.backgroundColor = colors[i];
     // add click listeners to square
     squares[i].addEventListener("click",function(){
     	//grab colour of picked square
     	var clickedColor =this.style.backgroundColor;
     	//compare that color to pickedColor
        if(clickedColor === pickedColor){
        	//alert("Correct!");
        	messageDisplay.textContent="Correct!!!";
        	//after you win we change the text content of button as play again
        	resetButton.textContent="Play Again";
        	changeColors(pickedColor);
        	h1.style.backgroundColor=clickedColor;
        }
        else {
        	// if the wrong colour is picked then it turns into the bg colour.
        	this.style.backgroundColor="#232323";
        	messageDisplay.textContent="TRY AGAIN!!!!";
        }
     });  
 }

//if the person guesses the right color then all square will take that color.
function changeColors(color){
	//loop through the colors
	 for(var i=0;i< colors.length;i++){
	 	squares[i].style.backgroundColor = color;
	 }
}


function pickColor() {
	//Math.random picks a random number(less than 1).If you want to pick a random number between 1 and 6(multiply math.random() by 6 which will 
	//result in a number less than 6.If you want to get 6 add 1) 
	//Math.floor will return the number ,not including decimal.
	var random =Math.floor(Math.random() * colors.length);
	return colors[random];
}


function generateRandomColors(num){
//make an array
var arr = [];
//add num random colors to  array
for(var i=0;i<num;i++)
{
	//get random color and push into arr
    arr.push(randomColor());
}
//return the array

return arr;
}


function randomColor(){
	//pick a red from 0-255
	var r=Math.floor(Math.random() * 256);
	//pick a green from 0-255
	var g=Math.floor(Math.random() * 256);
	//pick a blue from 0-255
	var b=Math.floor(Math.random() * 256);
	//we need to add spaces between the numbers in the rgb as we saw in the console that clicked colour has rgb with spaces and
//picked color didn't    
return "rgb(" + r + ", " + g + ", " + b + ")";
}
