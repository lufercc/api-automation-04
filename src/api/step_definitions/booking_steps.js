const { Given, When, Then } = require('@cucumber/cucumber');
const chai = require('chai');  
const assert = chai.assert; 
const RequestEntity = require('../core/request_entity');
const RequestManager = require('../core/request_manager');

let request = new RequestEntity();
let url = '';
let response = undefined;


Given(/^I set a "([^"]*)" request to "([^"]*)" route$/, async function (method, endpoint) {
    
    url = 'https://restful-booker.herokuapp.com' + endpoint;
    request.setURL(url);
    request.setMethod(method);

    console.log(request.URL);
});

When(/^I send a GET request$/, async function () {
    response = await RequestManager.sendRequest(request.method, request.URL);
    request = new RequestEntity();

});

Then(/^I expect the status code is equal than "([^"]*)"$/, async function (expectedStatus) {
    assert.equal(expectedStatus, response.status,'The status code should be' + expectedStatus);
});


Given('I set the following header:', function (dataTable) {
    const tableHeader = dataTable.rowsHash();
    request.setHeader(tableHeader);
  });


Given('I set a body request', function (body) {
    request.setBody(body);
  });
  

When(/^I send a POST request$/, async function () {
    response = await RequestManager.sendRequest(request.method, request.URL, request.header, request.body);
    request = new RequestEntity();
});
