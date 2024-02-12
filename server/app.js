const express = require('express');
const { createHandler } = require('graphql-http/lib/use/express');
const { schema } = require('./schema/schema');

const app = express();
app.all('/graphql', createHandler({ schema }));

app.listen(4000, () => {
  console.log('server running on port 4000');
});
