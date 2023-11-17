const express = require('express');


const app = express();


const { getResult } = require("./getJobs.js");

const PORT = 5000;



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
