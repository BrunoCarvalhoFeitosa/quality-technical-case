Feature: User Registration

    Scenario: Submitting an user with empty inputs values
        Given I am on the user registration page
        When I enter "${input.name}" in the name field
        When I enter "${input.email}" in the email field
        When I enter "${input.password}" in the password field
        Then I click the submit button
        Then I should see "Por favor, insira seu nome completo." message above the complete name field
        Then I should see "Por favor, insira um endereço de e-mail válido." message above the complete name field
        Then I should see "Sua senha deverá conter no mínimo 7 caracteres, 1 letra maiúscula, 1 minúscula e 1 número." message above the complete name field

    Scenario: User Error Registration
        Submitting an user with existing input values
        Given I am on the user registration page
        When I enter with a existing name value in database
        When I enter with a existing email value in database
        When I enter with a existing password value in database
        Then I click the submit button
        Then I should see toast error message appears

    Scenario: User Success Registration
        Submitting an user with valid input values
        Given I am on the user registration page
        When I enter "${input.name}" in the name field
        When I enter "${input.email}" in the email field
        When I enter "${input.password}" in the password field
        Then I click the submit button
        Then I should see toast error message appears

Feature: User Login

    Scenario: Submitting an user with empty inputs values
        Given I am on the user login page
        When I enter "${input.email}" in the email field
        When I enter "${input.password}" in the password field
        Then I click the submit button
        Then I should see "Por favor, insira um endereço de e-mail válido." message above the complete name field
        Then I should see "Sua senha deverá conter no mínimo 7 caracteres, 1 letra maiúscula, 1 minúscula e 1 número." message above the complete name field

    Scenario: Submitting an user with invalid values
        Given I am on the user login page
        When I enter with invalid email field value
        When I enter with invalid password field value
        Then I click the submit button
        Then I should see toast error message appears

    Scenario: Submitting an user with valid values
        Given I am on the user login page
        When I enter with existence email field value
        When I enter with existence password field value
        Then I click the submit button
        Then I should see next-auth.callback-url cookie with a value
        Then I should see next-auth.csrf-token cookie with a value
        Then I should see next-auth.session-token cookie with a value
        Then I should be redirected to home page after success authentication

Feature: Generate Peoples

    Scenario: Redirecting unauthenticated user to sign in page
        Given I am on the generated peoples page
        Then I should see that the next-auth.session-token cookie exists, go to next describe test
        Then I should see that the next-auth.session-token cookie exists, go to next test
        Then I should see that the next-auth.callback-url cookie does not exist
        Then I should see that the next-auth.csrf-token cookie does not exists
        Then I should see that the next-auth.session-token cookie does not exists
        Then I should be redirected to sing in page

    Scenario: Success get peoples data from api when user is authenticated
        Given I am on the generated peoples page
        When I see generated people name
        When I see generated people user name
        When I see generated people phone
        When I see generated people email
        When I see generated people address
        When I see generated people geolocation
        When I see generated pagination

Feature: Generate Images

    Scenario: Redirecting unauthenticated user to sign in page
        Given I am on the generated images page
        Then I should see that the next-auth.session-token cookie exists, go to next describe test
        Then I should see that the next-auth.callback-url cookie does not exist
        Then I should see that the next-auth.csrf-token cookie does not exists
        Then I should see that the next-auth.session-token cookie does not exists
        Then I should be redirected to sing in page

    Scenario: Success get images data from api when user is authenticated
        Given I am on the generated images page
        When I see generated image source
        When I see generated image title
        When I see generated image download button
        When I see generated pagination
        