const {ObjectId} = require("mongodb");



const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;
const url = 'mongodb://localhost:27017/';
const databseName = "user";

async function getUserDetails(){

    try{

        const client = await MongoClient.connect(url);

        const db = client.db(databseName)

        //const findData = await db.collection('user_details').find({email: "developer+1@securecodewarrior.com"})
        const user_object = await db.collection('user_details').find({_id: new ObjectId('5533160121ae4b0be21df2a4')})

        console.log(await user_object.toArray())


      //  console.log(await findData.toArray())



    }catch(error){

    }

}
getUserDetails()