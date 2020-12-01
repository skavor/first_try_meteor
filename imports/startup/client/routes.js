import { FlowRouter } from "meteor/kadira:flow-router";

import '/imports/ui/layouts/outside/outside.js';
import '../../ui/header/header';
import '../../ui/home/home';
import '../../ui/layouts/inside/inside';
import '/imports/ui/login/login.js';
import '../../ui/resolutions/resolutions';

FlowRouter.route('/', {
    action: function(params, queryParams) {
        BlazeLayout.render('OutsideLayout', {top: 'Header', main: 'Home'});
    }
});
FlowRouter.route('/login', {
    action: function(params, queryParams) {
        BlazeLayout.render('OutsideLayout', {top: 'Header', main: 'Login'});
    }
});

FlowRouter.route('/resolutions', {
    action: function(params, queryParams) {
        BlazeLayout.render('InsideLayout', {main: 'Resolutions', title: 'Resolutions Page'});
    }
});