from flask import Flask, render_template, redirect, url_for, request

import mysql.connector
from werkzeug.security import generate_password_hash, check_password_hash

app = Flask(__name__)

sql = mysql.connector.connect(
    host="localhost",
    user="root",
    passwd="121377Rr.",
    database="HACKOUT"
)

cursor = sql.cursor()


@app.route('/')
@app.route('/hackout', methods=['GET'])
def index():
    return render_template('index.html')


if '__main__' == __name__:
    app.run(debug=True)
