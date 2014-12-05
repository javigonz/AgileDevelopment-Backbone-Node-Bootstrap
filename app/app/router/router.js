// Router
// ----------------
define(['jquery', 'backbone','app/views/UserList','app/views/EditUser'],

    function($, Backbone, UserList, EditUser) {

        var userList = new UserList();
        var editUser = new EditUser();

        var Router = Backbone.Router.extend({

            initialize: function() {


            },
                         

            // All of your Backbone Routes (add more)
            routes: {

                // When there is no hash on the url, the home method is called
                '':           'home',
                'new':        'editUser',
                'edit/:id':   'editUser',

            },


            home: function() {
                userList.render();
            },

            editUser: function(id) {
                editUser.render({id: id});
            },


        });

        // Returns the DesktopRouter class
        return Router;

    }

);