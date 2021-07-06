def countdown(start):
    a = []
    for x in range(start, -1, -1):
        a.append(x)
    return a

print(countdown(5))

def print_and_return(a):
    print(a[0])
    return a[1]

print(print_and_return([1,2]))

def first_plus_length(a):
    return a[0]+ len(a)
print(first_plus_length([1,2,3,4,5]))

def values_greater_than_second(a):
    newList = []
    if len(a)<2:
        return False
    else:
        for x  in range(0,len(a)):
            if a[x] > a[1]:
                newList.append(a[x])
        print(len(newList))
        return newList
print(values_greater_than_second([5,2,3,2,1,4]))
print(values_greater_than_second([3]))

def length_and_value(a,b):
    newList = []
    for x in range(0, a):
        newList.append(b)
    return newList
print(length_and_value(4,7))
print(length_and_value(6,2))