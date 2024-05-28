const mongodb= require('mongodb');
const MongoClient = mongodb.MongoClient;

const url = 'mongodb://localhost:27017/';

const database = 'user';

async function GetDetail() {


    try {

        const client = await MongoClient.connect(url);

        console.log(" connection is established")

        const db = await client.db(database)

     const data=  await db.collection('user_details').find( {$or: [{roles:'developer'}, {roles:'user'}]}).toArray()

        console.log(" reched here", data)
        let nameArray:string[] = []


        for(let item of data){
            if(!(item.roles.includes('company admin'))){

                console.log(item.properties.profile.name.first)



            }
        }

// getting all the objects,


    }catch(error){


        console.log(error)
    }

}
console.log(GetDetail())