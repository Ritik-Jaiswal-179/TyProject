import mysql.connector
import json
import jwt
import re
from config.config import dbconfig as db
from functools import wraps
from flask import make_response, request
class auth_model:
    def __init__(self):
        try:
            self.con = mysql.connector.connect(host=db["hostname"],user=db["username"],password=db["password"],database=db["database"])
            self.cur = self.con.cursor(dictionary=True)
            self.con.autocommit=True
            print("connected mysql")
        except:
            print("mysql connection error")
    
    def token_auth(self, endpoint=""):
        def inner1(func):
            @wraps(func)
            def inner2(*args):
                endpoint = request.url_rule
                print(endpoint,"//////////////////////")
                authorization = request.headers.get('Authorization')
                print(authorization,"////////////////////")
                if re.match("^Bearer *([^ ]+) *$", authorization,flags = 0):
                    token = authorization.split(" ")[1]

                    try:
                        decoded_jwt = jwt.decode(token, "Ritik", algorithms="HS256")
                    except jwt.ExpiredSignatureError: 
                        return make_response({"Error":"Token_expired"}, 200)
                    # print(decoded_jwt)


                    role_id = decoded_jwt["payload"]["role_id"]
                    # print(role_id)
                    self.cur.execute(f"SELECT roles FROM accessibility_view WHERE endpoint='{endpoint}'")
                    result = self.cur.fetchall()
                    print(result)
                    if len(result)>0:
                        allowed_roles = json.loads(result[0]['roles'])
                        if role_id in allowed_roles:
                            return func(*args)
                        else:
                            return make_response({"ERROR":"INVALID_ROLE"}, 404)
                        return func(*args)
                    else:
                        return make_response({"ERROR": "UNKOWN_ENDPOINT"}, 404)
                    return func(*args)
                else:
                    return make_response({"ERROR":"INVALID_TOKEN"}, 401)
            return inner2
        return inner1

