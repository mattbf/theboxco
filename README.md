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
  "role": "Business",
  "boxCollections": [{}],
  "authBoxes": ["b12345678"],
}
```
