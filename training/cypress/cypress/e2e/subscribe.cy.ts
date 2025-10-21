describe("Newsletter Subscribe form", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000");
        cy.get("#__next").should("be.visible");
    });

    it("allows users to subscribe to the email list", () => {
        cy.getByData("email-input").type("chiraag@gmail.com");
        cy.getByData("submit-button").click();

        cy.getByData("success-message").should("exist").contains("chiraag@gmail.com");
    });

    it("does NOT allow an invalid email address", () => {
        cy.getByData("email-input").type("tom");
        cy.getByData("submit-button").click();
        cy.getByData("success-message").should("not.exist");
    });

    it("does not allow already registered email address", () => {
        cy.getByData("email-input").type("john@example.com");
        cy.getByData("submit-button").click();
        cy.getByData("server-error-message").contains("already exists");
    });
});