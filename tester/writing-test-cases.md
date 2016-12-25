# Writing Test Cases

With apic you can not only can you run APIs and view response but also test them by adding test cases for the APIs. You can add test cases to your requests under the Scripts tab in the Request panel. You can add 2 types of scripts; pre-run script which is executed before the request is made and post-run script which is executes after the response is received.

![](/assets/apic-test-scripts.JPG)

**JavaScript** is used to write test cases for apic. Apic provides a wide range of API functions to prepare your test cases. See the entire list of functions available here.

Each test case will have a name and a test criteria. For example in the test case `assertTrue("Status Code is 201",$response.status===201)`;  `"Status Code is 201"` is the test case name and `$response.status===201` is the test condition.

Alternatively you can also use `TESTS["Status Code is 201"] = $response.status===201`



