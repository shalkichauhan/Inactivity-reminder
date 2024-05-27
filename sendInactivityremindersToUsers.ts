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
        //const user_object = await db.collection('user_details').find({_id: new ObjectId(obj)})
        // find object with roles = developer
        //loop through those objects to access the names and pushing the names to empty array

        // by filtering the roles = delevoper
       // const user_object_2 = await db.collection('user_details').find({_id: new ObjectId('6621bb642ef883adf0a6296d')}).toArray()
        const user_object_roles_developer = await db.collection('user_details').find({roles:'developer'}).toArray()

        //console.log(user_object_roles_developer)

        let arr_name:string[] = [];

        for( let i of user_object_roles_developer){


            const firstName = i.properties.profile.name.first;
            const lastName = i.properties.profile.name.last;

            if(!(lastName === '')) {

                console.log(" The first name is :", firstName)
                console.log(" \n The last name is :", lastName)

            }

            //arr_name.push(  i.properties.profile.name.first)
        }

        console.log(arr_name)
        //console.log(user_object_2[0].properties.profile.name.first)
       //  let arr = [];
       // //
       // for(let i =0;i<user_object_2.length;i++) {
       //     arr.push(user_object_2[i].roles[1])
       //
       // }

       // console.log(arr)

    }catch(error){

        console.log(error)

    }

}
getUserDetails()

//

//role = developer, name[],
    // map
//

