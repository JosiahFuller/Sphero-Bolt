/*
Programmer: Josiah Fuller
Team Member: Spencer
Date: 1.26.2022
Program: We will be making a program to go through a haunted mansion
 filled with haunted sounds, spooky color changes, and other obstacles
*/

async function startProgram(){
	//Calls the individual functions
	await goToBlueLight();
	await goSound1();
}

async function goToBlueLight(){
	//Display the Start message
	await scrollMatrixText('Start', {r: 255, g: 0, b: 0}, 30, true);
	//Roll to the blue light
	await roll(0, 50, 3.1);
	//Sets the light to blue
	await setMainLed({ r: 0, g: 0, b: 255 });
}

async function goSound1(){
	await delay(0.5);
	//Rolls to the sound icon and plays a sound
	await roll(90, 50, 2.1);
	await Sound.Mechanical.Ambulance.play(true);
}
