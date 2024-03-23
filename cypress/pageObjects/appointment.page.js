class AppointmentPage {

    static visit() {
        cy.visit("https://katalon-demo-cura.herokuapp.com/");
    }

    static get body() {
        return cy.get('body');
    }

    static get makeButton() {
        return cy.get("a#btn-make-appointment");
    }

    static demoUsername() {
       return cy.get('input[aria-describedby="demo_username_label"]').invoke('val');
    }

    static demoPassword() {
        return cy.get('input[aria-describedby="demo_password_label"]').invoke('val');
    }

    static get usernameField() {
        return cy.get("input#txt-username");
    }

    static get passwordField() {
        return cy.get("input#txt-password");
    }

    static get loginButton() {
        return cy.get("button#btn-login");
    }

    static get loginErr() {
        return cy.get("p.text-danger");
    }

    static get facilitySelector() {
        return cy.get("select#combo_facility");
    }

    static get applyCheckbox() {
        return cy.get("input#chk_hospotal_readmission");
    }

    static get medicaidRadio() {
        return cy.get("input#radio_program_medicaid");
    }

    static get calendarIcon() {
        return cy.get("span.glyphicon-calendar");
    }

    static get day() {
        return cy.get("td.day");
    }

    static get comment() {
        return cy.get("textarea#txt_comment");
    }

    static get bookBtn() {
        return cy.get("button#btn-book-appointment");
    }

    static get confirmation() {
        return cy.get("section#summary");
    }

    static get confFacility() {
        return cy.get("p#facility");
    }

    static get confApply() {
        return cy.get("p#hospital_readmission");
    }

    static get confProgram() {
        return cy.get("p#program");
    }

    static get confDate() {
        return cy.get("p#visit_date");
    }

    static get confComment() {
        return cy.get("p#comment");
    }
}

export default AppointmentPage