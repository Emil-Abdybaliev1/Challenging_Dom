

Feature:

  Background:
    Given user open "Challenging DOM" page
    Then user on the The Internet page
  @smoke
  Scenario:
    Given user click on blue button
    Given the answer at the bottom should be change
    When the button wording should be change accordingly


    Scenario:

      Given user click on red button
      Given the answer at the bottom should be change
      When the button wording should be change accordingly

  Scenario:

    Given user click on green button
    Given the answer at the bottom should be change
    When the button wording should be change accordingly

  Scenario:

    Given user click on "delete" button
    Given the row in the table should be deleted

  Scenario:

    Given user click on "edit" button
    Given the edit page should be appears
    And user able to edit the information each column