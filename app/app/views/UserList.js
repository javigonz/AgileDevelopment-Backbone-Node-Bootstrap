// View UserList
// -------------------------------
define(['jquery', 'backbone', 'app/collections/Users'],

    function($, Backbone, Users){

        var UserList = Backbone.View.extend({
            //Templetes to use
            template: 'user-list-template',

            // The DOM Element associated with this view
            el: '.content',

            // View constructor
            initialize: function() {
                // Calls the template
                var that = this;
                $.get('app/templates/' + 'user-list-template' + '.html', function(template){
                          that.myTemplate = _.template($('#user-list-template').html() + template);
                });

            },

            // View Event Handlers
            events: {

            },

            // Renders the view's template to the UI
            render: function() {

                var that = this;
                var users = new Users();
                users.fetch({
                    success: function(users){
                        
                        that.$el.html(that.myTemplate( {users: users.models} ));
                        
                    }
                });

            }

        });

        // Returns the View class
        return UserList;

    }

);