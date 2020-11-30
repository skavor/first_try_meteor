
import { Template } from 'meteor/templating';
import {Slangs} from '../../api/slags/collection';
import './slangs.html';



Template.body.helpers({
  slangs(){
    return Slangs.find({},{sort:{createdAt:-1}});
  }
});
Template.body.events({
  'submit .new-slang'(event){
   // event.preventDeafult();

    const slang =event.target.slang.value;
    const definition = event.target.definition.value;
    
    Meteor.call('Slangs.add',slang,definition,function(error,res){
      if(!error){
        alert('salng has not added');
      }else{
        alert('slang has been added');
      }
    })
    event.target.slang.value='';
    event.target.definition.value='';
  },
  'click .delete':function(event){
    Meteor.call('Slangs.delete',this._id,function(error, result) {
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