const MongoClient=require('mongodb').MongoClient;
const MONGO_URL = "mongodb://localhost:27017";

async function write(user_email,user_password){

    const client= await MongoClient.connect(MONGO_URL);
    const memories_db=client.db('memories');
    const users=memories_db.collection('users')

    const result=await users.insertOne({
        email:user_email,
        password:user_password
    }) 
   

}

module.exports={write};
