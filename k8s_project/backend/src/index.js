import mongoose from 'mongoose';
import express from 'express';
import pkg from 'body-parser';
const { json } = pkg;
import { Secret } from './secret_message_model.js';
import { client } from './redis.js';



const start = async () => { 
    try {
        await mongoose.connect('mongodb://secret:27017/secret');
        console.log('Connected to MongoDb');
        await client.connect();
        const idk = 'imie';
        const lol = "michal"
        console.log("Connected to Redis")

      } catch (err) {
        console.error(err);
    }


    const app = express();
    app.set('trust proxy', true);
    app.use(json());
    
    app.post('/secret_timeout', async (req, res) => {
        const { key, message, timeout } = req.body;
        console.log(key, message, timeout);
        await client.set( key ,  message );
        await client.expire( key ,  timeout );
        res.status(200)
    });
    
    app.post('/secret_timeout/get', async (req, res) => { 
        const { key } = req.body;
        console.log(key);
        const response = await client.get(key);
        res.status(200).send(response);
    });
    
    app.post('/secret/get', async (req, res) => { 
        const { key } = req.body;
        const secret = await Secret.findOne({ key });
        res.status(200).send(secret);
    })
    
    app.post('/secret', async (req, res) => { 
        const { key, message } = req.body;
        const secret = new Secret({ key: key, message: message });
        await secret.save();
        res.status(201)
    })


    app.listen(3000, () => { 
        console.log('Listening on port 3000');
    })
};

start();
