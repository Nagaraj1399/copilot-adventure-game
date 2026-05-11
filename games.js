// Forest Adventure Game
class ForestGame {
    constructor() {
        this.currentScene = 'intro';
        this.inventory = [];
    }

    render() {
        const container = document.getElementById('gameContainer');
        container.innerHTML = '';
        
        const text = document.createElement('div');
        text.className = 'game-text';
        
        const choices = document.createElement('div');
        choices.className = 'game-choices';
        
        switch(this.currentScene) {
            case 'intro':
                text.innerHTML = '🌲 WELCOME TO THE MYSTERIOUS FOREST ADVENTURE\n\nYou wake up in a dense, foggy forest with no memory of how you got here.\nThe only sounds are the rustling of leaves and distant bird calls.\nYou must find your way out...';
                choices.innerHTML = `
                    <button class="choice-button" onclick="forestGame.choosePath(1)">1. A winding path to the LEFT (darker, mysterious)</button>
                    <button class="choice-button" onclick="forestGame.choosePath(2)">2. A straight path ahead (well-trodden)</button>
                    <button class="choice-button" onclick="forestGame.choosePath(3)">3. A narrow path to the RIGHT (overgrown with vines)</button>
                `;
                break;
            case 'dark':
                text.innerHTML = '🌙 DARK FOREST\n\nThe trees grow thicker, and the air becomes colder.\nYou see an old abandoned cabin in the distance.';
                choices.innerHTML = `
                    <button class="choice-button" onclick="forestGame.choosePath(4)">1. Enter the cabin</button>
                    <button class="choice-button" onclick="forestGame.choosePath(5)">2. Ignore it and keep walking</button>
                    <button class="choice-button" onclick="forestGame.choosePath(6)">3. Search for clues around the cabin</button>
                `;
                break;
            case 'main_road':
                text.innerHTML = '🚶 MAIN ROAD\n\nYou follow the well-trodden path...\nAfter a short walk, you encounter a friendly traveler.';
                choices.innerHTML = `
                    <button class="choice-button" onclick="forestGame.choosePath(7)">1. Ask for directions</button>
                    <button class="choice-button" onclick="forestGame.choosePath(8)">2. Trade items with the traveler</button>
                    <button class="choice-button" onclick="forestGame.choosePath(9)">3. Attack and rob the traveler</button>
                `;
                break;
            case 'overgrown':
                text.innerHTML = '🌿 OVERGROWN PATH\n\nYou hack through the vines on the narrow path...\nYou stumble upon ancient ruins covered in moss.';
                choices.innerHTML = `
                    <button class="choice-button" onclick="forestGame.choosePath(10)">1. Explore the ruins carefully</button>
                    <button class="choice-button" onclick="forestGame.choosePath(11)">2. Run away - this seems dangerous</button>
                    <button class="choice-button" onclick="forestGame.choosePath(12)">3. Take a rest here</button>
                `;
                break;
            case 'cabin':
                text.innerHTML = '🏠 INSIDE THE CABIN\n\nYou cautiously enter the cabin...\nInside, you find a fire still burning and supplies.\nThere\'s also a map on the table pointing to the village!\n\n🎉 YOU ESCAPED! Congratulations!';
                choices.innerHTML = `<button class="choice-button" onclick="closeGame()">Close Game</button>`;
                break;
            case 'village1':
                text.innerHTML = '🏘️ VILLAGE FOUND\n\nYou wander deeper into the forest and eventually find a village!\n\n🎉 YOU ESCAPED! Congratulations!';
                choices.innerHTML = `<button class="choice-button" onclick="closeGame()">Close Game</button>`;
                break;
            case 'map_compass':
                text.innerHTML = '🗺️ TREASURE FOUND\n\nYou find a mysterious map and a compass!\nThe map leads you straight to the village!\n\n🎉 YOU ESCAPED! Congratulations!';
                choices.innerHTML = `<button class="choice-button" onclick="closeGame()">Close Game</button>`;
                break;
            case 'directions':
                text.innerHTML = '👤 TRAVELER HELPS\n\nThe traveler points you toward the nearest village!\n\n🎉 YOU ESCAPED! Congratulations!';
                choices.innerHTML = `<button class="choice-button" onclick="closeGame()">Close Game</button>`;
                break;
            case 'trade':
                text.innerHTML = '🤝 SUCCESSFUL TRADE\n\nYou receive a map to the village in exchange!\n\n🎉 YOU ESCAPED! Congratulations!';
                choices.innerHTML = `<button class="choice-button" onclick="closeGame()">Close Game</button>`;
                break;
            case 'warrior':
                text.innerHTML = '⚔️ COMBAT FAILURE\n\nThe traveler was actually a skilled warrior...\n\n☠️ GAME OVER! You lost the encounter.';
                choices.innerHTML = `<button class="choice-button" onclick="startForestGame()">Try Again</button>`;
                break;
            case 'temple':
                text.innerHTML = '🏛️ ANCIENT TEMPLE\n\nInside, you find an ancient temple with an exit on the other side!\n\n🎉 YOU ESCAPED! Congratulations!';
                choices.innerHTML = `<button class="choice-button" onclick="closeGame()">Close Game</button>`;
                break;
            case 'retreat':
                text.innerHTML = '🏃 WISE RETREAT\n\nYou wisely retreat and find another path to safety.\n\n🎉 YOU ESCAPED! Congratulations!';
                choices.innerHTML = `<button class="choice-button" onclick="closeGame()">Close Game</button>`;
                break;
            case 'collapse':
                text.innerHTML = '☠️ RUINS COLLAPSE\n\nYou rest, but then the ruins collapse around you!\n\n☠️ GAME OVER! Bad luck!';
                choices.innerHTML = `<button class="choice-button" onclick="startForestGame()">Try Again</button>`;
                break;
        }
        
        container.appendChild(text);
        container.appendChild(choices);
    }

