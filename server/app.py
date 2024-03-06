#!/usr/bin/env python3

from flask import make_response,jsonify,request,session
from flask_restful import Resource
from flask_cors import CORS
from config import db,api,migrate,app
from models.comment import Comment
from models.project import Project
from models.task import Task
from models.user import User


CORS(app)


if __name__ == '__main__':
    app.run(port=5555)