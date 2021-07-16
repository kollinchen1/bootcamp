from user_app.config.mysqlconnection import connectToMySQL

class User:
    def __init__(self, data):
        # data is a diction that contains all of the data from a row in the database
        # we need an attribute for each field in our table
        self.id = data['id']
        self.first_name = data['first_name']
        self.last_name = data['last_name']
        self.email = data['email']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']
    
    @classmethod
    def create(cls, data):
        # data is a dictionary containing all the data from the form
        query = """
            INSERT INTO users (first_name, last_name, email, created_at, updated_at)
            VALUES (%(first_name)s, %(last_name)s, %(email)s, NOW(), NOW());
        """
        user_id = connectToMySQL("users_schema").query_db(query, data)
        return user_id

    @classmethod
    def get_all(cls):
        query = "SELECT * FROM users;"
        results = connectToMySQL("users_schema").query_db(query)
        # results is always a list of dictionaries
        all_users = []
        for row in results:
            # row is each individual dictionary in the results list
            # cls(row) is instantiaing a user object 
            # appending to a our list of user objects
            all_users.append(cls(row))
        
        return all_users


    @classmethod
    def get_one(cls, data):
        query = "SELECT * FROM users WHERE id = %(id)s;"
        results = connectToMySQL("users_schema").query_db(query, data)
        # results is a list of dictionaries
        # results[0] is the dict at index of 0
        return cls(results[0])

    @classmethod
    def update(cls, data):
        query = """
            UPDATE users SET first_name = %(first_name)s, last_name = %(last_name)s, email = %(email)s,
            updated_at = NOW() WHERE id = %(id)s;
        """
        connectToMySQL("users_schema").query_db(query, data)

    @classmethod
    def delete(cls, data):
        query = "DELETE FROM users WHERE id = %(id)s;"
        
        connectToMySQL("users_schema").query_db(query, data)

