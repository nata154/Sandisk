
Feature: Running Cucumber with Protractor

   Scenario Outline: Protractor and Cucumber Test
      Given I am on "home" page
      When I get title of current page
      Then The title should be "<title>"

      Examples:
         | title                                                    |
         | SanDisk  Global Leader in Flash Memory Storage Solutions |
