//question, - establish mongodb connect to the database
//get the data for inviter's name whose profile is complete is true

import {MongoClient} from "mongodb";

const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient
const url = 'mongodb://localhost:27017/';
const databaseName = 'user';

    async function getUserData1() {
        try {
            const client = await MongoClient.connect(url)



            console.log(" checking if the connection is established ? ")
        }catch(error){

            console.log(error)

        }

    }


    getUserData1()