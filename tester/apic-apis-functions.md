# Apic APIs and Functions

Apic provides a set of APIs and functions to automate the process op API testing. For example testing checking the status code, checking if a header is present in the response or not etc.

### The response object \($response\)

To test the response and its properties, apic creates a response object named `$response` that has below properties.

* `$response {object}` - This is the main response object which is created when the run is complete.

  * `body {string}` - The raw response data received in the response.
  * `data {object}` - If the response can be converted to JSON then apic converts it to JSON and stores it under the data property of $response. If the response cant be converted to JSON then `$response.data` will be `undefined`. If the API response looks like `{"msg":"Todo created", "id":"1oFrKEGzoSX2raFHR8xR", "name":"SEo378VnqzdVsCF"}` then you can access `name` by using `$response.data.name` in your scripts. Same for `$response.data.id` and `$response.data.msg`.
  * `headers {object}` - `$response.headers` object holds the list of all headers received in the response as properties and header values as the values for the properties. For example to get the value of Content-Type use `$response.headers['Content-Type']`.
  * `headersStr {string}` - The raw string of headers received in the response \(by default headers are received as a string separated with '\n'\).
  * `status {number}` - The http status code for the response. Ex: 200, 404.
  * `statusText {string}` - The http status text for the response. Ex OK, Not found
  * `timeTaken {number}` - Time taken for the request to complete in milliseconds.

### Dynamic data functions

Sometimes you may need to send dynamic random data while making API calls. We have got you covered. Apic provides a set of functions that you can use while making requests to generate dynamic random data.

* `apic.randomStr(length)` - returns a random string of specified length, default 1 character string.
* `apic.randomNum(min, max, isFloat)` - generates a random integer number between the min and max value. Sending the third argument isFloat as true will return float/decimal number.
* `apic.randomEmail()` - generates valid random email id.
* `apic.randomInList(list)` - if you want some random values from a list then you can use this function. This will accept a list of anything and will return one entry from the list randomly. Ex: `apic.randomInList([1, 2, 1.111, 'some text', 'etc..'])`.

### Additional functions

* `String.has(search_str)` - This function can be called on any string to check if the supplied string is present within the main string. Returns `true` or `false`. This can be useful to check if the response body contains certain substring or not.

        Ex:
```js
var str = "this is a sample string";
str.has("sample"); // check if str contains the string 'sample' or not


//check if response has specific string in body or not
assertTrue('Response body has message Login successful', $response.body.has('Login successful'));

//OR

TESTS['Response body has message Login successful'] = $response.body.has('Login successful')

```

* `Object.has(property, strictMode)` - This function can be called on any Object to check if the specified property exists in the object ot not. Returns `true` or `false`.  By default the check is done by ignoring the case of the property. If you want to make the check case sensitive pass the second argument `strictMode` as `true`. This can be useful to check if a specific header is present in the response or not

       Ex:
```js
var obj = {
    "name":"user name",
    "age":22
}

obj.has("name");  //true
obj.has("Name"); //true
obj.has("Name", true) // false, in strict mode property name are case sensitive


//check if response has specific Header
assertTrue('Response has header content-type', $response.headers.has("Content-Type"));

//OR

TESTS['Response has header content-type'] = $response.headers.has("Content-Type")

```

* `Object.getValue(property, strictMode)` - This function can be called on any Object to get the value of a specific property. By defaulte value is retrived by ignoring the case but to force case sensitive check send the second parameter striceMode as true. This can be useful to het the value of any specific header or getting values from the response data.

       Ex:
```js
var obj = {
    "name":"user name",
    "age":22
}

obj.getValue('age'); //22
obj.getValue('AGe'); //22
obj.getValue('AGe', true); //undefined

//get the value of content-type header
assertTrue('Response header Content-Type is application/json', $response.headers.getValue("content-Type")==="application/json");

//response body has message user created successfully
TESTS['response body has message user created successfully'] = $response.data.msg == 'User created successfully.'
```



