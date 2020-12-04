import { Resolutions } from './collection';

Meteor.publish('resolutions',function(){


    return Resolutions.find({}, { sort: { createdAt: -1 }});
});