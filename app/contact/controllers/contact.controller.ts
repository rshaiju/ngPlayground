module App.Contact
{
    class ContactController implements App.Contact.Models.ContactModel{
        pageTitle: string;
        constructor(){
            this.pageTitle="Contact";
        }

    }
    angular.module('myApp').controller('contactCtrl', [ContactController]);
}
