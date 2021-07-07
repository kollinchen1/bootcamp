class BankAccount:
    # don't forget to add some default values for these parameters!
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
class user:
    def __init__(self,name):
        self.name = name
        self.accounts = {
            'boa':BankAccount(int_rate=0.02, balance=0),
            'chase':BankAccount(int_rate=0.05, balance=0)
            }
        
    def make_deposit(self, amount,bank):
        self.accounts[bank].deposit(amount)
        return self
    def make_withdrawal(self, amount,bank):
        self.accounts[bank].withdraw(amount)
        return self
    def display_user_balance(self,bank):
        self.accounts[bank].display_account_info()
        return self

kol = user("Kol")
kol.make_deposit(1000,'boa')
kol.display_user_balance("boa")
kol.make_deposit(2000,'chase')
kol.display_user_balance("chase")
