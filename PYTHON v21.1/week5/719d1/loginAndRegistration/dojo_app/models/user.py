from flask import flash
from flask_bcrypt import Bcrypt
import re

from dojo_app import app
from dojo_app.config.mysqlconnection import connectToMySQL


# date calculations
import time
from datetime import date
from dateutil.parser import parse

bcrypt = Bcrypt(app)

class User:
    schema = "login_register_schema"
    def __init__(self, data):
        self.id = data['id']
        self.first_name = data['first_name']
        self.last_name = data['last_name']
        self.email = data['email']
        self.password = data['password']
        self.birthday = data['birthday']
        self.gender = data['gender']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']


    @classmethod
    def get_all(cls):
        query = "SELECT * FROM users;"
        results = connectToMySQL(cls.schema).query_db(query)
        users = []
        for row in results:
            users.append(cls(row))
        return users


    
    @classmethod
    def get_by_email(cls, data):
        query = "SELECT * FROM users WHERE email = %(email)s;"
        results = connectToMySQL(cls.schema).query_db(query, data)
        
        if len(results) < 1:
            return False

        return cls(results[0])
    

    @classmethod
    def get_by_id(cls, data):
        query = "SELECT * FROM users WHERE id = %(id)s;"
        results = connectToMySQL(cls.schema).query_db(query, data)

        return cls(results[0])

    
    @classmethod
    def create(cls, data):
        query = """
            INSERT INTO users (first_name, last_name, email, password, birthday, gender,created_at, updated_at)
            VALUES (%(first_name)s, %(last_name)s, %(email)s, %(password)s, %(birthday)s, %(gender)s, NOW(), NOW());
        """
        
        return connectToMySQL(cls.schema).query_db(query, data)


    @staticmethod
    def register_validate(post_data):
        is_valid = True

        if len(post_data['first_name']) < 2:
            flash("First name must be at least 2 characters.","first_name")
            is_valid = False
        if len(post_data['last_name']) < 2:
            flash("Last name must be at least 2 characters.","last_name")
            is_valid = False

        EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$') 
        if not EMAIL_REGEX.match(post_data['email']): 
            flash("Invalid email address!","email")
            is_valid = False
        elif User.get_by_email({"email": post_data['email']}):
            flash("Email is already in use","email")
            is_valid = False

        PASSWORD_REGEX = re.compile(r'^(?=.*?[A-Z])(?=.*?[0-9]).{8,}$')
        if len(post_data['password'])<8:
            flash("Password must be at least 8 characters","password")
            is_valid = False
        if not PASSWORD_REGEX.match(post_data['password']):
            flash("Must have at least 1 number and 1 uppercase letter.","password")
            is_valid = False
        elif post_data['password'] != post_data['confirm_password']:
            flash("Password and Confirm Password must match","confirm_password")
            is_valid = False
        
        if len(post_data['birthday']) == 0:
            flash("Please enter your birthday","birthday")
        else:
            a = date.today().strftime("%Y-%m-%d")
            b = post_data['birthday']
            c = parse(a)-parse(b)
            if c.days>=730:
                pass
            else:
                flash("Must be 2 years old or older to register","birthday")
                is_valid = False
        if not post_data.get("gender"):
            flash("Please select a gender","gender")
            is_valid = False
        
        return is_valid


    @staticmethod
    def login_validate(post_data):
        user = User.get_by_email({"email": post_data['email']})

        if not user:
            flash("You could not be logged in","login")
            return False
        
        if not bcrypt.check_password_hash(user.password, post_data['password']):
            flash("You could not be logged in","login")
            return False
        
        return True