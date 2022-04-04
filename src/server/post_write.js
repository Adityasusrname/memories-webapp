const MongoClient=require('mongodb').MongoClient;
const MONGO_URL = "mongodb://localhost:27017";

async function Post_write(author,image,description){

    const client= await MongoClient.connect(MONGO_URL);
    const memories_db=client.db('memories');
    const userData=memories_db.collection('Posts')

    const result=await userData.insertOne({
       author:author,
       image:image,
       timestamp:Date.now(),
       description:description


    }) 
   

}

module.exports={Post_write};
