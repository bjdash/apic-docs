# Apic APIs and Functions

Apic provides a set of APIs and functions to automate the process op API testing. For example testing checking the status code, checking if a header is present in the response or not etc.

To test the response and its properties, apic creates a response object named `$response` that has below properties.

* `$response {object}` - This is the main response object which is created when the run is complete.
  * `body {string}` - The raw response data received in the response.
  * `data {object}` - If the response can be converted to JSON then apic converts it to JSON and stores it under the data property of $response. If the response cant be converted to JSON then `$response.data` will be `undefined`. If the API response looks like `{"msg":"Todo created", "id":"1oFrKEGzoSX2raFHR8xR", "name":"SEo378VnqzdVsCF"}` then you can access `name` by using `$response.data.name` in your scripts. Same for `$response.data.id` and `$response.data.msg`.
  * headers {object} - $response.headers object holds the list of all headers received in the response as properties and header values as the values for the properties. For example to get the value of Content-Type use $response.headers\['Content-Type'\]. 

  * 
 



