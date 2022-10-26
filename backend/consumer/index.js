const express = require('express');
const cors = require("cors");
const { Kafka } = require('kafkajs')

const kafka = new Kafka({
    clientId: 'my-app',
    brokers: ['kafka:9092']
})

const consumer = kafka.consumer({groupId: 'newGroup'})

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) =>{
    res.send("<h1>Estamos Vivos!!!!!</h1>");
})

app.get("", (req, res) => {
    const run = async () =>{
        await consumer.conect()
        await consumer.subscribe({})
    }
})