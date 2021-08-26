# APIC Web Agent \(apic-cli\)

One of the best feature of APIC is the option to use the API designer & tester right from your web browser.  But using the web version of APIC has one limitation, [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS). By default all web browsers block API requests made to other hosts unless they specify an `Access-Control-Allow-Origin` header that allows APIC to use the API. 

To overcome this limitations we are introducing **APIC Web Agent** which is part of the [apic-cli](https://www.npmjs.com/package/apic-cli). To start using the Web Agent install apic-cli as [described here](apic-command-line-interface-apic-cli.md#how-to-use-apic-cli). Once installed run the following command to start the agent.

```text
apic agent
```

Once the agent is up successfully you should see below message on the terminal window

![APIC web agent for CORS](.gitbook/assets/image%20%2814%29.png)

{% hint style="info" %}
By default the agent runs on port 8008. Alternatively you can specify a different post by running

```text
apic agent --port=<your_port>
```
{% endhint %}

### Connecting to APIC Web Agent from the browser

Once you have opened [APIC web app](https://apic.app/online) on your browser you should see below highlight icon in the header. Clicking on the Agent icon should connect to the agent that you started earlier via apic-cli. Now all the API requests you make from APIC will be forwarded to the Agent and once completed the response will be served in APIC. The experience is seamless as if the request was made by the browser itself.

![](.gitbook/assets/image%20%2815%29.png)

By default the web app tries to connect to the agent on port 8008. If you can started the agent on a different port then yo need to configure the same in the web application. 

To do so open the settings from the header and navigate to APIC Web Agent tab. Here you can configure the port to connect to along with the default request timeout interval.

![](.gitbook/assets/image%20%2813%29.png)

