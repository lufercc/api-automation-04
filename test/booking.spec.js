const requestManager = require('../src/api/core/request_manager')

describe('Booking tests',  () =>{

    test('Verify succesful POST a booking', async ()=>{

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

        //Verify Status Code
        expect(response.status).toEqual(200);
        let dataResponse = response.data.booking;
        expect(dataResponse.firstname).toEqual(body.firstname);
        expect(dataResponse.lastname).toEqual(body.lastname);
        //.... Complete please!!!!


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

})