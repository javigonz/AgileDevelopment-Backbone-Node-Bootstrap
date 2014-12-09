// Model User
// --------------------------------
define(['jquery', 'backbone'],

    function($, Backbone) {

      
        var User = Backbone.Model.extend({

            // Model Constructor
            initialize: function() {

            },

            // Default values for all of the Model attributes
            defaults: {

            },

            urlRoot: '/users',


            // Gets called automatically by Backbone when the set and/or save methods are called (Add your own logic)
            validate: function() {

            }

        });

        // Returns the Model class
        return User;

    }

);