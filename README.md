# 361-Project

The following is a microservice implementation for my partner's 361 project. It is an API that is run locally. The code written in getJobs.js calls 2 github API sources that contain company names that are hiring for new grad roles and intern roles. When the API is called it returns a JS object of the company name and its logo. 

In order to request data, a user should install node-fetch to gather the entire list of companys and logos. Also, prior to running the index.js file, please make sure Node and Express are installed. The code below is one example of how to request the data in JS:
```
import fetch from 'node-fetch';
let responseData;

// Make a GET request
fetch('http://localhost:5000')
  .then(response => {
    // Check if the request was successful (status code 2xx)
    if (!response.ok) {
      throw new Error(`Request failed with status: ${response.status}`);
    }
    // save the response from the api into responseData
    responseData = response;

  })
  // code to handle any errors
  .catch(error => {
    console.error('Error requesting data:', error.message);
  });
```


  In order to receieve the data, ensure that you initialize a variable to the above GET request so the returned result can be accessed or stored. In the example above, the variable
  responseData is set as undefined so that it can get the data when the API is called. 

  The following UML Diagram displays the request and receiving data works with the API:

![UMLdiagram](https://github.com/kyak15/361-Project/assets/112513039/64df710a-c7e9-436d-afba-dff989f65554)



