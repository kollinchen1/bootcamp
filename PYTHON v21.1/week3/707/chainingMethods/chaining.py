class user:
    def __init__(self,name):
        self.name = name
        self.account_balance = 0
    def make_deposit(self, amount):
        self.account_balance += amount
        return self
    def make_withdrawal(self, amount):
        self.account_balance -= amount
        return self
    def display_user_balance(self):
        print(f"User: {self.name}, Balance:${self.account_balance}")
    def transfer_money(self, other_user, amount):
        self.make_withdrawal(amount)
        other_user.make_deposit(amount)
        return self

michael = user("Michael")
anna = user("Anna")
kol = user("Kol")

michael.make_deposit(500).make_deposit(100).make_deposit(400).make_withdrawal(300).display_user_balance()
anna.make_deposit(500).make_deposit(500).make_withdrawal(300).make_withdrawal(100).display_user_balance()
kol.make_deposit(10000).make_withdrawal(1000).make_withdrawal(2000).make_withdrawal(1000).display_user_balance()

michael.make_deposit(2000).transfer_money(kol,100).display_user_balance()
kol.display_user_balance()

