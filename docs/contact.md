# Contact API Spec

## Create Contact
Endpoint : POST/api/contacts

Request Header :
X-API-TOKEN : token

Request Body :

````json
{
  "fist_name" : "inal",
  "last_name" : "mahpud",
  "email" : "inal@mail.com",
  "phone" : "08999999"
} ```

Response Body (Success)
``` json
{
  "data" : {
  "id" : 1,
  "fist_name" : "inal",
  "last_name" : "mahpud",
  "email" : "inal@mail.com",
  "phone" : "08999999"

  }
} ```
Response Body (failed)

``` json
{
  "errors" : "fist_name must not blank, ..."
} ```
## Get Contact
Endpoint : GET/api/contacts/:id

Request Header :
X-API-TOKEN : token

Response Body (Success)
``` json
{
  "data" : {
  "id" : 1,
  "fist_name" : "inal",
  "last_name" : "mahpud",
  "email" : "inal@mail.com",
  "phone" : "08999999"

  }
} ```
Response Body (failed)

``` json
{
  "errors" : "Contact is not found, ..."
} ```

## Update Contact
Endpoint : PUT/api/contacts/:id

Request Header :
X-API-TOKEN : token

Request Body :

````json
{
  "fist_name" : "inal",
  "last_name" : "mahpud",
  "email" : "inal@mail.com",
  "phone" : "08999999"
} ```

Response Body (Success)
``` json
{
  "data" : {
  "id" : 1,
  "fist_name" : "inal",
  "last_name" : "mahpud",
  "email" : "inal@mail.com",
  "phone" : "08999999"

  }
} ```
Response Body (failed)

``` json
{
  "errors" : "fist_name must not blank, ..."
} ```
## Remove Contact
Endpoint : DELETE/api/contacts/:id

Request Header :
X-API-TOKEN : token

Response Body (Success)
``` json
{
  "data" : "OK"
} ```
Response Body (failed)

``` json
{
  "errors" : "Contact is not found, ..."
} ```
## Search Contact
Endpoint : GET/api/contacts

Query parameter: 
- name : string, contact firts name or last name, optional
- phone: string, contact phone, optional
- email: string, email, optional
- page: number, default 1
- size: number, default 10

Request Header :
X-API-TOKEN : token


Response Body (Success)
``` json
{
  "data" : [
  {
  "id" : 1,
  "fist_name" : "inal",
  "last_name" : "mahpud",
  "email" : "inal@mail.com",
  "phone" : "08999999"

  },
  {
  "id" : 2,
  "fist_name" : "inal",
  "last_name" : "mahpud",
  "email" : "inal@mail.com",
  "phone" : "08999999"
  }],
  "paging" : {
    "curent_page": 1,
    "total_page": 10,
    "size": 10
  }
} ```
Response Body (failed)

``` json
{
  "errors" : "Unauthorized, ..."
} ```
