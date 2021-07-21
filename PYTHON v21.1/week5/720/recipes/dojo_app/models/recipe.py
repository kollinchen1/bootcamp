from flask import flash

from dojo_app.config.mysqlconnection import connectToMySQL
from dojo_app.models import user

import time
from datetime import date
from dateutil.parser import parse

class Recipe:
    schema = "recipes_schema"

    def __init__(self, data):
        self.id = data['id']
        if data['user_id']:
            self.user = user.User.get_by_id({"id": data['user_id']})
        self.name = data['name']
        self.description = data['description']
        self.instruction = data['instruction']
        self.date_made = data['date_made']
        self.under30 = data['under30']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']


    @classmethod
    def create(cls, data):
        query = """
            INSERT INTO recipes (user_id, name, description, instruction, date_made, under30, created_at, updated_at) 
            VALUES (%(user_id)s, %(name)s, %(description)s, %(instruction)s,%(date_made)s, %(under30)s, NOW(), NOW());
        """

        # this returns the id of the newly created ice cream
        return connectToMySQL(cls.schema).query_db(query, data)


    @classmethod
    def get_all(cls):
        query = "SELECT * FROM recipes;"
        results = connectToMySQL(cls.schema).query_db(query)

        recipes = []
        for row in results:
            recipes.append(cls(row))
        
        return recipes



    @classmethod
    def get_one(cls, data):
        query = "SELECT * FROM recipes WHERE id = %(id)s;"
        results = connectToMySQL(cls.schema).query_db(query, data)

        return cls(results[0])


    @classmethod
    def update(cls, data):
        query = """
            UPDATE recipes SET name = %(name)s, description = %(description)s, instruction = %(instruction)s, 
            date_made = %(date_made)s, under30 = %(under30)s, updated_at = NOW() WHERE id = %(id)s;
        """

        return connectToMySQL(cls.schema).query_db(query, data)


    @classmethod
    def delete(cls, data):
        query = "DELETE FROM recipes WHERE id = %(id)s;"

        return connectToMySQL(cls.schema).query_db(query, data)

    
    @staticmethod
    def validate(post_data):
        is_valid = True
        if len(post_data['name']) < 3:
            flash("name must be at least 3 characters.")
            is_valid = False

        if len(post_data['description']) < 3:
            flash("description must be at least 3 characters.")
            is_valid = False

        if len(post_data['instruction']) < 3:
            flash("instruction must be at least 3 characters.")
            is_valid = False

        if len(post_data['date_made']) == 0 or not post_data.get('date_made'):
            flash("Please enter the date","date")
            is_valid = False
        else:
            a = date.today().strftime("%Y-%m-%d")
            b = post_data['date_made']
            c = parse(a)-parse(b)
            if c.days > 0:
                pass
            else:
                flash("Please enter a valid date (not in the future)","date_made")
                is_valid = False

        if not post_data.get("under30"):
            flash("Please select yes or no","under30")
            is_valid = False
        return is_valid