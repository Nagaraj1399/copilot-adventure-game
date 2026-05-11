#!/usr/bin/env node

/**
 * Choose Your Own Adventure Game - JavaScript/Node.js Edition
 * A simple text-based adventure game to demonstrate GitHub Copilot capabilities.
 */

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function question(prompt) {
  return new Promise(resolve => {
    rl.question(prompt, resolve);
  });
}

async function printIntro() {
  console.log('\n' + '='.repeat(60));
  console.log('WELCOME TO THE SPACE STATION MYSTERY');
  console.log('='.repeat(60));
  console.log('\nYou regain consciousness in a dimly lit space station.');
  console.log('Alarms are blaring, and the life support system is failing.');
  console.log('You must find a way to restore power and escape...\n');
}

async function spaceStationStart() {
  console.log('You are in the main corridor of the station.');
  console.log('1. Head to the ENGINE ROOM (to the left)');
  console.log('2. Go to the CONTROL ROOM (straight ahead)');
  console.log('3. Visit the HYDROPONICS BAY (to the right)');
  
  const choice = await question('\nWhat do you choose? (1/2/3): ');
  
  if (choice === '1') {
    await engineRoom();
  } else if (choice === '2') {
    await controlRoom();
  } else if (choice === '3') {
    await hydroponicsBay();
  } else {
    console.log('Invalid choice. Please try again.');
    await spaceStationStart();
  }
}

async function engineRoom() {
  console.log('\n' + '-'.repeat(60));
  console.log('You enter the ENGINE ROOM...');
  console.log('-'.repeat(60));
  console.log('\nThe engines are offline and sparks fly from damaged wiring.');
  console.log('1. Attempt to manually restart the engines');
  console.log('2. Check the control panel for diagnostics');
  console.log('3. Return to the main corridor');
  
  const choice = await question('\nWhat do you do? (1/2/3): ');
  
  if (choice === '1') {
    console.log('\n⚠️ The engines explode! The station is lost.');
    console.log('💀 GAME OVER! Bad decision!');
  } else if (choice === '2') {
    console.log('\nYou diagnose the problem and restore power!');
    console.log('🎉 YOU SAVED THE STATION! Congratulations!');
  } else if (choice === '3') {
    await spaceStationStart();
  } else {
    console.log('Invalid choice.');
    await engineRoom();
  }
}

async function controlRoom() {
  console.log('\n' + '-'.repeat(60));
  console.log('You enter the CONTROL ROOM...');
  console.log('-'.repeat(60));
  console.log('\nComputers and screens line the walls. A robot is malfunctioning.');
  console.log('1. Deactivate the robot');
  console.log('2. Communicate with the robot');
  console.log('3. Ignore it and check the computers');
  
  const choice = await question('\nWhat do you do? (1/2/3): ');
  
  if (choice === '1') {
    console.log('\nThe robot attacks! You barely escape.');
    console.log('💀 GAME OVER! You were defeated!');
  } else if (choice === '2') {
    console.log('\nThe robot is actually trying to help! It gives you the override codes.');
    console.log('🎉 YOU SAVED THE STATION! Congratulations!');
  } else if (choice === '3') {
    console.log('\nYou find the emergency beacon and signal for help!');
    console.log('🎉 RESCUE IS ON THE WAY! Congratulations!');
  } else {
    console.log('Invalid choice.');
    await controlRoom();
  }
}

async function hydroponicsBay() {
  console.log('\n' + '-'.repeat(60));
  console.log('You enter the HYDROPONICS BAY...');
  console.log('-'.repeat(60));
  console.log('\nLush plants and growing crops fill this section.');
  console.log('You find oxygen masks and emergency supplies.');
  console.log('1. Take the oxygen masks');
  console.log('2. Take the supplies and look for an escape pod');
  console.log('3. Return to the main corridor');
  
  const choice = await question('\nWhat do you do? (1/2/3): ');
  
  if (choice === '1') {
    console.log('\nWith the oxygen masks, you can explore safely!');
    console.log('🎉 YOU GAINED VALUABLE RESOURCES! Congratulations!');
  } else if (choice === '2') {
    console.log('\nYou find an escape pod and launch to safety!');
    console.log('🎉 YOU ESCAPED! Congratulations!');
  } else if (choice === '3') {
    await spaceStationStart();
  } else {
    console.log('Invalid choice.');
    await hydroponicsBay();
  }
}

async function playAgain() {
  const choice = await question('\nWould you like to play again? (yes/no): ');
  if (choice.toLowerCase() === 'yes' || choice.toLowerCase() === 'y') {
    await main();
  } else {
    console.log('\nThanks for playing! Goodbye!\n');
    rl.close();
  }
}

async function main() {
  await printIntro();
  await spaceStationStart();
  await playAgain();
}

main().catch(console.error);