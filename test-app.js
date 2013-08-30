Posts = new Meteor.Collection('posts');

if (Meteor.isClient) {
  Router.configure({
    loadingTemplate: 'loading'
  });
  Router.map(function() {
    this.route('one', {
      path: '/',
      waitOn: function() { return Meteor.subscribe('posts'); }
    });
    
    this.route('two', {
      waitOn: function() { return Meteor.subscribe('posts'); }
    })
    
  });
}

if (Meteor.isServer) {
  Meteor.publish('posts', function() {
    console.log('publishing...');
    return Posts.find();
  });
}
