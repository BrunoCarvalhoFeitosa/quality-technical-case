class GeneratedImages {
    elements = {
        generatedImageSource: () => cy.get("#image-source"),
        generatedImageTitle: () => cy.get("#image-title"),
        generatedImageDownloadButton: () => cy.get("#image-download-button"),
        pagination: () => cy.get("#pagination")
    };
};

const generatedImages = new GeneratedImages();

describe("Generate Images", () => {
    describe("Redirecting unauthenticated user to sign in page", () => {
        beforeEach(() => {
            cy.wait(2500);
        });

        it("Given I am on the generated images page", () => {
            cy.visit("/generate-images");
        });

        it("Then I should see that the next-auth.session-token cookie exists, go to next describe test", () => {
            cy.getCookie("next-auth.session-token").should("exist").then(() => {
                cy.log("Cookie exists and the user is authenticated, the next tests will give an error, but it is normal. Follow the next describe.");
            });
        });

        it("Then I should see that the next-auth.callback-url cookie does not exists", () => {
            cy.getCookie("next-auth.callback-url").should("not.exist");
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

    describe("Success get images data from api when user is authenticated", () => {
        beforeEach(() => {
            cy.wait(2500);
        });

        it("Given I am on the generated images page", () => {
            cy.visit("/generate-images");
        });

        it("When I see generated image source", () => {
            generatedImages.elements.generatedImageSource().should("be.visible");
        });

        it("When I see generated image title", () => {
            generatedImages.elements.generatedImageTitle().should("be.visible");
        });

        it("When I see generated image download button", () => {
            generatedImages.elements.generatedImageDownloadButton().should("be.visible");
        });

        it("When I see generated image pagination", () => {
            generatedImages.elements.pagination().should("be.visible");
        });
    });
});