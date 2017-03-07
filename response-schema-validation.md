# Response Schema validation

APIC allows you to validate your response with a specific JSON schema. You can define a schema for each status code. For example if the response status code is 200 the what the response should look like or if its 401 the how should it look like. To add a schema to validate against, select **Schema** tab in the **Request panel.** You can add the status code here and define a schema for the status code.

Now to validate your response with the schema just add `TESTS["Response data should match the specified schema based on status code"] = validateSchema();` in your PostRun scripts.

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

