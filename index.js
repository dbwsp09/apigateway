import express from 'express';
import graphqlHTTP from 'express-graphql';
import rootSchema from './src/app';

const app = express();

// GraphQL endpoint:
app.use('/graphql', graphqlHTTP({
    schema: rootSchema,
    graphiql: true
}));

app.listen(4000);

console.log('Running GraphQL API Gateway at http://localhost:4000/graphql');
