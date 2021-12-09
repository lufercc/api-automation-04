const axios = require('axios');

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
        let response = undefined;
        try{
            response = await axios.request(options);
            
        }
        catch(error) {
            response = error.response;

        }
        console.log(response);

        //Verify Status Code
        expect(response.status).toEqual(200);
    })
})