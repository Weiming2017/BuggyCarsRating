Feature: Profile Management

  As a Buggy Car Rating customer
  I want to be able to manage my own profile
  So I can view and update my profile information

  Scenario: Update profile
    Given I am existing customer
    When I update my first name
    Then my profile can be updated successfully
    