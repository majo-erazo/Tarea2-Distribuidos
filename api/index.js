const express = require('express');
const { Kafka } = require('kafkajs');

const kafka = new Kafka({
    clientId: 'my-app2',
    brokers: ['kafka:9092']
})

const consumer = kafka.consumer({ groupId: 'test-group' })

const app = espress();