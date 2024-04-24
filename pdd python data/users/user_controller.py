from app import app
from flask import request
from users.user_model import user_model
users = user_model()

from Plants.Test import predict_image




@app.route('/users/adduser', methods=['POST'])
def adduser():
    return users.addUser(request.form)

@app.route('/users/getuser', methods=['GET'])
def getuser():
    return users.getUser()

@app.route("/users/updateuser/<id>",methods=["PUT"]) 
def updateuser(id):
    # print(request.form)
    return users.updateUser(id,request.form)

@app.route("/users/deleteuser/<id>",methods=["DELETE"]) 
def deleteuser(id):
    # print(request.form)
    return users.deleteUser(id)

@app.route("/user/signup",methods=["POST"])
def user_signup_controller():
    return users.user_signup_model(request.json)

@app.route("/user/login",methods=["POST"])
def user_login_controller():
    return users.user_login_model(request.json)

@app.route("/user/feedback",methods=["POST"])
def user_feedback_controller():
    return users.user_feedback_model(request.json)


@app.route("/user/profileupdate",methods=["POST"])
def user_profileupdate_controller():
    return users.user_profileupdate_model(request.json)


@app.route('/predict', methods=['POST'])
def detect_disease():
    return predict_image(request.files['file'])