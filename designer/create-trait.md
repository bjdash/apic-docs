# Creating a Trait

Traits are nothing but reusable **`responses`** and **`parameters`** as specified by **Swagger**.

Traits will help you to define generic request and response patterns like query parameters, headers, response types \(200, 404\) etc and their respective response schema. You can reuse them with endpoints.

You can create a Trait by clicking on the Traits option in your Project Home page which will open a view as shown below to fill in the details and create your Trait. You can specify headers, query params, multiple response codes and their respective response schema as shown below.

![](../.gitbook/assets/APIC-create-trait%20%281%29.PNG)

## Example

For example let's consider that all your API expect the user to send an **authorization** header and if the header is not present the API should return status code **401** with a field **"error"\(="Missing auth header."\)** in the response. Instead of adding the header and the 401 status code to each endpoint that you create, you can create a `Trait` and add that trait to each endpoint. Adding a Trait to an Endpoint will auto import everything from the trait.

Let's create a generic response pattern/trait for all error codes that our API may return like 404 \(not found\),401 \(bad request\) with the **schema** shown above and we will put it under **Traits** folder.

## What's next?

Next we will [create our API endpoint](create-endpoint.md) for creating a ToDo.

