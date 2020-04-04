# APIC Command line interface \(apic-cli\)

[apic-cli](https://www.npmjs.com/package/apic-cli) is a command line utility that allows you to test your Test Suits created with apic from a command line or with a node js app. With the help of apic-cli you can run your API test suites from inside your Continuous Integration / Continuous Deployment \(CI/CD\) environments.

## How to use apic-cli

### Step 1: Install NodeJs

apic-cli is an npm package hence you will need to have NodeJs installed to test your APIs with APIC. Follow the [steps specified here](https://nodejs.org/en/download/package-manager/) to install the version of NodeJs  applicable for your environment.

### Step 2: Install apic-cli

Install the apic command line utility apic-cli globally with the following command.

```text
npm i apic-cli -g
or 
yarn global add apic-cli
```

### Step 3: Run your Test Suite with apic-cli

#### In terminal

if you want to use apic from the command line run

```text
npm install apic-cli -g
```

Once installed you can run`apic-cli -h`to view all available commands.

**Command:**

`run|r <suit> [options]`Run apic Test Suit or an entire Test Project

**Options**

`-e, --environment <path>`: Specify a URL or Path to an apic environment file.

`-r, --reporters <reporters>`: Comma separated list of reporters to use \(without any space\)

`--reporters-junit-path <path>`: Path to write the junit report file

`-d , --responseData`: if specified, response data will be logged in the cli reporter

`-h, --help`: output usage information

Example:

```javascript
apic-cli run ".\example\ToDo demo.suit.apic" -e ".\example\APIC Todo demo-env.env.apic" -r cli,junit -d
```

#### With NodeJs

If you want to use it with a node js application add it to your project by running

```text
npm install apic-cli --save
```

Next add below code to your script file.

```javascript
const apicCli = require('../lib');

apicCli.run('.\\example\\ToDo demo.suit.apic', {
    environment: '.\\example\\APIC Todo demo-env.env.apic',
    reporters: 'cli,junit',
    responseData: true
});
```

Look in the [examples folder](https://github.com/apic-apps/apic-cli) for a sample node js app to run your Test Suit with apic.

