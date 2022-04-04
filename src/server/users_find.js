const MongoClient=require('mongodb').MongoClient;
const MONGO_URL = "mongodb://localhost:27017";

async function find(user_email){

    const client= await MongoClient.connect(MONGO_URL);
    const memories_db=client.db('memories');
    const users=memories_db.collection('users')

    const result=await users.findOne({
        email:user_email
    }) 
   return result;

}

module.exports={find};
