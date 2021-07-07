class user:
    def __init__(self,name):
        self.name = name
        self.account_balance = 0
    def make_deposit(self, amount):
        self.account_balance += amount
    def make_withdrawal(self, amount):
        self.account_balance -= amount
    def display_user_balance(self):
        print(f"User: {self.name}, Balance:${self.account_balance}")
    def transfer_money(self, other_user, amount):
        self.make_withdrawal(amount)
        other_user.make_deposit(amount)

michael = user("Michael")
anna = user("Anna")
kol = user("Kol")

michael.make_deposit(500)
michael.make_deposit(100)
michael.make_deposit(400)
michael.make_withdrawal(300)
michael.display_user_balance()
anna.make_deposit(500)
anna.make_deposit(500)
anna.make_withdrawal(300)
anna.make_withdrawal(100)
anna.display_user_balance()
kol.make_deposit(10000)
kol.make_withdrawal(1000)
kol.make_withdrawal(2000)
kol.make_withdrawal(1000)
kol.display_user_balance()

michael.transfer_money(kol,100)
michael.display_user_balance()
kol.display_user_balance()

