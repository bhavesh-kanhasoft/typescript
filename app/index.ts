import 'reflect-metadata';
import { ApolloServer } from 'apollo-server-express';
import { ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core';
//import express from 'express';
import { buildSchema } from 'type-graphql';
import { UserResolver } from 'resolvers/index';
import { config } from 'config';
import { connection } from 'connection';
const cors = require('cors');
var path = require('path');
var express = require('express')

const startServer = async () => {
    connection();
    const schema = await buildSchema({
        resolvers: [UserResolver]
    })
    const app = express()
    app.use(cors());
    
    const apolloServer = new ApolloServer({
        schema,
        plugins: [ApolloServerPluginLandingPageGraphQLPlayground()]
    })
    await apolloServer.start();
    
    apolloServer.applyMiddleware({app});


    //const router = express.Router();
    console.log("__dirname ===>>> ", __dirname);
    //app.set('view engine', 'html');
    app.get('/page', function(req, res) {
        res.sendfile('./pages/index.html');
      });
   

    app.listen(config.port, () => {
        console.log(`server started on ${config.port}....`);
    })
}
startServer();