const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
const url = 'mongodb://localhost:27017/';
const databseName = "user";

async function getUserDetails(){

    try{

        const client = await MongoClient.connect(url);

        const db = client.db(databseName)

        const findData = await db.collection('user_details').find({email: "developer+1@securecodewarrior.com"})


        console.log(await findData.toArray())



    }catch(error){

    }

}
getUserDetails()