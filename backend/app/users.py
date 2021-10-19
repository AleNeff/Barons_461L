from pymongo import MongoClient
import json
from bson import json_util

# Current user model: ID, username, password, role
#TODO: add error handling for bad connections etc.

client = MongoClient(
    'mongodb+srv://aneff:barons@cluster0.yrjds.mongodb.net/appDB?retryWrites=true&w=majority')
db = client.appDB
users = db.users

class User():
    ID: str
    username: str
    password: str
    role: int

def post_user(ID=0, username="", password="", role=0):
    user = {"ID": ID,
            "username": username,
            "password": password,
            "role": role}
    users.insert_one(user)
    return


def get_user_by_username(username):
    user = users.find_one({"username": username})
    user_json = json.dumps(user, indent=4, default=json_util.default)
    return user_json


def change_role(username, new_role):
    filter = {'username': username}
    new_role = {"$set": {'role': new_role}}
    user = users.update_one(filter, new_role)
    return

def test_functions():
  post_user(3, "test", "barons", 0)
  user_json = get_user_by_username("test")
  print(user_json)
  change_role("test", 100)
  user_json = get_user_by_username("test")
  print(user_json)