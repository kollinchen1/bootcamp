from dojo_app.config.mysqlconnection import connectToMySQL

from dojo_app.models import dojo

class Ninja:
    def __init__(self, data):
        self.id = data['id']
        # this needs to be the whole dojo object, not just the id
        # self.dojo = data['dojo']
        if "dojo_id" in data:
            self.dojo = dojo.Dojo.get_one({"id": data['dojo_id']}) 
        self.first_name = data['first_name']
        self.last_name = data['last_name']
        self.age = data['age']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']

    @classmethod
    def create(cls, data):
        query = """
            INSERT INTO ninjas (dojo_id, first_name, last_name, age, created_at, updated_at) 
            VALUES (%(dojo_id)s, %(first_name)s,%(last_name)s,%(age)s, NOW(), NOW());
        """
        
        # this query returns the new ninja's id
        return connectToMySQL("dojos_and_ninjas_schema").query_db(query, data)


    @classmethod
    def get_all(cls):
        query = "SELECT * FROM ninjas;"
        results = connectToMySQL("dojos_and_ninjas_schema").query_db(query)
        ninjas = []
        for row in results: 
            # row_data = {
            #     "id": row['id'],
            #     "dojo": Dojo.get_one({"id": row['dojo_id']}),
            #     "created_at": row['created_at'],
            #     "updated_at": row['updated_at']
            # }
            # ninjas.append(cls(row_data))
            ninjas.append(cls(row))
        
        return ninjas
        
    @classmethod
    def get_one(cls, data):
        pass


    @classmethod
    def update(cls, data):
        pass


    @classmethod
    def delete(cls, data):
        pass