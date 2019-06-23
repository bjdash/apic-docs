# Decoding the Response

Once the request is complete you can see the response in the **Response panel** of the tab. If you dont see the Response panel the the API request might have failed and you should see an error message like this. ![](/assets/req-error.JPG)

### Body

If a response is returned by the server then you can see under the **Body** tab in the **Response panel**. You can also see the **Status Code** & **Status Text** for the response along with the **Time taken** for the request to complete at the top right corner of the Response panel. Under Body tab there are 3 different tabs to see your response.

1. **Pretty -** Formats and beautifies the response to make it more user readable.
2. **Raw - **Shows the response as it is received from the server
3. **Preview - **If the returned response has html content or is a image/audio/video the you can preview it under this tab
4. **Test Builder**: Provides an feature rich UI to build Tests based on your response

   ![](/assets/apic-test-builder-x.png)

### Headers

You can see the headers returned by the server under **Headers** tab.

![](/assets/apic-headers.JPG)

### Test Cases

You can add test cases to your API before running it under the **Scripts** tab before making a request. Once a response is received your test cases will be executed and results will be shown in the **Test Cases** tab in the Response panel. By default it will show all test results. To see only Passed or Failed results you can use the filter beside the results. Learn how to add Test Cases and perform end to end testing of your APIs here.

Ex:

```js
assertTrue("Status Code is 201",$response.status===201);
assertTrue("Status text is Created",$response.statusText=="Created");
assertTrue("time taken is less than 2 sec",$response.timeTaken<=2000);
assertTrue("Response body has the string \'created\'",$response.body.has("created"));
assertTrue("Response has the header Content-Type",$response.headers.has("Content-Type"));
assertTrue("Response header Content-Type is application/json; charset=utf-8",$response.headers.getValue("content-Type")==="application/json");
```

The same code above can also be written as:

```js
TESTS["Status Code is 201"] = $response.status===201);
TESTS["Status text is Created"] = $response.statusText=="Created");
TESTS["time taken is less than 2 sec"] = $response.timeTaken<=2000);
TESTS["Response body has the string \'created\'"] = $response.body.has("created"));
TESTS["Response has the header Content-Type"] = $response.headers.has("Content-Type"));
TESTS["Response header Content-Type is application/json; charset=utf-8"] = $response.headers.getValue("content-Type")==="application/json");
```

![](/assets/apic-test-result.JPG)

### Logs

Apic allows you to debug your test scripts by logging your variables. If you want to debug some values in your script the you can do that by adding logs. All your added logs will be shown in the **Logs** tab

Ex

```js
//To see the value of status code
log("Status code is: " + $response.status);

//to see the value of a specific header
log("Value for header Content-Type: " + $response.headers.getValue("content-Type"));

// to see the raw response 
log($response.body);

/*if your response is a JSON data then you can access individual fields in your response
    {
    "errCode":400,
    "msg": "Missing todo name"
    }
*/
// for the above response you can access the msg & errCode property by using
log($response.data.msg);
log($response.data.errCode);
```

![](/assets/apic-resp-logs.JPG)

### Next: [managing Environments](/tester/managing-environments.md)



