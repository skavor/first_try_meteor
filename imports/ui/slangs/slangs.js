
import { Template } from 'meteor/templating';
import {Slangs} from '../../api/slags/collection';
import SimpleSchema from 'simpl-schema';
import './slangs.html';
import './slang.html';
import './listslang.html';

AutoForm.setDefaultTemplate('bootstrap4')


const slangSchema = new SimpleSchema({
  slang:{
    type: String,
    label: "Name",
    max: 20
  },
  definition:{
    type: String,
    label: "Description",
    max: 250}
  },
  { tracker: Tracker }
);



Template.Slangs.events({
  'click #add':function(event){
       event.preventDefault();
       $('#slangFormModal').modal('show');    
  }
});

Template.NewSlangs.helpers({
  slangSchema(){
    return slangSchema;
  },
  currentSlang() {
    $('#slangFormModal').modal('hide');
  }
});

Template.Slangs.onCreated(function () {
  this.subscribe("slangs");
});

Template.Slangs.helpers({
  slangs: function(){
      return Slangs.find({}, { sort: { createdAt: -1 }});
  }
});



AutoForm.addHooks('insertSlangForm', {
  onSubmit: function(slang, updateDoc, currentDoc) {
    // You must call this.done()!
    //this.done(); // submitted successfully, call onSuccess
    //this.done(new Error('foo')); // failed to submit, call onError with the provided error
    //this.done(null, "foo"); // submitted successfully, call onSuccess with `result` arg set to "foo"
    self = this;
    e=this.event;
    e.preventDefault();

    Meteor.call('Slangs.add',slang.slang,slang.definition,(error,res) => {
             if(!error){
                self.done();
                $('#slangFormModal').modal('hide');
             }else{
               self.done(new Error(error.reason));
               alert(error.reason)
             }
          })  
  }});






// Template.NewSlangs.events({
//   'click #save': function(event) {
//     event.preventDefault();

//     var slang=event.target.slang.value;
//     var definition = event.target.definition.value;

//     Meteor.call('Slangs.add', slang,definition, function(error, result) {
//       if (error) {
//         alert(error);
//       }else{
//         console.log('A new slang added')
//       }
//     });

//     $('#slangFormModal').modal('hide');
//   }
// });



// Template.Slangs.events({
//   'submit .new-slang'(event){
//     event.preventDeafult();
//     const slang =event.target.slang.value;
//     const definition = event.target.definition.value;
    
//     Meteor.call('Slangs.add',slang,definition,function(error,res){
//       if(error){
//         alert('slang has not added');
//       }else{
//         //alert('slang has been added');
//         console.log(slang);
//         console.logh(definition);
//       }
//     })
//     event.target.slang.value='';
//     event.target.definition.value='';
//   },
//   'click .delete':function(event){
//     Meteor.call('Slangs.delete',this._id,function(error, result) {
//       if (error) {
//         alert('resolution not deleted');
//       } else {
//         alert('resolution has been deleted!');
//       }
//     });
//   event.stopImmediatePropagation();
//   event.stopPropagation();
    
//   }
// });

