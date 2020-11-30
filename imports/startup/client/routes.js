import { FlowRouter } from "meteor/kadira:flow-router";

import '/imports/ui/layouts/outside/outside.js';
import '../../ui/layouts/inside/inside';
import '/imports/ui/login/login.js';
import '../../ui/resolutions/resolutions';

FlowRouter.route('/login', {
    action: function(params, queryParams) {
        BlazeLayout.render('OutsideLayout', {main: 'Login', title: 'Login Page'});
    }
});

FlowRouter.route('/resolutions', {
    action: function(params, queryParams) {
        BlazeLayout.render('InsideLayout', {main: 'Resolutions', title: 'Resolutions Page'});
    }
});