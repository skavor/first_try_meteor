import { Template } from 'meteor/templating';



import '/imports/ui/welcome/welcome.js';
import '/imports/ui/resolutions/resolutions.js';
import '../imports/ui/slangs/slangs';
import '../imports/startup/both/accounts-config';

import './main.html';




Template.body.onCreated(function () {
	this.showResolutions = new ReactiveVar(true); 
})

Template.body.helpers({
	showResolutions() {
		return Template.instance().showResolutions.get();
	}
});
Template.body.events({
	'click #toggleResolutions':function (event, templateInstance) {
		templateInstance.showResolutions.set(!templateInstance.showResolutions.get())
	},
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

