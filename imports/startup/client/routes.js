import { FlowRouter } from "meteor/kadira:flow-router";

import '/imports/ui/layouts/outside/outside.js';
import '../../ui/home/home';
import '../../ui/layouts/inside/inside';
import '/imports/ui/login/login.js';
import '../../ui/register/register';
import '../../ui/resolutions/resolutions';

const privateRoutes = ['resolutions'];
const notLoggedInRoutes = ['login','register'];

FlowRouter.triggers.enter([function () {
    if (Meteor.userId()) {
        FlowRouter.go('resolutions');
    }
}], {only: notLoggedInRoutes});

FlowRouter.triggers.enter([function () {
    if (!Meteor.userId()) {
        FlowRouter.go('login');
    }
}], {only: privateRoutes});


FlowRouter.route('/', {
    name: 'home',
    action: function(params, queryParams) {
        BlazeLayout.render('OutsideLayout', {main: 'Home'});
    }
});
FlowRouter.route('/login', {
    name: 'login',
    action: function(params, queryParams) {
        BlazeLayout.render('OutsideLayout', {main: 'Login'});
    }
});
FlowRouter.route('/register',{
    name: 'register',
    action:function(){
        BlazeLayout.render('OutsideLayout', {main: 'Register'})
    }
});

FlowRouter.route('/resolutions', {
    name: 'resolutions',
    action: function(params, queryParams) {
        BlazeLayout.render('InsideLayout', { top:'Header',main: 'Resolutions'});
    }
});