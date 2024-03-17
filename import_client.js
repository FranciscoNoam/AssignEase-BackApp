const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');


const uri = "mongodb+srv://appel-sms:develop@cluster0.yrkdbzg.mongodb.net/?retryWrites=true&w=majority";


const dbName = "appel-sms";
const collectionName = "tp_mopolo_client";


const dataFilePath = "/Users/francisco/Documents/Noam-Dev/Bossy-M2-MBDS-ITUniversity/Big_Data_Mopollo/TP/OneDrive_1_12-03-2024/3JsonData/0_4Json_collection_import_Clients_Airbase.json";

MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {
    assert.equal(null, err);
    console.log("Connected successfully to server");

    const db = client.db(dbName);
    const collection = db.collection(collectionName);

   
    fs = require('fs'); // Import the 'fs' module for file system access
    fs.readFile(dataFilePath, (err, data) => {
        if (err) throw err;

       
        const jsonData = JSON.parse(data);

        // Insert the data into the collection
        collection.insertMany(jsonData, (err, result) => {
            assert.equal(null, err);
            console.log("Data imported successfully:", result);
            client.close();
        });
    });
});