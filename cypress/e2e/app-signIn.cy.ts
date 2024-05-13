class RegisterFormSignIn {
    elements = {
        inputEmail: () => cy.get("#email"),
        inputEmailMessageError: () => cy.get("#email-message-error"),
        inputPassword: () => cy.get("#password"),
        inputPasswordMessageError: () => cy.get("#password-message-error"),
        buttonSubmit: () => cy.get("button[type='submit']"),
        toastMessage: () => cy.get(".Toastify__toast-body div:nth-of-type(2)")
    };

    typeEmail(text: string) {
        if (!text) return;

        this.elements.inputEmail().type(text);
    };

    typePassword(text: string) {
        if (!text) return;

        this.elements.inputPassword().type(text);
    };

    onClickSubmit() {
        this.elements.buttonSubmit().click();
    };
};

const registerFormSignIn = new RegisterFormSignIn();

describe("User Login", () => {
    describe("Submitting an user with empty inputs values", () => {
        const input = {
            email: "",
            password: ""
        };

        beforeEach(() => {
            cy.wait(2500);
        });

        it("Given I am on the user sign in page", () => {
            cy.visit("/sign-in");
        });

        it(`When I enter "${input.email}" in the email field`, () => {
            registerFormSignIn.typeEmail(input.email);
        });

        it(`When I enter "${input.password}" in the password field`, () => {
            registerFormSignIn.typePassword(input.password);
        });

        it("Then I click the submit button", () => {
            registerFormSignIn.onClickSubmit();
        });

        it(`Then I should see "Por favor, insira um endereço de e-mail válido." message above the complete name field`, () => {
            registerFormSignIn.elements.inputEmailMessageError().should("have.text", "Por favor, insira um endereço de e-mail válido.")
        });

        it(`Then I should see "Sua senha deverá conter no mínimo 7 caracteres, 1 letra maiúscula, 1 minúscula e 1 número." message above the complete name field`, () => {
            registerFormSignIn.elements.inputPasswordMessageError().should("have.text", "Sua senha deverá conter no mínimo 7 caracteres, 1 letra maiúscula, 1 minúscula e 1 número.")
        });
    });

    describe("Submitting an user with invalid values", () => {
        const input = {
            email: "bruno.carvalho999@mail.com",
            password: "@Bruno10"
        };

        beforeEach(() => {
            cy.wait(2500);
        });

        it("Given I am on the user login page", () => {
            cy.visit("/sign-in");
        });

        it("When I enter with invalid email field value", () => {
            registerFormSignIn.elements.inputEmail().type(input.email);
        });

        it("When I enter with invalid password field value", () => {
            registerFormSignIn.elements.inputPassword().type(input.password);
        });

        it("Then I click the submit button", () => {
            registerFormSignIn.onClickSubmit();
        });

        it("Then I should see toast error message appears", () => {
            registerFormSignIn.elements.toastMessage().should("have.text", "Erro ao autenticar usuário.");
        });
    });

    describe("Submitting an user with valid values", () => {
        const input = {
            email: "bruno.carvalho@mail.com",
            password: "@Bruno10"
        };

        beforeEach(() => {
            cy.wait(2500);
        });

        it("Given I am on the user login page", () => {
            cy.visit("/sign-in");
        });

        it("When I enter with valid email field value", () => {
            registerFormSignIn.elements.inputEmail().type(input.email);
        });

        it("When I enter with valid password field value", () => {
            registerFormSignIn.elements.inputPassword().type(input.password);
        });

        it("Then I click the submit button", () => {
            registerFormSignIn.onClickSubmit();
        });

        it("Then I should see next-auth.callback-url cookie with a value", () => {
            cy.getCookie("next-auth.callback-url").should("exist");
        });
        
        it("Then I should see next-auth.csrf-token cookie with a value", () => {
            cy.getCookie("next-auth.csrf-token").should("exist");
        });
        
        it("Then I should see next-auth.session-token cookie with a value", () => {
            cy.getCookie("next-auth.session-token");
        });

        it("Then I should be redirected to home page after success authentication", () => {
            cy.url().should("equal", "http://localhost:3000/")
        });
    });
})
