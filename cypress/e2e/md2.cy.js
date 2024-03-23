import AppointmentPage from "../pageObjects/appointment.page";

describe('CURA Healthcare', () => {

    context("Appointments", () => {

        beforeEach( () => {
            AppointmentPage.visit();
        });

        it ("Make appointment", () => {
            var facility = "Seoul CURA Healthcare Center";
            var comment = "CURA Healthcare Service";
            var date = "30";
            //ACTIONS
            AppointmentPage.makeButton.click();
            AppointmentPage.demoUsername().then(username => {
                AppointmentPage.usernameField.type(username);
            });
            AppointmentPage.demoPassword().then(password =>{
                AppointmentPage.passwordField.type(password);
            });
            AppointmentPage.loginButton.click();
            AppointmentPage.loginErr.should('not.exist');
            AppointmentPage.facilitySelector.select(facility);
            AppointmentPage.applyCheckbox.click();
            AppointmentPage.medicaidRadio.click();
            AppointmentPage.calendarIcon.click();
            AppointmentPage.day.contains(date).click();
            AppointmentPage.body.click();
            AppointmentPage.comment.type(comment);
            AppointmentPage.bookBtn.click();

            //VALIDATION
            AppointmentPage.confirmation.should('exist');
            AppointmentPage.confFacility.should("have.text",facility);
            AppointmentPage.confApply.should("have.text","Yes");
            AppointmentPage.confProgram.should("have.text","Medicaid");
            AppointmentPage.confDate.should("contain",date);
            AppointmentPage.confComment.should("have.text",comment);
        });

        it("Check appointment history", () => {
            AppointmentPage.makeButton.click();
            AppointmentPage.demoUsername().then(username => {
                AppointmentPage.usernameField.type(username);
            });
            AppointmentPage.demoPassword().then(password =>{
                AppointmentPage.passwordField.type(password);
            });
            AppointmentPage.loginButton.click();
            AppointmentPage.loginErr.should('not.exist');
            AppointmentPage.menuBtn.click();
            AppointmentPage.menu.should("have.class", "active");
            AppointmentPage.historyBtn.click();
            AppointmentPage.historyView.should('exist');
            AppointmentPage.historyView.should('have.descendants','p').contains('p', 'No appointment.');

        })
    })
})