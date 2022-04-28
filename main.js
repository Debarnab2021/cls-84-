// Create a reference for the 
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");


img_width = 300;
img_height = 100;

var img_image;

img_x = 100;
img_y = 100;

function add() {
	img_imgTag = new Image(); //defining a variable with a new image
	img_imgTag.onload = uploadimg; // setting a function, onloading this variable
	img_imgTag.src = img_image;   // load image
}

function uploadimg() {

	ctx.drawImage(img_imgTag, img_x, img_y, img_width, img_height);
}

//Write a code to grab the key-pressed event

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	
		if((keyPressed >=97 && keyPressed<=122)|| (keyPressed >=65 && keyPressed<=90))
		{
			aplhabetkey();
		}
		else if((keyPressed >=48 && keyPressed<=57))
		{
			numberkey();
		}
		else if((keyPressed >=37 && keyPressed<=40))
		{
			arrowkey();
		}
		else if(keyPressed=17)
		{
			specialkey();
		}
		else if(keyPressed=27)
		{
			specialkey();
		}
		else if(keyPressed=18)
		{
			specialkey();
		}
		//write a code to check the type of key pressed
		else
		{
			otherkey();
		document.getElementById("d1").innerHTML="You pressed symbol or other key";
		}
}

function aplhabetkey()
{
	//upload respective image with the message.
	alpkey_img="Alpkey.png"; 
	//ctx.drawImage(alpkey_img,0,0,canvas.width,canvas.height);
	
	document.getElementById("d1").innerHTML="You Pressed Alphabet key";
	add();
}
function numberkey()
{
	numkey_img="numkey.png"; 
	//ctx.drawImage(numkey_img,0,0,canvas.width,canvas.height);
	document.getElementById("d1").innerHTML="You Pressed number key";
	add();
}
function arrowkey()
{
	arrkey_img="Arrkey.png"; 
	//ctx.drawImage(arrkey_img,0,0,canvas.width,canvas.height);
	document.getElementById("d1").innerHTML="You Pressed arrow key";
	add();
}
function specialkey()
{
	spkey_img="spkey.png"; 
	//ctx.drawImage(spkey_img,0,0,canvas.width,canvas.height);
	document.getElementById("d1").innerHTML="You Pressed special key";
	add();
}
function otherkey()
{
	otherkey_image="otherkey.png";
	//ctx.drawImage(otherkey_img,0,0,canvas.width,canvas.height);
	document.getElementById("d1").innerHTML="You Pressed other key";
	add();
}
	
