# Using Environments

Once you have created your environment and defined environment variables, you can use them while making requests to switch context like local environment, test environment etc. For example the URL to get detail about an user may look like `http://localhost:8080/user?id=585a449928ea381be8d881b5` in your local environment and `http://alpha.test.xyz.com/user?id=585a449928ea381be8d881b5` in your test environment. With environments you will have a URL like [http://{{url}}/user?id={{userId}}](http://{{url}}/user?id={{userId}}) . Now you can create environments and define value for the used variables.

To use an environment variable put it in a double pair of curly braces `{{variable_name}}`. Now based on the environment you select, while running your request the variable will be replaced with its defined value.

You can you environment variables in URLs, Query parameters \(both key and value\), Headers \(both key and value\) and in  Body. In all the above places you will use {{variable\_name}} to use a variable.

You can also use environment variables in scripts. 





