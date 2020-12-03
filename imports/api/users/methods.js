import {Accounts} from 'meteor/accounts-base';
import {Meteor} from 'meteor/meteor';
import SimpleSchema from 'simpl-schema';


Meteor.methods({
    'register':function(email,password){
        // new SimpleSchema({
        //     email: SimpleSchema.RegEx.Email,
        //     password: {
        //         type: String,
        //         min: 8
        //     }
        // }).validate({email, password});

        accountId = Accounts.createUser({
            email,
            password,
            profile: {
                createdAt: new Date()
            }
        });
        return accountId;
         
        // Meteor.users.update({_id: accountId}, {$set: {roles: ['user']}})
    }

})

Accounts.onCreateUser((options, user) => {
    if (options.profile) {
        for (let key in options.profile) {
            user[key] = options.profile[key];
        }
    }

    return user;
});

// Accounts.validateLoginAttempt(({allowed, user}) => {
//     if (!allowed) {
//         return false;
//     }

//     if (user.emails[0].verified == false) {
//         throw new Meteor.Error(500, 'You must validate your email first');
//     }
// })
