Feature: Voting a model

  As a Buggy Car Rating customer
  I want to be able to search and vote for a car model
  So I can view and provide my vote for the model

  Scenario: Vote for a popular make car model
    Given I register as a new user
    And I login as the user
    When I navigate to the popular make Mito details page
    And I vote for it
    Then voting is successful
    And comment is added to the history
