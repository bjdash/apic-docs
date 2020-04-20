# APIC CI/CD Integration \(with Jenkins\)

We understand how difficult it gets to automate API testing. With a little help from APIC you can reuse your Test Suites created in APIC to automate your API testing. Integrate [APIC \(apic-cli\)](https://github.com/apic-apps/apic-cli) with your CI/CD pipeline in few steps and every time you push new code or deploy a new build in one of your environments, APIC will run your Test Suites automatically.

#### apic-cli

[apic-cli](https://www.npmjs.com/package/apic-cli) is a command line utility that allows you to test your Test Suits created with apic from a command line or with a node js app. With the help of apic-cli you can run your API test suites from inside your Continuous Integration / Continuous Deployment \(CI/CD\) environments.

## apic-cli integration with Jenkins

### 1. Installation

[Follow the Steps here](https://jenkins.io/doc/book/installing/) to install Jenkins.

[Follow the steps specified here](apic-command-line-interface-apic-cli.md) to install apic-cli

### 2. Getting your API Test Suite Ready

Now make sure you have [created a Test Suite](tester/creating-test-suits.md) created for your APIs and have added test cases to each API requests either [using the Test Builder](tester/using-test-builder.md) or by [writing the test cases](tester/writing-test-cases.md) yourself using Chai.js

For now lets use the example test suite **ToDo Demo** that comes pre-loaded with APIC. You can download the sample Test Suite from [https://apic.app/api/webAccess/APICSuite/123456abcdef-testsuite-demo?token=apic-demo-suite](https://apic.app/api/webAccess/APICSuite/123456abcdef-testsuite-demo?token=apic-demo-suite)

Run the Test Suite within APIC to make sure all the test cases are passing.

![](.gitbook/assets/api-suite-full.PNG)

### 3. Export your Test Suite

You can run your Test Suite either by enabling access via URL or by exporting it as a file. To enable access via URL open the Suite and click **Get web access URL**. This will generate an unique URL to access your Test Suite via http. 

OR

You can export your Test Suite by selecting the **Export Suite** option from the left menu. If you have used any environment variables in your project then make sure you export the environment too.Alternatively you can export your Test Suite and Environment together in a single file by selecting **Export with Environments** option from the left menu.

![](.gitbook/assets/image%20%281%29.png)

### 4. Running your API Test Suite with apic-cli

You can run your exported test Suite with apic-cli as `apic-cli run|r <pathTo/suit> -e <pathTo/environment>`

Use below command to run the demo API Test Suite that come with APIC.

```javascript
apic-cli run "https://apic.app/api/webAccess/APICSuite/123456abcdef-testsuite-demo?token=apic-demo-suite" 
```

If you have exported the apic **ToDO demo** Suite and its environment together the you can run it as 

```javascript
apic-cli run ".\example\ToDo demo-with-env.suit.apic" -r cli,junit
```

Or if you have exported the Test Suite and Environment variables separately into separate files then run it as 

```javascript
apic-cli run ".\example\ToDo demo.suit.apic" -e ".\example\APIC Todo demo-env.env.apic" -r cli,junit -d
```

For more option on running a Test Suite [refer the section here](apic-command-line-interface-apic-cli.md).

![](.gitbook/assets/cli-run-cmd.jpg)

### 5. Integrating with Jenkins

Open Jenkins on `localhost:8080` and select **New Item** from the left side menu. On the next screen enter a name for your job and select **Freestyle Project**.

![](.gitbook/assets/jenkins-new.jpg)

![](.gitbook/assets/jenkins-new-job.jpg)

This job should execute the `apic-cli run <suite>` shell command so add a Build Step as **Execute Shell**. If you are on windows then select **Execute Windows batch command**.

![](.gitbook/assets/jenkins-add-step.jpg)

Now enter the [command to run your Test Suite](apic-command-line-interface-apic-cli.md). For example to  run the pre-loaded **ToDo Demo** suite use below command.

```javascript
apic-cli run "https://apic.app/api/webAccess/APICSuite/123456abcdef-testsuite-demo?token=apic-demo-suite" 
```

![](.gitbook/assets/image%20%283%29.png)

Click Save and start a manual build bu clicking **Build Now** for the left side-menu. You can view the test result by opening the  **Console Output of** the run. If all your test cases passed then the Jenkins job should succeed.

Note the if you have used the pre-loaded **ToDo Demo** suite then your Jenkins job will fail as the demo suite is **configured to fail intentionally**. You can check why it failed in the **Console Output**.

If you want to view the API response as well in the console then add the flag `-d` or `--responseData`

![](.gitbook/assets/jenkins-console.jpg)



