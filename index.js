const express=require('express');
const db=require('./config');
const firebase=require('firebase/app');
const {getFirestore,collection,getDocs} =require('firebase/firestore/lite');
const {query, orderBy,where} = require('firebase/firestore');
const app=express();
app.use(express.json());


app.get('/',async (req,res)=>{
        const usersCollection=collection(db,"imageurl");
        const q=query(collection(db,"imageurl"));
        const usersSnapshot=await getDocs(q);
        const usersList=usersSnapshot.docs.map(doc=>doc.data());
        res.send(usersList);
    
});

app.listen(3000);
console.log("Server started");