

import mysql.connector 
dbConfig = {
    'user': 'root',         # your user name
    'password': 'Nam0917638658',     # your password
    'host': '127.0.0.1',
    }


GUIDB = 'LeaderBoard' 
 
# unpack dictionary credentials  
conn = mysql.connector.connect(**dbConfig) 
 
cursor = conn.cursor() 
 
try: 
    cursor.execute("CREATE DATABASE {} \
                    DEFAULT CHARACTER SET 'utf8'".format(GUIDB))     
except mysql.connector.Error as err:                                          
    print("Failed to create DB: {}".format(err)) 
 
conn.close() 