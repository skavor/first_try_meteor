import { Template } from 'meteor/templating';
import {Resolutions} from '../../api/resolutions/collection';
//import '../../../client/main.html';
import './resolution.html';
//import '../../../client/main';

Template.resolution.events({
	
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
