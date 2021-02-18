const MongoClient = require('mongodb').MongoClient
const express = require('express')

const app = express()
const url = 'mongodb+srv://superadmin:kaew33448@cluster0.8sjt0.mongodb.net/sample_weatherdata?retryWrites=true&w=majority'
const client = new MongoClient(url, {useNewUrlParser: true, useUnifiedTopology: true})

async function connect(){
    await client.connect()
}
connect()

app.get('/weather',async (req,res) => {
    try {
        const callLetters = req.query.callLetters
        const db = client.db('sample_weatherdata')
        const collection = db.collection('data')

      
        const cursor = collection.find(query).limit(10)
        let data = []
        await cursor.forEach(doc => data.push(doc.position),data.push(doc.callLetters),data.push(doc.airTemperature),data.push(doc.ts)) 
        res.send(data)
    } catch(e) {
        console.error(e) 
    }
})
app.listen(3000, console.log('Start application at port 3000'))
