const express = require('express');


const app = express();


const { getResult } = require("./getJobs.js");

const PORT = 8000;

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); // Adjust in production
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
    );
    next();
  });  

app.get('/', async(req, res) =>{
    try{
        const result = await getResult();
        res.setHeader('Content-Type', 'application/json');
        res.send(result);
      
    }
    catch(error){
        console.error('error:', error);
    }
});




app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});
