# Creating an Endpoint

Endpoinst are your actual APIs.You can define your API endpoints in your project with request, response types, response schemas etc.

You can create an API Endpoint by clicking on the Endpoints option in your Project Home page which will open a view as shown below to fill in the details and create your Endpoint. You can specify **http method**, **schemes, endpoint url, content type \(Consumes, Produces\)**, tags, summary, description, multiple response codes and their respective response schema as shown below.

You can import headers or query parameters or response code and their schema from a **trait** by selecting that trait in the traits field.

You can add a path parameter by putting that in the URL as /api/path/{para-param}. Now yo can specify the details of this path param under the path params section.

![](/assets/APIC-create-endpoint.PNG)

### Endpoint fields

* Name/Summary

* Path

* HTTP method

* Folder

* Operation Id

* Consumes/produces: Eg: appication/json

* Schemes

* traits

* tags

* Description

* Path parameters

* Query parameters

* Headers

* Body

* Responses

* Pre/Post script

### Example

Lets create 3 endpoints for our ToDo applicaion for creating ToDo, getting list of ToDo and getting detail of specific ToDo by its id. We can use path params for getting the ToDo detail by id. Our endpoint URL will look like /todo/{todoid}

### What's next?

Well we have a basic design ready. Let's see how we can [generate beautiful documentation](/designer/export-docs.md) from this and [share](/designer/export-docs.md) with other developers.

