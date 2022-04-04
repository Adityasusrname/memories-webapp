const MongoClient=require('mongodb').MongoClient;
const MONGO_URL = "mongodb://localhost:27017";

async function userData_write(name,email,password,bio,image){

    const client= await MongoClient.connect(MONGO_URL);
    const memories_db=client.db('memories');
    const userData=memories_db.collection('userData')

    const result=await userData.insertOne({
        name:name,
        email:email,
        password:password,
        bio:bio,
        followers:[],
        following:[],
        image:image
    }) 
   

}

module.exports={userData_write};
