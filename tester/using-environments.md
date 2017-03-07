# Using Environments

Once you have created your environment and defined environment variables, you can use them while making requests to switch context like local environment, test environment etc. For example the URL to get detail about an user may look like `http://localhost:8080/user?id=585a449928ea381be8d881b5` in your local environment and `http://alpha.test.xyz.com/user?id=585a449928ea381be8d881b5` in your test environment. With environments you will have a URL like `http://{{url}}/user?id={{userId}}`. Now you can create environments and define value for the used variables.

To use an environment variable put it in a double pair of curly braces `{{variable_name}}`. Now based on the environment you select, while running your request the variable will be replaced with its defined value.

You can you environment variables in **URLs**, **Query parameters** \(both key and value\), **Headers** \(both key and value\) and in **Body**. In all the above places you will use `{{variable_name}}` to use a variable.  
 you can use variables while sending \(JSON\) data also.

```js
{
    "name":"{{name}}",
    "id":"{{id}}",
    "age":{{age}}
}
// If your variable represents a string value make sure you surround the reference to your variable in double quotes.
//But if it represents a number you can directly refer it with {{}}
//For the same reason in the above example name and id are surrounded with double quotes while age isn't
```

**Using environment with scripts**

You can also use environment variables in scripts. Use below functions to manipulate environment variables.

* setEnv\('variable','value'\) - to set an environment variable
* getEnv\('variable\_name'\) - to get the value of a variable in an environment
* removeEnv\('variable\_name'\) - ro remove an environment variable.

Learn more about [using environment variables along with scripts here](/tester/writing-test-cases.md).

