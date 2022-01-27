/*
Programmer: Josiah Fuller
Team Member: Spencer
Date: 1.26.2022
Program: We will be making a program to go through a haunted mansion
 filled with haunted sounds, spooky color changes, and other obstacles
*/

async function startProgram()
{
	await goToBlueLight();
	
}

async function goToBlueLight()
{
	await scrollMatrixText('Start', {r: 255, g: 0, b: 0}, 30, true);
	await roll(0, 100, 1.45);
	await setMainLed({ r: 0, g: 0, b: 255 });
}
