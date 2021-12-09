const axios = require('axios');
axios.defaults.baseURL = 'https://restful-booker.herokuapp.com';

axios.get('/booking')
.then(function(response) {
    console.log(response.data);
}).catch(function(error) {
    console.log(error);
});


axios.post('/auth',
 {username: 'admin',
password: 'password123'})
.then(function(response) {
    console.log(response.data);
    console.log(response.status);
}).catch(function(error) {
    console.log(error);
});


async function getBooking(){
try{
    const response = await axios.get('/booking');
    console.log(response.data);
}
catch(error) {
    console.log(error.response.status);
    }
};

getBooking();