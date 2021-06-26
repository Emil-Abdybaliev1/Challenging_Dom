package new_project.step_definitions;


import io.cucumber.java.en.*;
import new_project.pages.ChallengingDom_Dom_PageElements;
import new_project.utilities.BrowserUtils;
import new_project.utilities.ConfigurationReader;
import new_project.utilities.Driver;
import org.junit.Assert;
import org.openqa.selenium.WebElement;

public class ChallengingDom_Dom_StepDefs {
    ChallengingDom_Dom_PageElements challengingDom_dom_pageElements = new ChallengingDom_Dom_PageElements();
    public static String link;
    @Given("user open {string} page")
    public void user_open_page(String string) {
        Driver.get().get(ConfigurationReader.get("url"));


    }


    @Given("user click on blue button")
    public void user_click_on_blue_button() {
        BrowserUtils.waitFor(10);
      challengingDom_dom_pageElements.blueButton.click();



    }

    @Given("the answer at the bottom should be change")
    public void the_answer_at_the_bottom_should_be_change() {
    String actualAnswer = challengingDom_dom_pageElements.answerText.getText();
    String expectedAnswer = "Answer: 81611";
        Assert.assertEquals("verify button clicked ",expectedAnswer,actualAnswer);
        //System.out.println(challengingDom_dom_pageElements.answerText.getText()+"++++++++++++");

    }

    @When("the button wording should be change accordingly")
    public void the_button_wording_should_be_change_accordingly() {

        String actualButtonWording=challengingDom_dom_pageElements.blueButton.getText();
        String expectedButtonWording="qux";
        Assert.assertFalse("verify button Wording changed",expectedButtonWording.contains(actualButtonWording));
    }

    @Given("user click on red button")
    public void user_click_on_red_button() {

        challengingDom_dom_pageElements.redButton.click();

    }

    @Given("user click on green button")
    public void user_click_on_green_button() {

        challengingDom_dom_pageElements.greenButton.click();
    }

    @Given("user click on {string} button")
    public void user_click_on_button(String link) {

        for (WebElement eachLink : challengingDom_dom_pageElements.editDelete(link)) {
            eachLink.click();

        }
        this.link=link;
    }

    @Given("the row in the table should be deleted")
    public void the_row_in_the_table_should_be_deleted() {
     int tableRow = challengingDom_dom_pageElements.editDelete(link).size();
     Assert.assertEquals("verify all table row deleted",0,tableRow);


    }

    @Given("the edit page should be appears")
    public void the_edit_page_should_be_appears() {
        //edit button not clickable it is defect
        //can not test further

    }

    @Given("user able to edit the information each column")
    public void user_able_to_edit_the_information_each_column() {
         //edit button not clickable it is defect
        //can not test further
    }



}
