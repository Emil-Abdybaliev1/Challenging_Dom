package new_project.step_definitions;

import io.cucumber.java.en.Given;
import new_project.utilities.BrowserUtils;
import new_project.utilities.Driver;
import org.junit.Assert;

public class GeniricStepDefs {


    @Given("^user on the (.*) page$")
    public void validationOfPage(String expectedPageTitle) {
        String url = Driver.get().getCurrentUrl();
        System.out.println("Home Page: " + url);

        String actualPageTitle = Driver.get().getTitle();
        System.out.print("The page title is: " + actualPageTitle);
        BrowserUtils.waitFor(1);
        Assert.assertTrue(actualPageTitle.contains(expectedPageTitle));
    }
}
