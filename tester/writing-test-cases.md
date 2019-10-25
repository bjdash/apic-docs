# Writing Tests

With apic you not only can you run APIs and view response but also test them by adding test cases for the APIs. You can add test cases to your requests under the Scripts tab in the Request panel. You can add 2 types of scripts; pre-run script which is executed before the request is made and post-run script which is executes after the response is received.

![](/assets/apic-test-scripts.JPG)

**JavaScript** is used to write test cases for apic. You can use the popular javascript assertion library [chaiJs](https://www.chaijs.com/) to write your tests. Apic provides a wide range of API functions to prepare your test cases. See the entire list of functions available in the sections below.

Use apic.test() to write a test which takes 2 arguments, the first one being the name of the test and the secont one a function that contains your assertion logic. If the code inside the test function thorws an error/exception then the test is considered to have failed. Otherwise apic considers the test to be passed. Thats how the assertion in chaiJs works.

For example: 


Each test case will have a name and a test criteria. For example in the test case `assertTrue("Status Code is 201",$response.status===201)`;  `"Status Code is 201"` is the test case name and `$response.status===201` is the test condition.

Alternatively you can also use `TESTS["Status Code is 201"] = $response.status===201`

To know what all you can do with scripts please refer to the list of [APIs and functions provided by **apic**](/tester/apic-apis-functions.md).

