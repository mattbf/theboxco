# The Box Co.

We are attempting to design a more secure, re-usable, and data rich packaging solution to make life better for businesses, delivery parties, and recipients.

## Data Structure


### users

Users are split by permissions and have the following high-level properties:  
**role** // one of Business, Delivery, Recipient, or Demo  
**boxCollections** // for Delivery parties - a collection of boxes that they must delivery  
**authBox** // A list of boxes that this user currently has authorization access to  
**address** // A recipient address object  

eg. Business user

```json
{
  "id": 123456789,
  "firstName": "John",
  "lastName": "Smith",
  "email": "john@gmail.com",
  "phone": 1231231234,
  "role": "Business",
  "boxCollections": [{}],
  "authBoxes": ["b12345678"],
}
```

### Boxes

Boxes are individual units that carry their own authentication, info, and associated parties
**shippingInfo** // an object that stores reference to a recipient user as well as address and package data
**data** // a data object that stores package statuses and sensor data  
**authentication** // The current authentication method and authorized users  


eg. Box that is on route to a recipient

```json
{
  "id": "b123456789",
  "shippingInfo": {
    "pkgType": "Consumer Goods",
    "recipient": 123456789,
    "address": {
      "streetAddress": "123 Fir Street NW",
      "apt#": "12",
      "city": "Vancouver",
      "province": "British Columbia",
      "postalCode": "B2B1A1",
    },
  },
  "data": {
    "statuses": {
      "battery": 80.4,
      "locked": true,
      "delivered": false,
      "inUse": true,
      "readyForPickup": false,
      "supplyChain": 2,
      "chainMessage": "Passed customs. Out for delivery",
    },
    "sensors": {
      "currentGPS": [89.239230, 19.023832],
      "GPSHist": [
        {
          "GPS": [90.239230, 19.011897],
          "timestamp": 1573500164410,
        },
        {
          "GPS": [89.239230, 19.023832],
          "timestamp": 157367012343,
        },
        {
          "GPS": [90.239230, 19.011897],
          "timestamp": 1573500164410,
        },
      ],
      "accelerometer": 1234876,
      "accelHist": [
        {
          "accel": 1234567,
          "timestamp": 1573500164410,
          "isTamper": false,
        },
        {
          "accel": 1234567,
          "timestamp": 1573500164410,
          "isTamper": false,
        },
        {
          "accel": 1234567,
          "timestamp": 1573500164410,
          "isTamper": false,
        }
      ],
    }
  },
}
```
