import mysql.connector
import json
import jwt
from datetime import datetime, timedelta
from config.config import dbconfig as db
from flask import make_response

class user_model:
    # def __init__(self):
    #     try:
    #         self.con = mysql.connector.connect(host="localhost",user="root",password="janki12345",database="pdd_python")
    #         self.cur = self.con.cursor(dictionary=True)
    #         self.con.autocommit=True
    #         print("connected mysql")
    #     except:
    #         print("mysql connection error")

    def __init__(self):
        try:
            self.con = mysql.connector.connect(host=db["hostname"],user=db["username"],password=db["password"],database=db["database"])
            self.cur = self.con.cursor(dictionary=True)
            self.con.autocommit=True
            print("connected mysql")
        except:
            print("mysql connection error")

    def addUser(self,data):
        try:
            self.cur.execute(f"INSERT INTO users(name,email,password) VALUES('{data['name']}','{data['email']}','{data['password']}')")
            return make_response({"message":"User added successfully"},201)
        except:
            print("Users not added")

    def getUser(self):
        self.cur.execute("SELECT * FROM users")
        result = self.cur.fetchall()
        if len(result)>0:
            return make_response({"payload":result},200)
        else:
            return make_response({"message":"No data found"},204)

    # def updateUser(self,id,data):
    #     print(list(data.keys()))
        
    #     self.cur.execute(f"UPDATE users SET name='{data['name']}' where id = {id}")
    #     # print("\nuploaded\n")
    #     if self.cur.rowcount>0:
    #         return make_response({"message":"Data updated successfully"},201)
    #     else:
    #         return make_response({"message":"Nothing to update"},204)

    def updateUser(self,id,data):
        if not data:
            print("No updates provided.")
            return
        query = "UPDATE users SET "

        for key, value in data.items():
            query += f"{key} = '{value}', "

        query = query.rstrip(', ') + f" where id = {id}"
        
        self.cur.execute(query)
        # self.cur.execute(f"UPDATE users SET name = '{data['name']}' where id = {id}")
        # print("\nuploaded\n")
        if self.cur.rowcount>0:
            return make_response({"message":"Data updated successfully"},201)
        else:
            return make_response({"message":"Nothing to update"},204)      

    def deleteUser(self,id):
        self.cur.execute(f"DELETE FROM users where id = {id}")
        if self.cur.rowcount>0:
            return make_response({"message":"Data DELETED successfully"},200)
        else:
            return make_response({"message":"NOthing to delete"},204)





    def user_signup_model(self,data):
        print(data)
        try:
            self.cur.execute(f"INSERT INTO users(name,email,password) VALUES('{data['name']}','{data['email']}','{data['password']}')")
            print("\nuploaded\n //////// // / / / / / / / / / / / / / / / /")
            return make_response({"success":True,"message":"User Signup successfully"},201)
            # return "Signup Successfully"
        except:
            print("Users not added")

    def user_login_model(self, data):
        try:
            
            self.cur.execute(f"SELECT * FROM users WHERE email='{data['email']}' AND password='{data['password']}' ")
            result = self.cur.fetchall()
            print(result)
            userdata = result[0]
            # print(userdata)

            print("Logging...........")
            exp_time = datetime.now() + timedelta(minutes=15)
            exp_epoch_time = int(exp_time.timestamp())
            payload = {
                "payload":userdata,
                "exp":exp_epoch_time
                }
            token = jwt.encode(payload, "Ritik", algorithm="HS256")
            return make_response({"success":True,"token":"admin"+token}, 200)
        
    
        except:
            return make_response({"success":False})
    
    def user_feedback_model(self, data):
        print(data)
        q = f"UPDATE users SET feedback='{data['feedback']}' WHERE id='{data['id']}'"
        self.cur.execute(q)
        if self.cur.rowcount>0:
            return make_response({"success":True,"message":"Feedback Uploaded successfully"},201)
        else:
            return make_response({"success":False,"message":"Feedback upload failed"},204)

    def user_profileupdate_model(self, data):
        print("\n",data,"\n")
        # return make_response({"success":True,"res":"Profile updated"})
        if not data:
            print("No updates provided.")
            return
        # query = "UPDATE users SET "
        
        # for key, value in data.items():
        #     query += f"{key} = '{value}', "
        # query = query.rstrip(', ') + f" where id = {id}"
            
        query = f"UPDATE users SET name='{data['name']}', email='{data['email']}', password='{data['password']}' WHERE id={data['id']}"

        # q = f"INSERT INTO users(name,email,password) VALUES('{data['name']}','{data['email']}','{data['password']}')"
        self.cur.execute(query)
        
            # self.cur.execute(f"UPDATE users SET name = '{data['name']}' where id = {id}")
            # print("\nuploaded\n")
        
        if self.cur.rowcount>0:
            return make_response({"success":True,"res":"Profile updated"},200)
        else:
            return make_response({"message":"Nothing to update"},204)      

# josndfs