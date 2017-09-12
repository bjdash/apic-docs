# Response Schema validation

APIC allows you to validate your response with a specific JSON schema. You can define a schema for each status code. For example if the response status code is 200 the what the response should look like or if its 401 the how should it look like. To add a schema to validate against, select **Schema** tab in the **Request panel.** You can add the status code here and define a schema for the status code.

Now to validate your response with the schema just add below line in your PostRun scripts.

```js
TESTS["Response data should match the specified schema based on status code"] = validateSchema();
```

The `validateSchema()` method will detect the http status code and will validate with the JSON schema defined for that specific code. For example if the status code is 401 then it will validate the response with the JSON schema defined against 401.

But if you believe that the response should have been 200 instead of 401 and want to force the validation against the schema defined for 200 then you can do that by passing the status code to the `validateSchema(200)` function.

```js
TESTS["Response data should match the schema specified against status 200"] = validateSchema(200);
```

**Schema validation Example:**

Consider you are using an PAI to get the list of users and we will take below 2 types of status codes as example

* 200 \(ok\) - when the user list is reterived successfully
* 401 \(unauthorized\) - when an unauthorized user is trying to get the user list.

Now lets say for 200, the response should have a property called usersList which is an array of user object and a user object will have a name \(String, 0-255 characters\), email\( String&lt;email&gt;, 0-255 characters\), country \(String, an enumerated value from a list of countries\).

```js
{
    "userList":[
        {
            "name":"user1",
            "email":"aaa@bbb.com",
            "country":"India"
        }
    ]
}
```

The schema model for above response type should look something similar to this

![](/assets/apic-resp-schema-validation-1.JPG)



For 401 we can return a message \(String\) and an statusCode \(String \["ERROR","WARNING", "OK"\]\)

```js
{
    "message": "You are not authorized to access the resource",
    "statusCode": "ERROR"
}
```

The schema design for the above should look something like this![](/assets/apic-resp-schema-validation-401.JPG)