    choosePath(choice) {
        switch(choice) {
            case 1: this.currentScene = 'dark'; break;
            case 2: this.currentScene = 'main_road'; break;
            case 3: this.currentScene = 'overgrown'; break;
            case 4: this.currentScene = 'cabin'; break;
            case 5: this.currentScene = 'village1'; break;
            case 6: this.currentScene = 'map_compass'; break;
            case 7: this.currentScene = 'directions'; break;
            case 8: this.currentScene = 'trade'; break;
            case 9: this.currentScene = 'warrior'; break;
            case 10: this.currentScene = 'temple'; break;
            case 11: this.currentScene = 'retreat'; break;
            case 12: this.currentScene = 'collapse'; break;
        }
        this.render();
    }
}

// Space Station Game
class SpaceGame {
    constructor() {
        this.currentScene = 'intro';
    }

    render() {
        const container = document.getElementById('gameContainer');
        container.innerHTML = '';
        
        const text = document.createElement('div');
        text.className = 'game-text';
        
        const choices = document.createElement('div');
        choices.className = 'game-choices';
        
        switch(this.currentScene) {
            case 'intro':
                text.innerHTML = '🚀 WELCOME TO THE SPACE STATION MYSTERY\n\nYou regain consciousness in a dimly lit space station.\nAlarms are blaring, and the life support system is failing.\nYou must find a way to restore power and escape...';
                choices.innerHTML = `
                    <button class="choice-button" onclick="spaceGame.choosePath(1)">1. Head to the ENGINE ROOM (to the left)</button>
                    <button class="choice-button" onclick="spaceGame.choosePath(2)">2. Go to the CONTROL ROOM (straight ahead)</button>
                    <button class="choice-button" onclick="spaceGame.choosePath(3)">3. Visit the HYDROPONICS BAY (to the right)</button>
                `;
                break;
            case 'engine':
                text.innerHTML = '⚙️ ENGINE ROOM\n\nThe engines are offline and sparks fly from damaged wiring.';
                choices.innerHTML = `
                    <button class="choice-button" onclick="spaceGame.choosePath(4)">1. Attempt to manually restart the engines</button>
                    <button class="choice-button" onclick="spaceGame.choosePath(5)">2. Check the control panel for diagnostics</button>
                    <button class="choice-button" onclick="spaceGame.choosePath(6)">3. Return to the main corridor</button>
                `;
                break;
            case 'control':
                text.innerHTML = '💻 CONTROL ROOM\n\nComputers and screens line the walls.\nA robot is malfunctioning and looks dangerous.';
                choices.innerHTML = `
                    <button class="choice-button" onclick="spaceGame.choosePath(7)">1. Deactivate the robot</button>
                    <button class="choice-button" onclick="spaceGame.choosePath(8)">2. Communicate with the robot</button>
                    <button class="choice-button" onclick="spaceGame.choosePath(9)">3. Ignore it and check the computers</button>
                `;
                break;
            case 'hydro':
                text.innerHTML = '🌱 HYDROPONICS BAY\n\nLush plants and growing crops fill this section.\nYou find oxygen masks and emergency supplies.';
                choices.innerHTML = `
                    <button class="choice-button" onclick="spaceGame.choosePath(10)">1. Take the oxygen masks</button>
                    <button class="choice-button" onclick="spaceGame.choosePath(11)">2. Take supplies and look for an escape pod</button>
                    <button class="choice-button" onclick="spaceGame.choosePath(12)">3. Return to the main corridor</button>
                `;
                break;
            case 'explosion':
                text.innerHTML = '💥 ENGINE EXPLOSION\n\nThe engines explode! The station is lost.\n\n☠️ GAME OVER! Bad decision!';
                choices.innerHTML = `<button class="choice-button" onclick="startSpaceGame()">Try Again</button>`;
                break;
            case 'power':
                text.innerHTML = '⚡ POWER RESTORED\n\nYou diagnose the problem and restore power!\n\n🎉 YOU SAVED THE STATION! Congratulations!';
                choices.innerHTML = `<button class="choice-button" onclick="closeGame()">Close Game</button>`;
                break;
            case 'robot_attack':
                text.innerHTML = '🤖 ROBOT ATTACK\n\nThe robot attacks! You barely escape.\n\n☠️ GAME OVER! You were defeated!';
                choices.innerHTML = `<button class="choice-button" onclick="startSpaceGame()">Try Again</button>`;
                break;
            case 'robot_help':
                text.innerHTML = '🤖 ROBOT HELPER\n\nThe robot is actually trying to help!\nIt gives you the override codes.\n\n🎉 YOU SAVED THE STATION! Congratulations!';
                choices.innerHTML = `<button class="choice-button" onclick="closeGame()">Close Game</button>`;
                break;
            case 'beacon':
                text.innerHTML = '📡 EMERGENCY BEACON\n\nYou find the emergency beacon and signal for help!\n\n🎉 RESCUE IS ON THE WAY! Congratulations!';
                choices.innerHTML = `<button class="choice-button" onclick="closeGame()">Close Game</button>`;
                break;
            case 'oxygen':
                text.innerHTML = '😷 OXYGEN SECURED\n\nWith the oxygen masks, you can explore safely!\n\n🎉 YOU GAINED VALUABLE RESOURCES! Congratulations!';
                choices.innerHTML = `<button class="choice-button" onclick="closeGame()">Close Game</button>`;
                break;
            case 'escape_pod':
                text.innerHTML = '🚀 ESCAPE POD\n\nYou find an escape pod and launch to safety!\n\n🎉 YOU ESCAPED! Congratulations!';
                choices.innerHTML = `<button class="choice-button" onclick="closeGame()">Close Game</button>`;
                break;
        }
        
        container.appendChild(text);
        container.appendChild(choices);
    }

