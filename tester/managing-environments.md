# Managing Environments

Environments are most helpful for switching contexts like your local system, test environment or production system etc.

For example consider the below API to get the detail of an user:

```ruby
[GET] http://localhost:8080/user?id=585a449928ea381be8d881b5
```

To run it in future you can save it into a folder. But if you want to run the same request in your test environment, you will have to change the URL. Again if you want to run it in your production environment you will have to change the URL again. So for all three environments you will either have 3 copies of the same request saved or you will edit the URL each time you run for a new environment. Well with apic no need to do either.

Apic allows you to create dynamic URS by adding variables to them and define the values for the variables by creating Environments. For example after adding variables, the above URL will look something like this

```ruby
[GET] http://{{url}}/user?id={{userId}}
```

Now you can create as many Environments as you want and define values for the variables **url** and **userId**. While running a request, based on the environment selected in the Request panel the variables will be replaces with the values defined in the selected Environment.

### Adding an Environment

You can access the Environments by clicking on the Environments button present on the top right side of the application. Once the Environments module is open you can click in the add button \(+ icon\) to add a new environment. Fill in the environment name and click ok. Your environment is created, now you need to define environment variables and their values.

![](/assets/epic-env.JPG)

### Adding / Removing Variables for an Environment

To add variables to an environment you need to select it. Newly added environments are selected by default, for others you can select them from the list in the left. After selecting an  environment you can see its detail in the right panel where you can add new variables by filling variable name and its value. You can also remove existing variables from here.

Add environment variable through script

You can also add variables to the selected environment while running a request by calling `setEnv('variable_name', 'variable_value')`. Note that these environment variable are not saved permanently and only exist during the run period of your requests

### Exporting an environment

You can share your environments with others by exporting them. To export a single environment, hover your mouse over the specific environment in the left list. You should see a download icon which will export that environment into a file which can be shared with other and imported into their **apic.** You can also export in bulk by clicking on the export icon present on the top right beside the add button. Select the environments you want to export and click download.

### Importing environments

You can import an already exported environment by clicking on the import icon on the top right corner and selecting the environment file.

### [Next: Using environments](/tester/using-environments.md "Using environments")



