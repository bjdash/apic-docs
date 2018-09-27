# API Simulator

APIC's API simulator allows you to simulate your API responses based on the API design you have defined. You can simulate response for any status type you wish for; for example 200 \(ok\), 404 \(Not found\) or 500 \(Internal server error\). Know more about the API Simulator here.

You can enable simulation for an API design project from the **Designer** section. To enable simulation for a project go to [Designer Module](/designer.md), open the required API project by clicking on it and scroll down to the **Mocked Response** section at the bottom of the page. Click on the Enable Mocked Response button to enable API simulation for the selected project. 

![](/assets/APIC-enable-simulator.PNG)

Once the API simulation is enabled you will get a simulation key \(simKey\) which you can use to simulate you API. You can mock your API endpoint at `http://myapic.com/mock/{simkey}/{api-endpoint}?statusCode={statuscode}`, where 

* `simKey` is the key you get when you enable mocked response
* `api-denpoint` is the path of your API
* `statuscode` is the HTTP StatusCode value for which you want to simulate the response. For example 200 \(Ok\), 400 \(Bad Request\) or 500 \(Internal serve error\)

![](/assets/APIC-simulator.PNG)

Click on the Run button beside an endpoint to open it in API's API tester and view the response.

![](/assets/APIC-simulator-run.PNG)

