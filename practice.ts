const mongodb= require('mongodb');
const MongoClient = mongodb.MongoClient;

const url = 'mongodb://localhost:27017/';

const database = 'user';

async function GetDetail() {


    try {

        const client = await MongoClient.connect(url);

        console.log(" connection is established")

        const db = await client.db(database)

        const data2nd = await db.collection('user_details').find({'properties.profile.isComplete':true}).toArray()

        //console.log(data2nd)

      let arrayWithpropertiesinviterpropertiesprofilenamelast = [];

        for(let obj of data2nd){

          // if(data2nd.includes(obj.properties.inviter.properties.profile.name.last)){
          //
          //     arrayWithpropertiesinviterpropertiesprofilenamelast.push(obj.properties.inviter.properties.profile.name.last)
          // }

           if(obj.properties.inviter?.properties.profile.name.last==='standalone'){
               arrayWithpropertiesinviterpropertiesprofilenamelast.push(obj.properties.inviter.properties.profile.name.last)
            }

        }

        console.log(arrayWithpropertiesinviterpropertiesprofilenamelast)

     //const data=  await db.collection('user_details').find( {$or: [{roles:'developer'}, {roles:'user'}]}).toArray()


        // get the data for inviter's name whose profile is complete is true


        // console.log(" reched here", data)
        // let nameArray:string[] = []
        //
        //
        // for(let item of data){
        //     if(!(item.roles.includes('company admin'))){
        //
        //         console.log(item.properties.profile.name.first)


        //
        //     }
        // }

// getting all the objects,


    }catch(error){


        console.log(error)
    }

}
console.log(GetDetail())





//match whose login history is not empty
//using match syntax of Mongodb
//
//make another branch(express_endpoint) here and
// make API of express, get data / port data
//








// export type Name={
//     firstName : string
//     middleName: string
//     lastName: string
//     phone?: number
// }
//
// function getNames(){
//     const username:Name={
//         firstName: "Shalki",
//
//         lastName: "chauhan"
//     }
//
//     console.log("first name is :", username.firstName)
//     console.log("middle name is :", username?.middleName)
//     console.log("last name is :", username.lastName)
//
// }






