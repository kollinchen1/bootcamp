# 1. Basic - Print all integers from 0 to 150.
# 2. Multiples of Five - Print all the multiples of 5 from 5 to 1,000
# 3. Counting, the Dojo Way - Print integers 1 to 100. If divisible by 5, print "Coding" instead. If divisible by 10, print "Coding Dojo".
# 4. Whoa. That Sucker's Huge - Add odd integers from 0 to 500,000, and print the final sum.
# 5. Countdown by Fours - Print positive numbers starting at 2018, counting down by fours.
# 6. Flexible Counter - Set three variables: lowNum, highNum, mult. Starting at lowNum and going through highNum, print only the integers that are a multiple of mult. For example, if lowNum=2, highNum=9, and mult=3, 
#    the loop should print 3, 6, 9 (on successive lines)

for x in range (151):
    print(x)

for x in range(5,1001,5):
    print(x)

for x in range(1,101):
    if x%5==0:
        print("Coding")
    else:
        print(x)

sum = 0
for x in range(1,500000,2):
    sum+=x
print(sum)

sum1 = 0
for x in range(500000):
    if x%2!=0:
        sum1+=x
print(sum1)

for x in range(2018, 0, -4):
    print(x)

lowNum=2 
highNum=9
mult=3
for x in range(lowNum,highNum+1):
    if x%mult == 0:
        print(x)