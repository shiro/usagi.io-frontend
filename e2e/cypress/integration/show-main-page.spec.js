// returning false here prevents Cypress from failing the test
Cypress.on("uncaught:exception", (err, runnable) => {
    // the following error can be safely ignored
    if(err.message.includes("ResizeObserver loop"))
        return false;
    
    return true;
});

describe("Main page", () => {
    it("Verify the main page loads", () => {
        cy.visit("");
        
        // check redirect
        cy.location("pathname").should("eq", "/me");
        
        cy.contains("Matic Gačar");
        
        cy.screenshot();
    });
});
