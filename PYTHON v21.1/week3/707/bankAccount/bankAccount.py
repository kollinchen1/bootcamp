class BankAccount:
    # don't forget to add some default values for these parameters!
    accounts= []
    bank_name = ""
    def __init__(self, int_rate, balance): 
        self.int_rate = int_rate
        self.balance = balance
    # your code here! (remember, instance attributes go here)
    # don't worry about user info here; we'll involve the User class soon
    def deposit(self, amount):
        self.balance += amount
        return self
    def withdraw(self, amount):
        if BankAccount.can_withdraw(self.balance, amount):
            self.balance -= amount
        else:
            self.balance -= 5
            print("Insufficient funds: Charging a $5 fee")
        return self
    def display_account_info(self):
        print(f"Balance:${self.balance}")
    def yield_interest(self):
        if self.balance>=0:
            self.balance *= 1+self.int_rate
        return self
    @staticmethod
    def can_withdraw(balance,amount):
        if (balance - amount) < 0:
            return False
        else:
            return True
    @classmethod
    def all_info(self,cls):
        print(f"Interest Rate:{cls.int_rate}, Balance:{cls.balance}")
boa = BankAccount(0.02, 3000)
chase = BankAccount(0.05, 3000)

boa.deposit(1000).deposit(2000).deposit(5000).withdraw(1000).yield_interest().display_account_info()
chase.deposit(3000).deposit(5000).withdraw(1000).withdraw(2000).withdraw(1000).withdraw(1000).yield_interest().display_account_info()

BankAccount.all_info(boa)