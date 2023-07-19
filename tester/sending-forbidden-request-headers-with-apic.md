# Sending Forbidden request headers with APIC

There are certain request headers which cannot be modified programmatically. Modifying such headers is forbidden because the user agent retains full control over them.

You can find more on these forbidden headers [here on MDN website](https://developer.mozilla.org/en-US/docs/Glossary/Forbidden\_header\_name).&#x20;



Even though the headers are forbidden that doesn't mean we can't send them in the request for testing purposes. Here is how...

## Using the web extension

APIC web extension leverages the Declarative Net Request API to modify the forbidden headers to the values you specify. This works out of the box for the web extension.

## Native app for Windows, Linux & Mac

Since  the native app for Windows, Linus or Mac doesn't run on a typical browser it doesn't have the limitation for sending Forbidden headers.

## Web App

Since the browsers don't allow sending these restricted headers you can bypass that limitation by using [APIC's Web Agent](../apic-web-agent-apic-cli.md) which also bypasses the CORS limitation imposed by browsers. Learn more on how to use the Web Agent here.



## &#x20;List of Forbidden headers

Forbidden header names start with `Proxy-` or `Sec-`, or are one of the following names:

* [`Accept-Charset`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept-Charset)
* [`Accept-Encoding`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept-Encoding)
* [`Access-Control-Request-Headers`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Request-Headers)
* [`Access-Control-Request-Method`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Access-Control-Request-Method)
* [`Connection`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Connection)
* [`Content-Length`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Length)
* [`Cookie`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Cookie)
* [`Date`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Date)
* [`DNT`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/DNT)
* [`Expect`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Expect)
* [`Host`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Host)
* [`Keep-Alive`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Keep-Alive)
* [`Origin`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Origin)
* [`Permissions-Policy`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Permissions-Policy)
* `Proxy-`
* `Sec-`
* [`Referer`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referer)
* [`TE`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/TE)
* [`Trailer`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Trailer)
* [`Transfer-Encoding`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Transfer-Encoding)
* [`Upgrade`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Upgrade)
* [`Via`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Via)
