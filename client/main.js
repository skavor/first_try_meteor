import { Template } from 'meteor/templating';

import {Resolutions} from '/imports/api/resolutions/collection.js';

import '/imports/ui/welcome/welcome.js';
import '/imports/ui/resolution/resolution.js';
import '../imports/startup/both/accounts-config';

import './main.html';
import '../imports/ui/slangs/slangs'

Meteor.subscribe("resolutions");

Template.body.helpers({
	resolutions: function(){
		return Resolutions.find({}, { sort: { createdAt: -1 }});
	}
	
});
Template.body.events({
	'submit .new-resolution':function(event){
		var name = event.target.name.value;
		var id = event.target.id.value;

		if (id == 'new') {
			//insert new resolution
			Meteor.call('Resolutions.add', name, function (error, result) {
				if (error) {
					alert(error.reason);
				}
			})
			
		} else {
			//update resolution
			Meteor.call('Resolutions.update',id,name,function(error,result){
				if(error){
					alert('resolution not updated');
				}else{
					alert('resolution has been updated!');
				}
			});

		}
		event.target.name.value="";
		event.target.id.value="new";
		console.log(name);

      return false;
		

	}

});

