load("/Users/francisco/Documents/Noam-Dev/Bossy-M2-MBDS-ITUniversity/Big_Data_Mopollo/TP/OneDrive_1_12-03-2024/3JsonData/0_4Json_collection_import_Clients_Airbase.json");

// mongoimport --db airbase --collection clients --jsonArray --file /Users/francisco/Documents/Noam-Dev/Bossy-M2-MBDS-ITUniversity/Big_Data_Mopollo/TP/OneDrive_1_12-03-2024/3JsonData/0_4Json_collection_import_Clients_Airbase.json

// Lancer mongoimport ATLAS

mongoimport--uri "mongodb+srv://appel-sms:develop@cluster0.yrkdbzg.mongodb.net/?retryWrites=true&w=majority" --collection tp_clients--jsonArray--file / Users / francisco / Documents / Noam - Dev / Bossy - M2 - MBDS - ITUniversity / Big_Data_Mopollo / TP / OneDrive_1_12-03 - 2024 / 3JsonData /0_4Json_collection_import_Clients_Airbase.json

mongoimport--uri "mongodb+srv://appel-sms:develop@cluster0.yrkdbzg.mongodb.net/?retryWrites=true&w=majority" --collection tp_vols--jsonArray--file / Users / francisco / Documents / Noam - Dev / Bossy - M2 - MBDS - ITUniversity / Big_Data_Mopollo / TP / OneDrive_1_12-03 - 2024 / 3JsonData /0_5Json_collection_import_Vols_Airbase.json

mongoimport --db airbase --collection clientss --jsonArray --file / Users / francisco / Documents / Noam - Dev / Bossy - M2 - MBDS - ITUniversity / Big_Data_Mopollo / TP / OneDrive_1_12-03 - 2024 / 3JsonData /0_4Json_collection_import_Clients_Airbase.json

// Lancer mongoimport MONGO LOCAL dans docker

docker -it 8c44d14d2cd1 mongoimport --dv airbase --collection clients --jsonArray --file /Users/francisco/Documents/Noam-Dev/Bossy-M2-MBDS-ITUniversity/Big_Data_Mopollo/TP/OneDrive_1_12-03-2024/3JsonData/0_4Json_collection_import_Clients_Airbase.json


mongoimport --db airbase --collection clients --jsonArray --file /Users/francisco/Documents/Noam-Dev/Bossy-M2-MBDS-ITUniversity/Big_Data_Mopollo/TP/OneDrive_1_12-03-2024/3JsonData/0_4Json_collection_import_Clients_Airbase.json

mongoimport --host "mongodb://172.17.0.2:27017/airbase" --collection clients --jsonArray --file /Users/francisco/Documents/Noam-Dev/Bossy-M2-MBDS-ITUniversity/Big_Data_Mopollo/TP/OneDrive_1_12-03-2024/3JsonData/0_4Json_collection_import_Clients_Airbase.json

docker exec -it mongo mongoimport --db airbase --collection clients --jsonArray --file /Users/francisco/Documents/Noam-Dev/Bossy-M2-MBDS-ITUniversity/Big_Data_Mopollo/TP/OneDrive_1_12-03-2024/3JsonData/0_4Json_collection_import_Clients_Airbase.json

docker cp /Users/francisco/Documents/Noam-Dev/Bossy-M2-MBDS-ITUniversity/Big_Data_Mopollo/TP/OneDrive_1_12-03-2024/3JsonData/0_5Json_collection_import_Vols_Airbase.json  8c44d14d2cd1:/data/vols_import.json  

db.clients.aggregate(
    [
        { $match: { "_id": 11 } },
        {
            $lookup:
            {
                from: "vols",
                localField: "_id",
                foreignField: "appreciations.idClient",
                as: "volsQuiMatchent"
            }
        }

    ]

);

db.createCollection("clients0", {
    validator: {
       $jsonSchema: {
          bsonType: "object",
          additionalProperties: false,
          required: [ "nom"],
          properties: {
             nom: {
                bsonType: "string",
                description: "must be a string and is required"
             }
         }
         }
     }
 }
 );

 /Users/francisco/Documents/Noam-Dev/Bossy-M2-MBDS-ITUniversity/Big_Data_Mopollo/TP/TPMongoAutre/M45TPMongoJava 
