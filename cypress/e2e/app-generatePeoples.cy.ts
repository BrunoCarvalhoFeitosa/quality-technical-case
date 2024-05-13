class GeneratedPeoples {
    elements = {
        generatedPeopleName: () => cy.get("#people-name"),
        generatedPeopleUsername: () => cy.get("#people-username"),
        generatedPeoplePhone: () => cy.get("#people-phone"),
        generatedPeopleEmail: () => cy.get("#people-email"),
        generatedPeopleAddress: () => cy.get("#people-address"),
        generatedPeopleGeolocation: () => cy.get("#people-geolocation"),
        pagination: () => cy.get("#pagination")
    };
};

const generatedPeoples = new GeneratedPeoples();

describe("Generate Peoples API", () => {
    describe("Redirecting unauthenticated user to sign in page", () => {
        beforeEach(() => {
            cy.wait(2500);
        });

        it("Given I am on the generated peoples page", () => {
            cy.visit("/generate-peoples");
        });

        it("Then I should see that the next-auth.session-token cookie exists, go to next describe test", () => {
            cy.getCookie("next-auth.session-token").should("exist").then(() => {
                cy.log("Cookie exists and the user is authenticated, the next tests will give an error, but it is normal. Follow the next describe.");
            });
        });

        it("Then I should see that the next-auth.csrf-token cookie does not exists", () => {
            cy.getCookie("next-auth.csrf-token").should("not.exist");
        });

        it("Then I should see that the next-auth.session-token cookie does not exists", () => {
            cy.getCookie("next-auth.session-token").should("not.exist");
        });

        it("Then I should be redirected to home page", () => {
            cy.url().should("equal", "http://localhost:3000/sign-in");
            cy.pause();
        });
    });

    describe("Success get peoples data from api when user is authenticated", () => {
        beforeEach(() => {
            cy.wait(2500);
        });

        it("Given I am on the generated peoples page", () => {
            cy.visit("/generate-peoples");
        });

        it("When I see generated people name", () => {
            generatedPeoples.elements.generatedPeopleName().should("be.visible");
        });

        it("When I see generated people username", () => {
            generatedPeoples.elements.generatedPeopleUsername().should("be.visible");
        });

        it("When I see generated people phone", () => {
            generatedPeoples.elements.generatedPeoplePhone().should("be.visible");
        });

        it("When I see generated people email", () => {
            generatedPeoples.elements.generatedPeopleEmail().should("be.visible");
        });

        it("When I see generated people address", () => {
            generatedPeoples.elements.generatedPeopleAddress().should("be.visible");
        });

        it("When I see generated people geolocation", () => {
            generatedPeoples.elements.generatedPeopleGeolocation().should("be.visible");
        });

        it("When I see generated people pagination", () => {
            generatedPeoples.elements.pagination().should("be.visible");
        });
    });
});