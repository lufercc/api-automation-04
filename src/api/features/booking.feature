@Booking
Feature: Booking tests

@GET
Scenario: Get All Bookings

Given I set a "GET" request to "/booking" route
When I send a GET request
Then I expect the status code is equal than "200"

@POST
Scenario: POST Booking

Given I set a "POST" request to "/booking" route
And I set the following header:
    | Content-Type |application/json|
    | Accept       |application/json|

And I set a body request
    """
    {
      "firstname" : "Dan",
      "lastname" : "Brown",
      "totalprice" : 111,
      "depositpaid" : "vv",
      "bookingdates" : {
          "checkin" : "05/01/2020",
          "checkout" : "2019-01-01"
        },
      "additionalneeds" : "Breakfast"
    }
    """

When I send a POST request
Then I expect the status code is equal than "200"

