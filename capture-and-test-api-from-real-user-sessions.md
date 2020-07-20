# Test Real User Sessions

Want to test APIs from real user session? You got it.  With APIC, capturing requests from real user sessions and importing them [Test Suites](tester/creating-test-suits.md) is just buttons away. 

You have multiple options to test real user sessions. You can [export your network requests as HAR file](https://developers.google.com/web/tools/chrome-devtools/network/reference#export) and then importing it into your Test Suite or if you are using APIC chrome extension you can use APIC's network request capturing tab in devtools.

## Capturing API calls from real user session

### 1. Capturing Network requests with _APIC Session Recorder_

If you are using APIC's Chrome extension then you can record the user session with **APIC's Session Recorder** and import it to your suite with click of a button.

{% hint style="info" %}
Not using the Chrome extension? No worries. We have [another way to capture APIs from user session](capture-and-test-api-from-real-user-sessions.md#2-importing-a-har-file). Keep reading.
{% endhint %}

* Open the target web page from which you want to capture requests.
* Open chrome Devtools.
* Select the tab **APIC**. 
* You should a network panel that looks something like this.

![](.gitbook/assets/image%20%2810%29.png)

* From the **`Test Suites`** drop-down select the test suite where you want to import the requests and make sure recording is enabled.
* Now as you start interacting with the web page APIC will start capturing network requests. 
* Use the filter options to filter out unwanted requests. 
* Once you are satisfied with the captured requests click on **`Add to suite`**. This will automatically open the selected suite and import the requests to it as shown below. 

![Requests imported from APIC Session Recorder](.gitbook/assets/image%20%2811%29.png)

* Here you can modify the [parameters](tester/make-an-api-call.md#url-parameters-query-parameters), [headers](tester/make-an-api-call.md#headers), [body](tester/make-an-api-call.md#body) and other details of the request.
* You also have access to the response here so you can use the [Test Builder](tester/using-test-builder.md) to add tests from the [saved Response](tester/decoding-the-response.md#testing-with-saved-api-response).
* Once done editing, click on **`Add requests to suite`** to import the requests to the selected suite.
* Now all you have to do is hit Run and let APIC replay your real User Session.

### 2. Importing a HAR file

If you are not using APIC's chrome extension then you can to import requests from a real user session you can export the network requests as a HAR file and then import it to APIC Test Suit.

* Follow the [instructions specified here](https://developers.google.com/web/tools/chrome-devtools/network/reference#export) to export your network requests as an HAR file.
* Open the Test Suite in APIC where you want to import your APIs.
* Click on **`Add recorded requests`** under **Requests** panel.
* Now in the **Import recorded requests** panel brows and select the HAR file and click **`Process`**.
* APIC will now process the HAR file and list down all the API calls
* You can get rid of the ones that you don't want as part of your test.
* Here you can modify the [parameters](tester/make-an-api-call.md#url-parameters-query-parameters), [headers](tester/make-an-api-call.md#headers), [body](tester/make-an-api-call.md#body) and other details of the request.
* You also have access to the response here so you can use the [Test Builder](tester/using-test-builder.md) to add tests from the [saved Response](tester/decoding-the-response.md#testing-with-saved-api-response).
* Once done editing, click on **`Add requests to suite`** to import the requests to the selected suite.
* Now all you have to do is hit Run and let APIC replay your real User Session.

![](.gitbook/assets/image%20%288%29.png)

