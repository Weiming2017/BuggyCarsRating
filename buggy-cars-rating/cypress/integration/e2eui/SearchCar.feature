Feature: Search for a car rating

  As a Buggy Car Rating customer
  I want to be able to search for a car
  So I can view the rating information

  Scenario: Search for a car
    Given I login Buggy Car Rating
    When searching for the popular make
    Then I can find Mito from the list
    