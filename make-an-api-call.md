# Make an API call

To make an API request open tester module, create a new tab and enter your url in the url section. Select a http method type and click **Run. **You can see the response below under Response section.

![](/assets/make-http-call.png)

### URL

Enter the URL you want to run in the URL field. If you want to use http or https then please specify it in the url.

Ex: `https://localhost/todo/create.php`

If no http protocol is specified then default `http://` will be used.

### HTTP method

Select the required http method type from the drop-down for example `GET`, `POST`, `PUT` etc

### Run / Run in loop

To make the request to the specified URL click on the **Run** button.

Want to run your API multiple times or  want to populate  your database with lot of data then no need to hit **Run** multiple times. You can run your API in a loop. To do so click on the little arrow beside the Run button. This will allow you to enter the number of times you want to run the API. Fill in the value and hit Run beside it. Now apic will run the URL in a loop till it reaches the specified count.

### URL Parameters / Query Parameters

URL parameters can be specified under the **URL Params** tab in the **Request** section. Fill in the key and value and hit **Run.** apic will automatically urlencode it and append it to the  URL.

Ex:

| Key | Value |
| :--- | :--- |
| id | 585a449928ea381be8d881b5 |
| name | test |

For above request parameters you while running you URL will look like

`http://your/url?id=585a449928ea381be8d881b5&name=test`

Alternatively you can directly add the URL/Query parameters directly in the URL field itself.

### Headers

If you want to send any header along with the request then you can fill that up under the **Headers** tab in the Request section. This will open a view similar to the URL params where you can specify the header name and value in the left and right inputs respectively.

### Body

You can send extra information in the Body of your request for all request typpes except for `GET`. You can specify body in  types

1. **x-www-form-urlencoded**



