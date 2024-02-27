const express = require('express');

const { ServerConfig,Logger } = require('./config') // if we have an index.js file then no need to write ./config/index.js
const apiRoutes = require('./routes');
const app = express();

app.use('/api' , apiRoutes);

app.listen(ServerConfig.PORT, () => {
    console.log(`Successfully started the server on PORT: ${ServerConfig.PORT}`);
    Logger.info("Succesfully stared the server",{}); 
});