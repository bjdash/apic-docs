# Write API Tests starting from Design Phase

## Writing tests during design

As a typical practice for writes test for your APIs  only starts after the design/spec for the API are complete. Then the testes are explained the use of that API to start writing tests. But the ideal thing to do is to start writing some initial tests for the APIs during the design phase. And this should be done by person designing the API spec as he/she will have better understanding of the API while its being designed and as to what scenarios to test for the APIs.

Well what if there was a way to do all this? That's what API is for. 

### Defining tests based on API response

APIC has a very simple tool to define response schema for your API during design. We call it The Schema designer. With this you can define response schema against different status codes. Just add a new status code from the left panel and start defining your schema.

![](../.gitbook/assets/image%20%285%29.png)

If you want to reuse a schema you can define it as a [Model](create-model.md) or [Trait](create-trait.md) and add reference it here with `$ref`. You can even expand it inline to view its properties.  
  
Having done that now you can add tests based on your response. To do that click on the **Test Builder** icon beside each property \(as shown below\) which will open up the tool to write tests against your response schema as shown below. 

![Response Test builder](../.gitbook/assets/image%20%284%29.png)

The above screen grab shows an example where you are defining the spec for a \[POST\] Create ToDo API  which accepts the name of the ToDo and returns the newly created ToDo along with its `id, name, completed and created` fields.   
A simple test would be to check the value of the `name` field in response should be the same as the value specified in the  `POST` request payload.

[Learn more about the Test Builder here.](../tester/using-test-builder.md)

### Adding more tests

Using the above Test Builder you can write tests based on your API response schema. But writing tests isn't just limited to response schema. You can write a whole lot of other tests while defining your endpoint.

To add more tests scroll down to the Test Scripts section in the [Endpoints panel](create-endpoint.md). Here you have to option of defining 2 types of scripts

* **Pre Run Scripts** - These scripts run before your API request is made. An ideal place to generate random data, storing values in environment variables etc. 
* **Post Tun Scripts** - These scripts run once the response is received. An ideal place to write your tests/assertions\(ex: Making sure that the status code for Create ToDo is 201, or the response time is less than 2 sec\) or to store and fields from the response as an environment variable \(ex: Storing the id of the newly created ToDo from the response as an environment variable to be used in the Get ToDo by ID API call\).

There are some predefined snippets to help you add more tests. 

![](../.gitbook/assets/image%20%286%29.png)

