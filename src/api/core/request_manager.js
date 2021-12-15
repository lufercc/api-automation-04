const axios = require('axios');

class RequestManager{

    static async sendRequest(method, url_path, header, body){
        console.log('##########New Request######');
        console.log(`REQUEST: ${method} `);
        console.log(`URL: ${url_path} `);
        console.log(`HEADER: ${header} `);
        console.log(`BODY: ${body} `);

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

    static async sendRequestV2(requestEntity){
        let response = undefined;
        try{
            response = await axios.request(requestEntity);
            console.log(response);
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