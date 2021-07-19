from dojo_app.config.mysqlconnection import connectToMySQL
from flask import flash

class Dojo:
    def __init__(self, data):
        # data is a diction that contains all of the data from a row in the database
        # we need an attribute for each field in our table
        self.id = data['id']
        self.name = data['name']
        self.location = data['location']
        self.language = data['language']
        self.comment = data['comment']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']

    @classmethod
    def create(cls, data):
        # data is a dictionary containing all the data from the form
        query = """
            INSERT INTO dojos (name, location, language,comment,created_at, updated_at)
            VALUES (%(name)s,%(location)s,%(language)s,%(comment)s, NOW(), NOW());
        """
        dojo_id = connectToMySQL("dojo_survey_schema").query_db(query, data)
    
        return dojo_id


    @classmethod
    def get_one(cls):
        query = "SELECT * FROM dojos ORDER BY ID DESC LIMIT 1;"
        results = connectToMySQL("dojo_survey_schema").query_db(query)
        return results[0]

    @staticmethod
    def validate(post_data):
        is_valid = True # we start with assuming the data is valid
        if "name" not in post_data:
            flash("Stop changing my website you person you")
            is_valid = False
        elif len(post_data['name']) < 3:
            # flash messages exist for just one HTTP req/res cycle
            flash("Dojo name must be at least 3 characters.")
            is_valid = False
        if len(post_data['comment']) < 1:
            # flash messages exist for just one HTTP req/res cycle
            flash("Comment something plz~")
            is_valid = False    


        return is_valid