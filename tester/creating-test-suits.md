# Creating Test Suites

Once you have saved few requests with few test cases, you can create test suites, add requests to them and run them one by one in just one click.

To create a test suite first you need to create a Project. To do that switch to the Tests tab in the left panel and click on the + icon. Fill in the project name and click ok. Once you have created the project, you can add test suites in it. To do that hover over the Project name in the left panel and click on the menu icon \(3 dots\). Now you can add new suites by clicking on Add Test Suite and filling in the suite name or clicking on import to import an already exported suite from a file.

![](../.gitbook/assets/apic-new-test-proj.JPG)

## Adding requests to suite

You can add a request to a suite from the **Saved pane** by clicking on the menu icon beside a saved request and selecting **Add to Test Suite** and selecting the suite to which you want to add it. Alternatively you can select a request by clicking on the menu item beside a test suite and selecting **Add Request**.

## Running a Test Suite

You can open a test suite by clicking on the Green run button or selecting **Open Suite** option from the action menu beside it. This will open the test suitee in a new tab with options to **Run, Edit & Reorder requests**.

![](../.gitbook/assets/apic-test-suit-open%20%281%29.JPG)

You can edit a request \(edit url, query params, headers, data etc\) by clicking on the request name. To change the order of requests click on the sort icon present on the top right and drag to reorder. Once done click on the save icon when done.

![](../.gitbook/assets/apic-edit-suit-req.JPG)

**Running the Suite**

Once your test suite is ready, select the environment you want to use and click on the Run button. This will run your requests one after another and once its finished you can see the run result and test cases in the results panel. If you have used `log()` in your script then you an see them in the **Run Logs** panel in the right.

![](../.gitbook/assets/apic-suit-result%20%281%29.JPG)

### Export Test report <a id="export-test-report"></a>

Want to share the run result with others? click on the Download button in the Run Results panel. This will download an HTML file the you can open with any browser to see the run result.

![](../.gitbook/assets/apic-run-report.JPG)

