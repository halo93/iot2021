from pymongo import MongoClient
from bson.objectid import ObjectId
import datetime
import time

import pymongo
from pymongo.read_preferences import SecondaryPreferred

global month, Grade, n, t, l, h, score, col_grd, nd, ld , td, hd
score = 0

Noise = {'Noise':{'RoomID':{}}}
Temp = {'Temp':{'RoomID':{}}}
Light = {'Light':{'RoomID':{}}}
Humidity = {'Humidity':{'RoomID':{}}}
grade = []
rmid =[]


def grderooms():
    global month, Grade, n, t, l, h, score, col_grd, count,  nd, ld , td, hd
    if (n["roomID"] ==t["roomID"]) & (n["roomID"] == l["roomID"]) & (n["roomID"] ==h["roomID"]):
            if n['value']>40:
                score = 0
                print('nil')
            elif n['value']<=40:
                score+=1
                print(score)
            if (month ==11) or (month==12) or (month==1) or (month==2) or (month==3):
                if 20<=t['value']<=24:
                    score+=1
                    print(score)
                else:
                    score=score
                    print('nil')
            elif (month)==4 or (month==5) or (month==6) or (month==7) or (month==8) or (month==9) or (month==10):
                if 24<=t['value']<=27:
                    score+=1
                    print(score)
                else:
                    score=score 
                    print('nil')
            if 300<=float(l['value'])<=500:
                score+=1
                print(score)
            else:
                score= score
                print('nil')
            if 30<=h['value']<=60:
                score+=1
                print(score)
            else:
                score=score
                print('nil')

            if score == 4:
                Grade= 'A'
            elif score == 3:
                Grade= 'B'
            elif score == 2:
                Grade= 'C'
            elif score == 1:
                Grade= 'D'
            elif score == 0:
                Grade= 'F'
            grade.append(Grade)
            print(score,Grade)
        
    rec ={"RoomID": n['roomID'],"Grade": Grade,"NoiseID": nd, "LightID": ld, "TemperatureID": td, "HumidityID": hd, "createdDate": int(time.time())}
    col_grd.insert_one(rec)
    print(rec)
    count+=1
    print("done")

def main():
    global month, Grade, n, t, l, h, score, col_grd, count,  nd, ld , td, hd
# Database Name
    client = MongoClient("mongodb+srv://admin:admin@cluster0.czzba.mongodb.net/test", ssl=True, ssl_cert_reqs='CERT_NONE')   
    db = client["iot_2021"]
 
# Collection Name
    col_noise = db["noise"]
    col_temp = db["temperature"]
    col_light = db["light"]
    col_humidity = db["humidity"]
    col_grd = db["room-grade"]
    col_rm = db['rooms']

    count=0
    c = True
    while(c):
        rm = col_rm.find({},{'_id': 1})
        for x in rm:
            str_room_id = str(x['_id'])
            #print(x['_id'],str_room_id)
            n = col_noise.find_one({'roomID': str_room_id}, sort=[('createdDate', pymongo.DESCENDING)])
            nd = str(n['_id'])
            t = col_temp.find_one({'roomID': str_room_id}, sort=[('createdDate', pymongo.DESCENDING)])
            ut = int(t["createdDate"])
            td = str(t['_id'])
            tmet=datetime.datetime.fromtimestamp(ut).strftime('%Y-%m-%d %H:%M:%S')
            month=tmet[5:7]
            month =int(month)
            l = col_light.find_one({'roomID': str_room_id}, sort=[('createdDate', pymongo.DESCENDING)])
            ld = str(l['_id'])
            h = col_humidity.find_one({'roomID': str_room_id}, sort=[('createdDate', pymongo.DESCENDING)])
            hd = str(h['_id'])
            grd = col_grd.find_one({'RoomID': str_room_id}, sort=[('createdDate', pymongo.DESCENDING)])

            

            isempty = len(list(col_grd.find({},{'RoomID': 1}).distinct("RoomID")))
            if isempty > 0:
                print("k")
                
                if grd != None and (grd["NoiseID"] == nd) & (grd["TemperatureID"] ==td) & (grd["LightID"] == ld) & (grd["HumidityID"] == hd):
                    #if (grd["NoiseID"] == nd) & (grd["TemperatureID"] ==td) & (grd["LightID"] == ld) & (grd["HumidityID"] == hd):
                    time.sleep(300)
                    continue
                else:
                    grderooms()               
            else:
                grderooms()
        time.sleep(300)
    
if __name__ == "__main__":
    main()