from dojo_app.config.mysqlconnection import connectToMySQL
from flask import flash
import re

EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$') 

class Email:
    def __init__(self, data):
        # data is a diction that contains all of the data from a row in the database
        # we need an attribute for each field in our table
        self.id = data['id']
        self.email = data['email']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']

    @classmethod
    def create(cls, data):
        # data is a dictionary containing all the data from the form
        query = """
            INSERT INTO emails (email,created_at,updated_at)
            VALUES (%(email)s, NOW(), NOW());
        """
        email_id = connectToMySQL("email_schema").query_db(query, data)
    
        return email_id


    @classmethod
    def get_all(cls):
        query = "SELECT * FROM emails;"
        results = connectToMySQL("email_schema").query_db(query)
        # results is always a list of dictionaries
        all_emails = []
        for row in results:
            # row is each individual dictionary in the results list
            # cls(row) is instantiaing a user object 
            # appending to a our list of user objects
            all_emails.append(cls(row))
        
        return all_emails
    @classmethod
    def get_by_email(cls, data):
        query = "SELECT * FROM emails WHERE email = %(email)s;"
        results = connectToMySQL("email_schema").query_db(query, data)
        if len(results) < 1:
            return False
        return cls(results[0])

    @staticmethod
    def validate(post_data):
        is_valid = True # we start with assuming the data is valid
        if "email" not in post_data:
            flash("Stop changing my website you person you")
            is_valid = False
        if not EMAIL_REGEX.match(post_data['email']): 
            flash("Email is not valid: not the right form")
            is_valid = False
        elif Email.get_by_email({"email": post_data['email']}):
            flash("Email is not valid: Email is already in use")
            is_valid = False
        if is_valid:
            flash("The email address you entered ("+post_data['email']+") is a VALID email address! Thank you!")
        return is_valid

    @classmethod
    def delete(cls, data):
        query = "DELETE FROM emails WHERE id = %(id)s;"
        
        connectToMySQL("email_schema").query_db(query, data)

