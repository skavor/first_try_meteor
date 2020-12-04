import {Meteor} from 'meteor/meteor';
import { Slangs } from './collection';
 
Meteor.methods({
    'Slangs.add'(slang,definition) {
        if (this.userId) {
            const slangId = Slangs.insert({slang, definition, authorId: this.userId});
        }
    },
    'Slangs.update'(id,name,definition){
        if(this.userId){

            return Slangs.update({_id: id, authorId: this.userId},{
                $set:{slang:name,definition:definition}
            });
        }
    },
    'Slangs.delete'(id){
        if(this.userId){
            return Slangs.remove({_id:id, authorId: this.userId});
        }
    }
})