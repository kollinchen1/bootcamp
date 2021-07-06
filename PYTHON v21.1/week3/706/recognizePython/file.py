num1 = 42 #variable declaration, initialize integer
num2 = 2.3 #variable declaration, initialize float
boolean = True #variable declaration, initialize boolean
string = 'Hello World' #variable declaration, initialize string
pizza_toppings = ['Pepperoni', 'Sausage', 'Jalepenos', 'Cheese', 'Olives'] #variable declaration, initialize List
person = {'name': 'John', 'location': 'Salt Lake', 'age': 37, 'is_balding': False} #variable declaration, initialize Tuples
fruit = ('blueberry', 'strawberry', 'banana') #variable declaration, initialize dictionary
print(type(fruit)) #log statement, access dictionary types
print(pizza_toppings[1]) #log statement, access list value
pizza_toppings.append('Mushrooms') #add value to List
print(person['name']) #access value in the Tuples
person['name'] = 'George' #changing value in the tuples by index
person['eye_color'] = 'blue' #changing value in the tuples by index
print(fruit[2]) #log value in the tuples by index

if num1 > 45: #conditional if
    print("It's greater")  #logging a string if num>45
else: #conditional else
    print("It's lower") #logging a string by default

if len(string) < 5:#conditional if
    print("It's a short word!")  #logging string if less than 5
elif len(string) > 15:#conditional if
    print("It's a long word!") #logging string if more than 15
else:#conditional else
    print("Just right!") #log by default

for x in range(5):  #for loop
    print(x) #print until reach 5 
for x in range(2,5): #for loop
    print(x) #print from 2 to 5 
for x in range(2,10,3): #for loop
    print(x)
x = 0
while(x < 5): #while loop
    print(x)
    x += 1

pizza_toppings.pop() #function call
pizza_toppings.pop(1)

print(person)
person.pop('eye_color')
print(person)

for topping in pizza_toppings:#for loop
    if topping == 'Pepperoni':#condition to continue or to break
        continue
    print('After 1st if statement')
    if topping == 'Olives':
        break

def print_hello_ten_times():#function decoration
    for num in range(10):
        print('Hello')

print_hello_ten_times()#calling function without parameter

def print_hello_x_times(x): #function decoration
    for num in range(x): 
        print('Hello')

print_hello_x_times(4) #calling function with parameter

def print_hello_x_or_ten_times(x = 10): #function decoration
    for num in range(x):
        print('Hello')

print_hello_x_or_ten_times()#calling function without parameter
print_hello_x_or_ten_times(4) #calling function with parameter


"""
Bonus section
"""

# print(num3)  #- NameError: name <variable name> is not defined
# num3 = 72
# fruit[0] = 'cranberry' #TypeError: 'tuple' object does not support item assignment
# print(person['favorite_team']) #- KeyError: 'favorite_team'
# print(pizza_toppings[7]) #- IndexError: list index out of range
#   print(boolean) #- IndentationError: unexpected indent
# fruit.append('raspberry') # - AttributeError: 'tuple' object has no attribute 'append'
# fruit.pop(1) #- AttributeError: 'tuple' object has no attribute 'pop'