import {Template} from 'meteor/templating';
import { Resolutions } from '../../api/resolutions/collection';

import '/imports/ui/resolution/resolution.js';
import './resolutions.html';

Template.Resolutions.onCreated(function () {
    this.subscribe("resolutions");
});

Template.Resolutions.helpers({
    resolutions: function(){
        return Resolutions.find({}, { sort: { createdAt: -1 }});
    }
});

Template.Resolutions.events({
	'submit .new-resolution':function(event){
        var name = event.target.name.value;
        var id = event.target.id.value;

        if (id == 'new') {
            //insert new resolution
            Meteor.call('Resolutions.add', name, function (error) {
                if (error) {
                    alert(error.reason);
                }
            })
            
        } else {
            //update resolution
            Meteor.call('Resolutions.update',id,name,function(error){
                if(error){
                    alert('resolution not updated');
                }else{
                    alert('resolution has been updated!');
                }
            });

        }

        event.target.name.value="";
        event.target.id.value="new";

        return false;
    },
	'click .update':function(event){
		const resolution = Resolutions.findOne({_id: this._id});

		$('#resolutionName').val(resolution.name);
		$('#resolutionId').val(resolution._id);

		event.stopImmediatePropagation();
		event.stopPropagation();
	},
    'click .delete':function(event){
				
		Meteor.call('Resolutions.delete',this._id,function(error, result) {
            if (error) {
                alert('resolution not deleted');
            } else {
                alert('resolution has been deleted!');
            }
        });

		event.stopImmediatePropagation();
		event.stopPropagation();	
	}
});