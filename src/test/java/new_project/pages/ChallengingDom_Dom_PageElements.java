package new_project.pages;

import new_project.utilities.Driver;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import java.util.List;

public class ChallengingDom_Dom_PageElements {
    public ChallengingDom_Dom_PageElements() {
        PageFactory.initElements(Driver.get(), this);
    }
    @FindBy(xpath = "//a[@class='button']")
    public WebElement blueButton;

    @FindBy(xpath = "//a[@class='button alert']")
    public WebElement redButton;

    @FindBy(xpath = "//a[@class='button success']")
    public WebElement greenButton;

    @FindBy(css = "#canvas")
    public WebElement answerText;


    @FindBy(partialLinkText = "#edit")
    public List<WebElement>  editButton;

    @FindBy(partialLinkText = "#delete")
    public List<WebElement>  deleteButton;

    public List<WebElement> editDelete (String link){
        String path = "#"+link;
       return Driver.get().findElements(By.partialLinkText(path));
    }

}
