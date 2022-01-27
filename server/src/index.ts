import 'reflect-metadata';
import { UserResolver } from './resolvers/user';
import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import { buildSchema } from 'type-graphql';
import { createConnection } from 'typeorm';
import { ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core';

require('dotenv').config();

(async () => {
    await createConnection({
        type: 'postgres',
        url: process.env.DATABASE_URL,
        synchronize: true,
        // logging: true,
        entities: [__dirname + '/entities/*.js'],
    });

    const app = express();

    const apolloServer = new ApolloServer({
        schema: await buildSchema({ resolvers: [UserResolver] }),

        plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
    });

    await apolloServer.start();

    apolloServer.applyMiddleware({ app });

    app.listen(process.env.PORT, () => {
        console.log(
            `Server started on port ${process.env.PORT}. GraphQl server running at http://localhost:${process.env.PORT}${apolloServer.graphqlPath}`
        );
    });
})();
