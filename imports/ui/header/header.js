import './header.html';

Template.Header.events({
    'click .logout'(event) {
        event.preventDefault();
        Meteor.logout((error) => {
            if (!error) {
                FlowRouter.go('/login');
            }
        });
    }
})