
import mysql.connector

mydb=mysql.connector.connect(
    host="localhost",
    user="root",
    password="Nam0917638658",
    database="LeaderBoard"
)

mycursor = mydb.cursor()
mycursor.execute("CREATE TABLE highscore(name VARCHAR(50),score INTEGER(10))")
