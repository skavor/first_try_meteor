import { Template } from 'meteor/templating';

import './resolution.html';

Template.Resolution.helpers({
	canManageResolution() {
		return Meteor.userId() == this.authorId;
	}
});
