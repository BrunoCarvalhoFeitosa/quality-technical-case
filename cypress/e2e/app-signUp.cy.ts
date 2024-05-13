class RegisterFormSignUp {
    elements = {
        inputName: () => cy.get("#name"),
        inputNameMessageError: () => cy.get("#name-message-error"),
        inputEmail: () => cy.get("#email"),
        inputEmailMessageError: () => cy.get("#email-message-error"),
        inputPassword: () => cy.get("#password"),
        inputPasswordMessageError: () => cy.get("#password-message-error"),
        buttonSubmit: () => cy.get("button[type='submit']"),
        toastMessage: () => cy.get(".Toastify__toast-body div:nth-of-type(2)")
    };

    typeName(text: string) {
        if (!text) return;

        this.elements.inputName().type(text);
    };

    typeEmail(text: string) {
        if (!text) return;

        this.elements.inputEmail().type(text);
    };

    typePassword(text: string) {
        if (!text) return;

        this.elements.inputPassword().type(text);
    };

    clickSubmit() {
        this.elements.buttonSubmit().click();
    };

    handleRegister(name: string, email: string, password: string) {
        this.elements.buttonSubmit().click();

        cy.request({
            method: 'POST',
            url: "/api/register",
            headers: {
                'Content-Type': 'application/json'
            },
            body: {
                name,
                email,
                password
            },
            failOnStatusCode: false
        }).then((response) => {
            expect(response.body)
            expect(response.status).to.equal(200);
        });
    };
};

const registerFormSignUp = new RegisterFormSignUp();

describe("User Registration", () => {
    describe("Submitting an user with empty inputs values", () => {
        const input = {
            name: "",
            email: "",
            password: ""
        };

        beforeEach(() => {
            cy.wait(2500);
        });

        it("Given I am on the user registration page", () => {
            cy.visit("/sign-up");
        });

        it(`When I enter "${input.name}" in the name field`, () => {
            registerFormSignUp.typeName(input.name);
        });

        it(`When I enter "${input.email}" in the email field`, () => {
            registerFormSignUp.typeEmail(input.email);
        });

        it(`When I enter "${input.password}" in the password field`, () => {
            registerFormSignUp.typePassword(input.password);
        });

        it("Then I click the submit button", () => {
            registerFormSignUp.clickSubmit();
        });

        it(`Then I should see "Por favor, insira seu nome completo." message above the complete name field`, () => {
            registerFormSignUp.elements.inputNameMessageError().should("have.text", "Por favor, insira seu nome completo.");
        });

        it(`Then I should see "Por favor, insira um endereço de e-mail válido." message above the complete name field`, () => {
            registerFormSignUp.elements.inputEmailMessageError().should("have.text", "Por favor, insira um endereço de e-mail válido.")
        });

        it(`Then I should see "Sua senha deverá conter no mínimo 7 caracteres, 1 letra maiúscula, 1 minúscula e 1 número." message above the complete name field`, () => {
            registerFormSignUp.elements.inputPasswordMessageError().should("have.text", "Sua senha deverá conter no mínimo 7 caracteres, 1 letra maiúscula, 1 minúscula e 1 número.")
        });
    });

    describe("User Error Registration", () => {
        describe("Submitting an user with existing input values", () => {
            const input = {
                name: "Bruno Carvalho Feitosa",
                email: "bruno.carvalho01@mail.com",
                password: "@Bruno10"
            };

            beforeEach(() => {
                cy.wait(2500);
            });

            it("Given I am on the user registration page", () => {
                cy.visit("/sign-up");
            });

            it("When I enter with a existing name value in database", () => {
                registerFormSignUp.typeName(input.name);
            });

            it("When I enter with a existing email value in database", () => {
                registerFormSignUp.typeEmail(input.email);
            });

            it("When I enter with a existing password value in database", () => {
                registerFormSignUp.typePassword(input.password);
            });

            it("Then I click the submit button", () => {
                registerFormSignUp.elements.buttonSubmit().click();
            });

            it("Then I should see toast error message appears", () => {
                registerFormSignUp.elements.toastMessage().should("have.text", "Erro ao cadastrar usuário.");
            });
        });
    });

    describe("User Success Registration", () => {
        describe("Submitting an user with valid input values", () => {
            const input = {
                name: "Bruno Carvalho Feitosa",
                email: "bruno.carvalho04@mail.com",
                password: "@Bruno10"
            };

            beforeEach(() => {
                cy.wait(2500);
            });

            it("Given I am on the user registration page", () => {
                cy.visit("/sign-up");
            });

            it(`When I enter "${input.name}" in the name field`, () => {
                registerFormSignUp.typeName(input.name);
            });

            it(`When I enter "${input.email}" in the email field`, () => {
                registerFormSignUp.typeEmail(input.email);
            });

            it(`When I enter "${input.password}" in the password field`, () => {
                registerFormSignUp.typePassword(input.password);
            });

            it("Then I click the submit button", () => {
                registerFormSignUp.elements.buttonSubmit().click();
            });

            it("Then I should see toast success message appears", () => {
                registerFormSignUp.elements.toastMessage().should("have.text", "Usuário cadastrado com sucesso.");
            });
        })
    })
})
