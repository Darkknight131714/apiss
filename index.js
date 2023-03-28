const express=require('express');
const db=require('./config');
const cors = require('cors');
const firebase=require('firebase/app');
const {getFirestore,collection,getDocs} =require('firebase/firestore/lite');
const {query, orderBy,where} = require('firebase/firestore');
const app=express();
app.use(express.json());
app.use(cors({origin:'*'}));
const PORT=process.env.PORT ||3000;
app.get('/',async (req,res)=>{
        const usersCollection=collection(db,"imageurl");
        const q=query(collection(db,"imageurl"));
        const usersSnapshot=await getDocs(q);
        const usersList=usersSnapshot.docs.map(doc=>doc.data());
        res.send(usersList);
    
});

app.listen(PORT);
console.log(`Server started on port ${PORT}`);