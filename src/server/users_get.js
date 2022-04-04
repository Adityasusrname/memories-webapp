const MongoClient=require('mongodb').MongoClient;
const MONGO_URL = "mongodb://localhost:27017";

async function find_users(user_name){

    const client= await MongoClient.connect(MONGO_URL);
    const memories_db=client.db('memories');
    const users=memories_db.collection('userData')

    const result=await users.find({
        name:user_name
    }) 
   return result.toArray();

}

module.exports={find_users};
