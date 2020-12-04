import { Meteor } from "meteor/meteor";
import { Slangs } from './collection';

Meteor.publish('slangs',function(){
    return Slangs.find({}, { sort: { createdAt: -1 }});
});