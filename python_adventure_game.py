#!/usr/bin/env python3
"""
Choose Your Own Adventure Game - Python Edition
A simple text-based adventure game to demonstrate GitHub Copilot capabilities.
"""

def print_intro():
    """Print the game introduction."""
    print("\n" + "="*60)
    print("WELCOME TO THE MYSTERIOUS FOREST ADVENTURE")
    print("="*60)
    print("\nYou wake up in a dense, foggy forest with no memory of how you got here.")
    print("The only sounds are the rustling of leaves and distant bird calls.")
    print("You must find your way out...\n")

def forest_entrance():
    """Start the adventure at the forest entrance."""
    print("You stand at a crossroads. Three paths lie before you:")
    print("1. A winding path to the LEFT (darker, mysterious)")
    print("2. A straight path ahead (well-trodden)")
    print("3. A narrow path to the RIGHT (overgrown with vines)")
    
    choice = input("\nWhat do you choose? (1/2/3): ").strip()
    
    if choice == "1":
        dark_forest()
    elif choice == "2":
        main_road()
    elif choice == "3":
        overgrown_path()
    else:
        print("Invalid choice. Please try again.")
        forest_entrance()

def dark_forest():
    """Adventure path: Dark forest."""
    print("\n" + "-"*60)
    print("You venture into the dark forest...")
    print("-"*60)
    print("\nThe trees grow thicker, and the air becomes colder.")
    print("You see an old abandoned cabin in the distance.")
    print("\n1. Enter the cabin")
    print("2. Ignore it and keep walking")
    print("3. Search for clues around the cabin")
    
    choice = input("\nWhat do you do? (1/2/3): ").strip()
    
    if choice == "1":
        cabin_inside()
    elif choice == "2":
        print("\nYou wander deeper into the forest and eventually find a village!")
        print("🎉 YOU ESCAPED! Congratulations!")
    elif choice == "3":
        print("\nYou find a mysterious map and a compass!")
        print("The map leads you straight to the village!")
        print("🎉 YOU ESCAPED! Congratulations!")
    else:
        print("Invalid choice.")
        dark_forest()

def main_road():
    """Adventure path: Main road."""
    print("\n" + "-"*60)
    print("You follow the well-trodden path...")
    print("-"*60)
    print("\nAfter a short walk, you encounter a friendly traveler.")
    print("\n1. Ask for directions")
    print("2. Trade items with the traveler")
    print("3. Attack and rob the traveler")
    
    choice = input("\nWhat do you do? (1/2/3): ").strip()
    
    if choice == "1":
        print("\nThe traveler points you toward the nearest village!")
        print("🎉 YOU ESCAPED! Congratulations!")
    elif choice == "2":
        print("\nYou receive a map to the village in exchange!")
        print("🎉 YOU ESCAPED! Congratulations!")
    elif choice == "3":
        print("\nThe traveler was actually a skilled warrior...")
        print("💀 GAME OVER! You lost the encounter.")
    else:
        print("Invalid choice.")
        main_road()

def overgrown_path():
    """Adventure path: Overgrown path."""
    print("\n" + "-"*60)
    print("You hack through the vines on the narrow path...")
    print("-"*60)
    print("\nYou stumble upon ancient ruins covered in moss.")
    print("\n1. Explore the ruins carefully")
    print("2. Run away - this seems dangerous")
    print("3. Take a rest here")
    
    choice = input("\nWhat do you do? (1/2/3): ").strip()
    
    if choice == "1":
        print("\nInside, you find an ancient temple with an exit on the other side!")
        print("🎉 YOU ESCAPED! Congratulations!")
    elif choice == "2":
        print("\nYou wisely retreat and find another path to safety.")
        print("🎉 YOU ESCAPED! Congratulations!")
    elif choice == "3":
        print("\nYou rest, but then the ruins collapse around you!")
        print("💀 GAME OVER! Bad luck!")
    else:
        print("Invalid choice.")
        overgrown_path()

def cabin_inside():
    """Secret scenario: Inside the cabin."""
    print("\n" + "-"*60)
    print("You cautiously enter the cabin...")
    print("-"*60)
    print("\nInside, you find a fire still burning and supplies.")
    print("There's also a map on the table pointing to the village!")
    print("🎉 YOU ESCAPED! Congratulations!")

def play_again():
    """Ask if the player wants to play again."""
    choice = input("\nWould you like to play again? (yes/no): ").strip().lower()
    if choice in ["yes", "y"]:
        main()
    else:
        print("\nThanks for playing! Goodbye!\n")

def main():
    """Main game loop."""
    print_intro()
    forest_entrance()
    play_again()

if __name__ == "__main__":
    main()