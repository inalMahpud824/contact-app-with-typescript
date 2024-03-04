# User API Spec

## Register User
Endpoint : POST/api/users

Request Body :

``` json {
  "username" : "inal",
  "password" : "rahasia",
  "name" : "Inal Mahpud"
} ```

Response Body (success) :
``` json {
  "data" : {
    "username": "inal",
    "name": "Inal Mahpud"
  }
} ```

Response Body (Failed) :
``` json {
  {
    "errors": "Username not blank, ..."
  }
} ```

## Login User

Endpoint : POST/api/users/login

Request Body :

``` json {
  "username" : "inal",
  "password" : "rahasia",
} ```

Response Body (success) :
``` json {
  "data" : {
    "username": "inal",
    "name": "Inal Mahpud",
    "token": "uuid"
  }
} ```

Response Body (Failed) :
``` json{
  {
    "errors": "Username or Password wrong, ..."
  }
} ```

## Get User
Endpoint : GET/api/current

Request Header :
-X-API-TOKEN : token

Response Body (success) :
``` json {
  "data" : {
    "username": "inal",
    "name": "Inal Mahpud"
  }
} ```

Response Body (Failed) :
``` json{
  {
    "errors": "Unauthorized, ..."
  }
} ```

## Update User
Endpoint : PATCH/api/users

Request Header :
-X-API-TOKEN : token

Request Body :

``` json {
  "password" : "rahasia", //tidak Wajid
  "name" : "Inal Mahpud" //tidak Wajib
} ```

Response Body (success) :
``` json {
  "data" : {
    "username": "inal",
    "name": "Inal Mahpud"
  }
} ```

Response Body (Failed) :
``` json{
  {
    "errors": "Unauthorized, ..."
  }
} ```

## Logout User
Endpoint : DELETE/api/current

Request Header :
-X-API-TOKEN : token


Response Body (success) :
``` json {
  "data" : "OK"
} ```

Response Body (Failed) :
``` json{
  {
    "errors": "Unauthorized, ..."
  }
} ```