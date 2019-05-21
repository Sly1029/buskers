import pyrebase
import os

config = {
  "apiKey": "AIzaSyDLcrBLgAbWb3d_KE-DInA4IoL8svlsyvU",
  "authDomain": "buskers-demo-vivek.firebaseapp.com",
  "databaseURL": "https://busker-5561a.firebaseio.com",
  "storageBucket": "busker-5561a.appspot.com"
}

firebase = pyrebase.initialize_app(config)


storage = firebase.storage()
db = firebase.database()
directory = os.fsencode('/home/tihor29/Documents/buskers/busker_login/src/components/Home/busking')

for file in os.listdir(directory):
     filename = os.fsdecode(file)
     if filename.endswith(".jpg"):
         print(storage.child('images/'+filename).get_url(None))
         print('Uploading '+str(filename))
         storage.child('images/'+str(filename)).put(str(directory)[2:len(str(directory))-1]+'/'+str(filename))
         db.child("images").push(storage.child('images/'+str(filename)).get_url(None));
             # print(os.path.join(directory, filename))
     else:
         continue
