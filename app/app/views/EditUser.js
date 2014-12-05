// View EditUser
// -------------------------------
define(["jquery", "backbone", "app/models/User"],

    function($, Backbone, User){

        //var router = new Router();

        var EditUser = Backbone.View.extend({
            //Templetes to use
            template: 'user-edit-template',

            // The DOM Element associated with this view
            el: ".content",

            // View constructor
            initialize: function() {

               // Calls the template
                var that = this;
                $.get("app/templates/" + 'user-edit-template' + ".html", function(template){
                          that.myTemplate = _.template($('#user-edit-template').html() + template);
                });

            },

            // View Event Handlers
            events: {
                'submit .user-edit-form' : 'saveUser',
                'click .delete'  : 'deleteUser'
            },

            // Renders the view's template to the UI
            render: function(options) {

                var that = this;
                //Edit User
                if (options.id) {
                    that.user = new User ({id: options.id});
                    that.user.fetch({
                        success: function (user) {  
                            that.$el.html(that.myTemplate({user: user}));
                        }
                    })
                }
                //New User
                else {
                    this.$el.html(this.myTemplate({user: null}));
                }
            
            },

            saveUser: function(ev){
                //Function to convert a Form in a serializable Object
                var userDetails = $(ev.currentTarget).serializeObject();
                var user = new User();
                user.save(userDetails, {
                    success: function (user){
                        //router.navigate('', {trigger: true}); 
                    }
                });
                return false;
            },

            deleteUser: function (ev){
                this.user.destroy({
                    success: function(){
                        //router.navigate('', {trigger: true});
                    }
                })
            },
        });

        // Returns the View class
        return EditUser;

    }

);