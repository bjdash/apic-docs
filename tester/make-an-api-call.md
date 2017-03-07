# Make an API call

To make an API request open **Tester** module, create a new tab and enter your url in the url section. Select a http method type and click **Run. **You can see the response below under Response section.

![](/assets/make-http-call.png)

## Preparing the Request

### URL

Enter the URL you want to run in the URL field. If you want to use http or https then please specify it in the url.

Ex: `https://localhost/todo/create.php`

If no http protocol is specified then default `http://` will be used.

### HTTP method

Select the required http method type from the drop-down for example `GET`, `POST`, `PUT` etc

### Run / Run in loop

To make the request to the specified URL click on the **Run** button.

Want to run your API multiple times or  want to populate  your database with lot of data then no need to hit **Run** multiple times. You can run your API in a loop. To do so click on the little arrow beside the Run button. This will allow you to enter the number of times you want to run the API. Fill in the value and hit Run beside it. Now apic will run the URL in a loop till it reaches the specified count.

For sending random data with each API request refer  **Sending random data with each API call **section below.

### URL Parameters / Query Parameters

URL parameters can be specified under the **URL Params** tab in the **Request** section. Fill in the key and value and hit **Run.** apic will automatically urlencode it and append it to the  URL.

Ex:

| Key | Value |
| :--- | :--- |
| id | 585a449928ea381be8d881b5 |
| name | test |

For above request parameters you while running you URL will look like

`http://your/url?id=585a449928ea381be8d881b5&name=test`

Alternatively you can add the URL/Query parameters directly in the URL field itself.

### Headers

If you want to send any header along with the request then you can fill that up under the **Headers** tab in the Request section. This will open a view similar to the URL params where you can specify the header name and value in the left and right inputs respectively.

### Body

You can send extra information in the Body of your request for all request typpes except for `GET`. You can specify body in  types

* **x-www-form-urlencoded**

This is the default content type. When you fill up a regular form  in a website and submit, it uses this content type to send the data. If you are sending simple plain text data then this is the right content type. Fill in the key value pair and hit **Run**. Using this will URLencode your data while making the API request. [More information here](https://www.w3.org/TR/html401/interact/forms.html#h-17.13.4.1).

You can also send dynamic values each time you run the request by setting up [**Environments** ](/tester/using-environments.md)or using [**apic's data generation API**](/tester/apic-apis-functions.md). Using Environments will allow you to send data based on the values defined on your selected environment. Apic's data generation API will generate random data each time you make a request.

* **multipart/form-data**

The content type "application/x-www-form-urlencoded" is inefficient for sending large quantities of binary data or text containing non-ASCII characters. The content type "multipart/form-data" should be used for submitting forms that contain files, non-ASCII data, and binary data. [More information here.](https://www.w3.org/TR/html401/interact/forms.html#h-17.13.4.1)

Under the form data tab you can set the key name and from the dropdown at extreme right you can select the type, either text or file. For text you can enter the text value and for files you can click on the browse button and select the file.

Here also you can use [**Environments** ](/tester/using-environments.md)or [**apic's data generation API**](/tester/apic-apis-functions.md) for sending dynamic data.

* **raw**

for content types other than x-www-form-urlencoded and multipart/form-data, you can use raw type to send the data. you can select the content-type from the dropdown beside it \(JSON - application/json, XML - application/xml etc\) and enter the value in the editor below that.  
As described above you can use [**Environments** ](/tester/using-environments.md)or [**apic's data generation API**](/tester/apic-apis-functions.md) for sending dynamic data.

* **Sending random data with each API call**

To send random data each time you fire the request, you can use [APIC's random data generation functions](/tester/apic-apis-functions.md).

 `{  
"email":"{{ apic.randomEmail() }}",  
"username":"{{ apic.randomStr(10) }}",  
"password":"{{ apic.randomStr(10) }}"  
}` 

### **Environment**

You can select an environment to run your APIs from the dropdown present at the top right corner of the **Request** panel. Selecting an environment will allow you to switch between contexts, for example your local system, test environment or production system etc. Know more about how to use environments here.

### **Save request**

You can save your current request for future use by clicking on the **Save** button in the top right corner. This will open a window to select the folder  you want to save. If you don't have any folders created then first create a folder in the left panel before saving.

If you want a copy of an already saved request then click on the small arrow beside the save button and select **Save as**.

### **Authorization**

If you API is asking for Authorization then you can provide that from the Authorization tab. Select the required authorization type from the dropdown and fill up the details.  
**BasicAuth - Basic authentication** is a method for a HTTP user agent to provide a user name and password when making a request. Your provides user name and password will be encodes with base64 algorithm \(not safe\) and sent via **Authorization** header while making the request.

**DigestAuth - **APIC supports **Digest authentication**. To add Digest authentication, select Digest Auth under the Authorization tab and fill in the details. This will generate the auth string and add it to **Authorization** header. The supported encryption algorithm for  generation the token are **MD5** and **MD5-sess**.

**OAuth 1.0 - **APIC supports authentication via OAuth 1.x. Select OAuth 1 under the Authentication tab and fill in the details. The generated auth string will be added to the URL as query parameters. If you want to add it to the header then select the checkbox labeled **Add auth params to header**.You can also URLencode your auth signature by selecting the checkbox labeled Encode OAuth signature

**Hawk Auth - **We have added support for Hawk Authentication. Filling in the required fields under Hawk Auth should henerate the auth token add add it to the **Authorization** header.

**OAuth 2.0 - Coming soon**

### **Scripts**

Scripts help you to carry out the actual testing for your APIs. You can add 2 types of scripts; pre-run script which is executed before the request is made and post-run script which is executes after the response is received. [Learn more about scripting here](/tester/writing-test-cases.md).

### **Schema**

You can specify a JSON schema under this section to test if the response you receive from the API is matching to the specified schema or not. [Know more about schema validation here](/response-schema-validation.md).

### Next: [Decoding the Response](/tester/decoding-the-response.md)



