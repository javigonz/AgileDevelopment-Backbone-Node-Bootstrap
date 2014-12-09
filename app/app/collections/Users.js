// Collection Users
// ---------------------
define(['jquery','backbone','app/models/User'],

  function($, Backbone, User) {

    // Creates a new Backbone Collection class object
    var Users = Backbone.Collection.extend({

      // Tells the Backbone Collection that all of it's models will be of type Model (listed up top as a dependency)
      model: User,

      url: '/users'

    });

    // Returns the Model class
    return Users;

  }

);