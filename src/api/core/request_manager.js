const axios = require('axios');

class RequestManager{

    static async sendRequest(method, url_path, header, body){
        console.log(`REQUEST: ${method} `);

        let response = undefined;
        let options = {
            method: method,
            headers: header,
            url: url_path
        };
        if(body !== undefined){
            options.data = body;
        }

        try{
            response = await axios.request(options);
            return this. returnResponse(response);          
        }
        catch(error) {
            response = error.response;
            return this. returnResponse(response); 
        }
    }

    static returnResponse(response){
        let res = {
            status: response.status,
            data: response.data
        };
        console.log(res);
        return res;
    }
}
module.exports = RequestManager;