    choosePath(choice) {
        switch(choice) {
            case 1: this.currentScene = 'engine'; break;
            case 2: this.currentScene = 'control'; break;
            case 3: this.currentScene = 'hydro'; break;
            case 4: this.currentScene = 'explosion'; break;
            case 5: this.currentScene = 'power'; break;
            case 6: this.currentScene = 'intro'; break;
            case 7: this.currentScene = 'robot_attack'; break;
            case 8: this.currentScene = 'robot_help'; break;
            case 9: this.currentScene = 'beacon'; break;
            case 10: this.currentScene = 'oxygen'; break;
            case 11: this.currentScene = 'escape_pod'; break;
            case 12: this.currentScene = 'intro'; break;
        }
        this.render();
    }
}

// Global game instances
let forestGame;
let spaceGame;

// Start forest game
function startForestGame() {
    forestGame = new ForestGame();
    document.getElementById('gameModal').style.display = 'block';
    forestGame.render();
}

// Start space game
function startSpaceGame() {
    spaceGame = new SpaceGame();
    document.getElementById('gameModal').style.display = 'block';
    spaceGame.render();
}

// Close game modal
function closeGame() {
    document.getElementById('gameModal').style.display = 'none';
    document.getElementById('gameContainer').innerHTML = '';
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('gameModal');
    if (event.target === modal) {
        modal.style.display = 'none';
        document.getElementById('gameContainer').innerHTML = '';
    }
};