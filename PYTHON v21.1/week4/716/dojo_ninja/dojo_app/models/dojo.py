from dojo_app.config.mysqlconnection import connectToMySQL

from dojo_app.models import ninja

class Dojo:
    def __init__(self, data):
        # data is a diction that contains all of the data from a row in the database
        # we need an attribute for each field in our table
        self.id = data['id']
        self.name = data['name']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']
        self.ninjas = [] # this list will contain ninja objects

    # in general, a CRUD application needs 5 methods
    # Create has 1 method
    # Read has 2 methods
    # Read Many things
    # Read one thing
    # Update has 1 method
    # Delete has 1 method
    # all of these methods are class methods

    @classmethod
    def create(cls, data):
        # data is a dictionary containing all the data from the form
        query = """
            INSERT INTO dojos (name, created_at, updated_at)
            VALUES (%(name)s, NOW(), NOW());
        """
        dojo_id = connectToMySQL("dojos_and_ninjas_schema").query_db(query, data)

        return dojo_id


    @classmethod
    def get_all(cls):
        query = "SELECT * FROM dojos;"
        results = connectToMySQL("dojos_and_ninjas_schema").query_db(query)
        # results is always a list of dictionaries

        all_dojos = []

        for row in results:
            # row is each individual dictionary in the results list
            # cls(row) is instantiaing a dojo object 
            # appending to a our list of dojo objects
            all_dojos.append(cls(row))
        
        return all_dojos


    @classmethod
    def get_one(cls, data):
        query = "SELECT * FROM dojos LEFT JOIN ninjas ON dojos.id = ninjas.dojo_id WHERE dojos.id = %(id)s;"
        results = connectToMySQL("dojos_and_ninjas_schema").query_db(query, data)
        # results is a list of dictionaries
        # results[0] is the dict at index of 0
        print(results)
        dojo = cls(results[0])

        # if there is no ninja, the ninjas.id == None; None == False
        # if there is a ninja, then ninjas.id == some number; == True
        # if results[0]['ninjas.id'] != None:
        for row in results:
            row_data = {
                "id": row['ninjas.id'],
                "first_name": row['first_name'],
                "last_name": row['last_name'],
                "age": row["age"],
                "created_at": row['ninjas.created_at'],
                "updated_at": row['ninjas.updated_at']
            }
            # lowercase ninja is the file, pascalcase ninja is the class in that file
            dojo.ninjas.append(ninja.Ninja(row_data))

        return dojo
    @classmethod
    def update(cls, data):
        pass



    @classmethod
    def delete(cls, data):
        pass