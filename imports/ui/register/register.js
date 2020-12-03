import { Template } from "meteor/templating";
import { Accounts } from 'meteor/accounts-base'
import './register.html';

Template.Register.events({

    'submit .form': function(event){
        event.preventDefault();
        const email=event.target.email.value;
        const password=event.target.password.value;
        Accounts.createUser({
            email: email,
            password: password
        });
        alert('you have been registred')
        console.log(email);
        console.log(password);
       
    }
})