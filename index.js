const express = require('express');
const db = require('./config');
const cors = require('cors');
const firebase = require('firebase/app');
const { orderBy,collection, query, where, onSnapshot } = require('firebase/firestore');
const app = express();
app.use(express.json());
app.use(cors({ origin: '*' }));
const PORT = process.env.PORT || 3000;
const q = query(collection(db, "imageurl"),orderBy("count","desc"));
let postList=[];

const stream = onSnapshot(q, (snapshot) => {
  snapshot.docChanges().forEach((change) => {
    if (change.type === "added") {
        postList.unshift(change.doc.data());
    }
    if (change.type === "modified") {
        for(i=0;i<postList.length;i++){
                if(postList[i]['count']===change.doc.data()['count']){
                        postList[i]=change.doc.data();
                        break;
                }
        }
    }
    if (change.type === "removed") {
        for(i=0;i<postList.length;i++){
                if(postList[i]['count']===change.doc.data()['count']){
                        postList.splice(i,1);
                        break;
                }
        }
    }
  });
});
app.get('/', async (req, res) => {
        res.send(JSON.parse(JSON.stringify(postList)));

});

app.get('/change', async (req, res) => {
        
});
app.listen(PORT);
console.log(`Server started on port ${PORT}`);