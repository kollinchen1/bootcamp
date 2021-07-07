import parent
print("\n\n\n")
# print(locals())
print(__name__)
if __name__ == "__main__":
    print("the file is being executed directly")
else:
    print("The file is being executed because it is imported by another file. The file is called: ", __name__)
  
if __name__ == "__main__":
    product = Product([args])
    print(product)
    print(product.add_tax(0.18))
