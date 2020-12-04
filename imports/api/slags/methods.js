import {Meteor} from 'meteor/meteor';
import { Slangs } from './collection';
 
Meteor.methods({
    'Slangs.add'(slang,definition) {
    if (this.userId) {
            const slangId = Slangs.insert({slang, definition, authorId: this.userId});
        }
    },
    'Slangs.delete'(id){
        if(this.userId){
            return Slangs.remove(id);
        }
    }
})