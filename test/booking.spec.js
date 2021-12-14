const requestManager = require('../src/api/core/request_manager')

describe('Booking tests',  () =>{

    test('Verify succesful POST a booking', async ()=>{

        //Create
        let body = {
            "firstname" : "Dan",
            "lastname" : "Brown",
            "totalprice" : 111,
            "depositpaid" : "vv",
            "bookingdates" : {
                "checkin" : "05/01/2020",
                "checkout" : "2019-01-01"
            },
            "additionalneeds" : "Breakfast"
        };

        let jsonHeader = {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        };

        let options = {
            method: 'POST',
            headers: jsonHeader,
            url:'https://restful-booker.herokuapp.com/booking',
            data: JSON.stringify(body)
        };

        // Send Request
        let response = await requestManager.sendRequest(options.method, options.url, options.headers, options.data);

        //Verify Status Code and data
        expect(response.status).toEqual(200);
        let dataResponse = response.data.booking;
        expect(dataResponse.firstname).toEqual(body.firstname);
        expect(dataResponse.lastname).toEqual(body.lastname);
        //.... Complete please!!!!


        //Verify GET
        let id = response.data.bookingid;
        let optionsGet = {
            method: 'GET',
            headers: {'Accept': 'application/json'},
            url:'https://restful-booker.herokuapp.com/booking/'+ id,
        };

        response = await requestManager.sendRequest(optionsGet.method, optionsGet.url, optionsGet.headers);
        expect(response.status).toEqual(200);
        expect(response.data.firstname).toEqual(body.firstname);
    })

    test('Verify succesful PUT a booking', async ()=>{

        // Create a booking
        let body = {
            "firstname" : "Esacarleth",
            "lastname" : "Brown",
            "totalprice" : 222,
            "depositpaid" : "vv",
            "bookingdates" : {
                "checkin" : "05/01/2020",
                "checkout" : "2019-01-01"
            },
            "additionalneeds" : "Breakfast"
        };

        let jsonHeader = {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        };

        let options = {
            method: 'POST',
            headers: jsonHeader,
            url:'https://restful-booker.herokuapp.com/booking',
            data: JSON.stringify(body)
        };

        let postResponse = await requestManager.sendRequest(options.method, options.url, options.headers, options.data);
        let id = postResponse.data.bookingid;

        // Create Token
        let bodyToken = {
            "username" : "admin",
            "password" : "password123"
        };

        let jsonHeaderToken = {
            'Content-Type': 'application/json'
        };

        let optionsToken = {
            method: 'POST',
            headers: jsonHeaderToken,
            url:'https://restful-booker.herokuapp.com/auth',
            data: JSON.stringify(bodyToken)
        };
        let tokenResponse = await requestManager.sendRequest(optionsToken.method, optionsToken.url, optionsToken.headers, optionsToken.data);
        let token = tokenResponse.data.token;

        //PUT booking
        let bodyPUT = {
            "firstname" : "Escar5555",
            "lastname" : "Brown",
            "totalprice" : 333,
            "depositpaid" : "vv",
            "bookingdates" : {
                "checkin" : "2020-05-01",
                "checkout" : "2029-01-01"
            },
            "additionalneeds" : "Breakfast"
        };
        let jsonHeaderPUT = {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Cookie': 'token=' + token
        };

        let optionsPUT = {
            method: 'PUT',
            headers: jsonHeaderPUT,
            url:'https://restful-booker.herokuapp.com/booking/' + id,
            data: JSON.stringify(bodyPUT)
        };
        
        let putResponse = await requestManager.sendRequest(optionsPUT.method, optionsPUT.url, optionsPUT.headers, optionsPUT.data);
        
        expect(putResponse.status).toEqual(200); 
        expect(putResponse.data.firstname).toEqual(bodyPUT.firstname);
        expect(putResponse.data.bookingdates.checkin).toEqual(bodyPUT.bookingdates.checkin);
        //...

    })

    //DELETE

    //GET

    //PATCH

})