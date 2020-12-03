import {Accounts} from 'meteor/Accounts';
import {Meteor} from 'meteor/meteor';
import SimpleSchema from 'simpl-schema';


Meteor.methods({
    'Users.add'(email,password){
        new SimpleSchema({
            email: SimpleSchema.RegEx.Email,
            password: {
                type: String,
                min: 8
            }
        }).validate({email, password});

        accountId = Accounts.createUser({
            email,
            password,
            profile: {
                name: 'Zied',
                roles: ['user']
            }
        });

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

Accounts.validateLoginAttempt(({allowed, user}) => {
    if (!allowed) {
        return false;
    }

    if (user.emails[0].verified == false) {
        throw new Meteor.Error(500, 'You must validate your email first');
    }
})
