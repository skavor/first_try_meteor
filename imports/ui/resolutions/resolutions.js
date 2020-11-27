import './resolutions.html';
import {Template} from 'meteor/templating';

import '/imports/ui/resolution/resolution.js';
import { Resolutions } from '../../api/resolutions/collection';

Template.Resolutions.onCreated(function () {
    this.subscribe("resolutions");
});

Template.Resolutions.helpers({
    resolutions: function(){
        return Resolutions.find({}, { sort: { createdAt: -1 }});
    }
});