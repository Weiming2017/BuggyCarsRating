Feature: User registration

  As a Buggy Car Rating customer
  I want to be able to register as a new online customer
  So I can access the Buggy Car Rating site

  Scenario: Register as a new user
    Given I open Buggy Car Rating page
    When I register as a new user
    Then the registration is successful
