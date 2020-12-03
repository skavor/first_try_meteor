import { Template } from "meteor/templating";
import { Meteor } from 'meteor/meteor';
import './register.html';

Template.Register.events({

    'submit .form': function(event){
        event.preventDefault();
         const email=event.target.email.value;
         const password=event.target.password.value;
        // Accounts.createUser({
        //     email: email,
        //     password: password
        // });
        // alert('you have been registred')
        // console.log(email);
        // console.log(password);
        Meteor.call('register',email,password,function(err,result){
            if(err){
                console.log('error to register');
            }
            else{
                console.log('you have been registred');
            }
        })
       
    }
})