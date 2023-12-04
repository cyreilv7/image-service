const fetch = require('node-fetch');

const newGradAPI = 'https://raw.githubusercontent.com/SimplifyJobs/New-Grad-Positions/dev/.github/scripts/listings.json';
const internAPI = 'https://raw.githubusercontent.com/SimplifyJobs/Summer2024-Internships/dev/.github/scripts/listings.json';
const presHuntAPI = 'https://prestigehunt.com/.netlify/functions/api/companies';
const logoLinkURL = 'https://logo.clearbit.com/openai.com/';

let companyNames = new Set();

// Leave out Prestigehunt API call due to 401 Authenication error
    // return the same format of JSON Data just with the logo name {logoLink:}

const fetchCompanyNames = async(apiEndPoint) =>{
    const response = await fetch(apiEndPoint);
    const data = await response.json();
    data.forEach(job =>{
        companyNames.add(job.company_name);
    })
}

function createData() {
    const jsonResponse = {};
    companyNames.forEach(job => {
        jsonResponse[job] = {
            companyLogo : logoLinkURL+job.replace(/\s+/g, '')+'.com'
        }
    });
    console.log(jsonResponse)
    return jsonResponse;
}


const apiCalls = async() =>{
    await fetchCompanyNames(newGradAPI);
    await fetchCompanyNames(internAPI);
    fin = createData();
    return fin;
}




// exports the company name set once the api calls are finalized 
const getResult = async () => {
    try{
        const result = await apiCalls();
        return result;
    }
    catch(error) {
        console.error('error:', error);
    }
}

module.exports = { getResult };
