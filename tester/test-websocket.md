# Test Websockets

APIC allows you to test Websockets \(Native Websocket & Stomp\) my connecting to a websocket enabled URL and subscribing to an exchange. Any data you receive will be shown in the Messages section. You can also send data to any exchange as well.

To test websocket requests open an Websocket tab in the Tester module by clicking on the **ws** button as shown below

![](/assets/apic-test-websocket.JPG)

## Testing Stomp over Websocket

With APIC you can test STOMP enabled websockets. To start

* Enter the STOMP endpoint/URL
* Select **`Stomp`** from the dropdown beside the URL bar
* Specify the subscription URL
* Specify Stomp Virtual Host name \(if any\)
* Specify Username and Password to connect to the exchange \(if required\)
* Specify additional header you want to send
* Click Connect and you are done

Now you can see all incoming messages  to the subscribed URL. 

To data/messages to ant exchange, click on the **Send** button in the **Messages panel**, specify the **Destination exchange** and message to be sent and click **Send**.

## ![](/assets/apic-websocket-test-stomp.png)

## Test Websockets

You can directly connect to any websocket endpoints \(ws:// or wss://\) by directly specifying the URL in the URL bar and selecting **`Websocket`** from the dropdown beside it.

