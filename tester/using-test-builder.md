# Using the Test Builder

APIC comes with a powerful test builder that lets you build tests from your response.

The Test Builder is available in the response section of the [API Runner](make-an-api-call.md). To use it make an API call using the API Runner. The response section will scroll into view. Under the **Body/Test builder** tab select the **Build API Tests** button present on the top right corner. This would open the Test Builder with your JSON response. Click on any of the keys to continue.

![](../.gitbook/assets/apic-api-test-builder-from-response%20%281%29.PNG)

On the selected field in response, you can add a following types of assertions from this screen:

* Equals
  * To a specific value.
  * To a field in the request body.
  * To a field in request header.
  * To a value stored in an environment variable.
* Exists
  * Assertion to check if a field should/should not exist in response.
* Is/Type
  * Assertion to check the type of the value, ie String, Number, Boolean, Array or Object.
* Constains
  * Assertion to check if the response value contains/doesn't contain a specofic phrase.
* In
  * Assertion to ckeck if the values in the response in from a specifed list or not.
* Greater/Lesser
  * Assertion to check if the response value is greater/lesser than \(or equals\) to a specified value or not
* Environment
  * Adds script to save current value in environment with a specifed name.

