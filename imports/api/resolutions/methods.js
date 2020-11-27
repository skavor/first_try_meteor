import { Resolutions } from './collection'


Meteor.methods({
    'Resolutions.add'(name) {
        // this.userId
        // Meteor.userId();
        // Meteor.user();
        //check if user is logged in
        if (this.userId) {
            const resolutionId = Resolutions.insert({name, createdAt: new Date, authorId: this.userId});
        }
    },
    'Resolutions.update'(id,name){

        if(this.userId){
            return Resolutions.update({_id: id},{
                $set:{name:name}
            });
        }
    },
    'Resolutions.delete'(id){
        if(this.userId){
            return Resolutions.remove(id);
        }
    }
})