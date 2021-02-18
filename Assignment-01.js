const MongoClient = require('mongodb').MongoClient
const express = require('express')

const app = express()
const url = 'mongodb+srv://superadmin:kaew33448@cluster0.8sjt0.mongodb.net/sample_weatherdata?retryWrites=true&w=majority'
const client = new MongoClient(url, {useNewUrlParser: true, useUnifiedTopology: true})

