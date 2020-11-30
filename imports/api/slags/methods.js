import { Slangs } from './collection';

Meteor.methods({
    'Slangs.add'(slang,definition) {
        // this.userId
        // Meteor.userId();
        // Meteor.user();
        //check if user is logged in
        if (this.userId) {
            const resolutionId = Slangs.insert({slang, definition, authorId: this.userId});
        }
    },
    'Slangs.delete'(id){
        if(this.userId){
            return Slangs.remove(id);
        }
    }
})