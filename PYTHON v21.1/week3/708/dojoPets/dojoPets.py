class Ninja:
    def __init__(self,first_name,last_name, treats, pet_food, pet):
        self.first_Name = first_name
        self.last_name = last_name
        self.treats = treats
        self.pet_food = pet_food
        self.pet = pet
    def walk(self):
        self.pet.play()
        return self
    def feed(self):
        self.pet.eat()
        return self
    def bathe(self):
        self.pet.noise()
        return self

class Pet:
    def __init__(self,name,type,tricks):
        self.name = name
        self.type = type
        self.tricks = tricks
        self.energy = 0
        self.health = 0
        self.sound = "hodl"
    def sleep(self):
        self.energy += 25
    def eat(self):
        self.energy+=5
        self.health+=10
    def play(self):
        self.health+=10
    def noise(self):
        print(self.sound)
dudu = Pet("dudu","dog","jump")
kol = Ninja("kol","che","candy","food",dudu)
kol.feed().walk().bathe()