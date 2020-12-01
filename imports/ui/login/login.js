import { Template } from 'meteor/templating';
import { Meteor } from 'meteor/meteor';
import './login.html';

Template.Login.events({
    'submit form'(event) {
        event.preventDefault();
        var email = event.target.email.value;
        var password = event.target.password.value;
        Meteor.loginWithPassword(email,password,function(err,res){
            if(!err){
              FlowRouter.go('/resolutions');
            }else{
               FlowRouter.go('/login');
            }
        })
    }
})