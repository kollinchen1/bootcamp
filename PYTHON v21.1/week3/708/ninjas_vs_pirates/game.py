# from classes.ninja import Ninja
# from classes.pirate import Pirate

# michelangelo = Ninja("Michelanglo")

# jack_sparrow = Pirate("Jack Sparrow")

# michelangelo.attack(jack_sparrow)
# choose = input('What is your choice?')
# jack_sparrow.show_stats()

import random
import os
import time

#Heroes
class Pirate:
    def __init__(self,name):
        self.name = name
        self.health = 150
        self.strength = 10
        self.defence = 10
        self.magic = 1
        self.loot = random.randint(3,5)

    def rum_rage(self , Ninja):
        self.health -= 5
        self.strength += 7
        Ninja.health -= self.strength
        return self
    
    def sword_slice(self , Ninja):
        Ninja.health -= self.strength
        return self
    
    def pistol_whip(self , Ninja):
        Ninja.health -= self.strength
        return self

    def parrots_might(self , Ninja):
        Ninja.health -= self.strength
        return self

    def wooden_leg_melee(self , Ninja):
        Ninja.health -= self.strength
        self.defense += 20
        return self

class Ninja:
    def __init__(self,name):
        self.name = name
        self.health = 120
        self.strength = 5
        self.defence = 5
        self.magic = 15
        self.loot = random.randint(3,5)

    def attack( self, Pirate):
        Pirate.health -= self.strength
        return self

    def pizza_time( self, Pirate):
        self.health += 30
        return self

    def ninja_star(self, Pirate):
        Pirate.health -= 10
        return self
        
    def backstab(self, Pirate):
        Pirate.health -= 30
        return self
    
    def go_stealth(self):
        self.defence += 100
        return self
    


# GAMEPLAY =======================================================

def heroselect():
    # print ("What are you? \n   1, 2, or 3? \n     Tell me your number\n")
    # time.sleep(2)
    # print("       ...You must be somebody\n")
    # time.sleep(2)
    selection = input("1. Pirate \n2. Ninja \n3. Nobody.\n\n")
    if selection == "1":
        player = Pirate("Jack Sparrow")
        enemy = Ninja("Michelanglo")
        print("=" * 50)
        # drawAscii("Pirate")
        print ("\nWhy's all the rum gone?\n")
        return player,enemy
        
    elif selection == "2":
        player = Ninja("Michelanglo")
        enemy = Pirate("Jack Sparrow")
        print("=" * 50)
        # drawAscii("Ninja")
        print ("\nThe unseen blade is the edgiest\n")
        return player,enemy

def battlestate(player,enemy):
    # enemy = enemyselect()
    print ("-----------------------------\nOut of the darkness a", {enemy.name}, "rushes towards you.")
    while enemy.health > 0 :
        choice = input("-----------------------------\nWhat will you do?\n\n1. Physical Strength\n\n2. Magical Attack\n\n   3. Run\n\n")


        if choice == "1":
            print ("-----------------------------\nYou come down on the", enemy.name, "with all your might.")
            hitchance = random.randint(0, 10)
            if hitchance > 3:
                enemy.health = enemy.health - character.strength
                print("-----------------------------\nYou cleave and crush into the", enemy.name)

                if enemy.health > 0:
                    character.health = character.health - (enemy.strength / character.defence)
                    print ("-----------------------------\nthe", enemy.name, "attacks")
                    hitchance = random.randint(0,10)
                    if hitchance > 5:
                        character.health = character.health - (enemy.strength / character.defence)
                        print("-----------------------------\nthe", enemy.name, "strikes you.")
                else:
                    if enemy.name == "Goblin":
                        enemy.health = 30

                    elif enemy.name == "Demon":
                        enemy.health = 50

                    elif enemy.name == "Ogre":
                        enemy.health = 70

                    print ("-----------------------------\nThe", enemy.name, "falls.")
                    print ("It dropped something...")
                    lootDrop = loot()
                    print ("-----------------------------\nIt's a", lootDrop)
                    break
            else:
                print("-----------------------------\nYou miss.")
                print("the", enemy.name, "attacks while you're off balance and strikes you.")
                character.health = character.health - enemy.strength

player,enemy = heroselect()
battlestate(player, enemy)
