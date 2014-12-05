require.config({
	paths: {
		'jquery':      					'js/lib/jquery',
		'underscore':  					'js/lib/underscore',
		'backbone':    					'js/lib/backbone',
		'templates':   					'templates/templates',
		'bootstrap':   					'js/lib/bootstrap',
		'jquery.serialize-object.min':  'js/lib/jquery.serialize-object.min',

	}
});

require(['jquery', 'underscore', 'backbone', 'templates', 'bootstrap','jquery.serialize-object.min'],
	function ($, _ , Backbone, templates, Bootstrap, Serialize){

		$.ajaxPrefilter(function (options, originalOptions, jqXHR){
			//options.url ='http://jsonplaceholder.typicode.com' + options.url;
			options.url ='http://backbonejs-beginner.herokuapp.com' + options.url;
		})

	
		////////////////Models
		var User = Backbone.Model.extend({
			urlRoot: '/users'
		});


		////////////////Collections
		var Users = Backbone.Collection.extend({
			url: '/users'
		});
		
		////////////////Views
		var UserList = Backbone.View.extend({
			el: '.content',

			initialize: function() { 
				this.nodeTemplate = _.template($('#user-list-template').html());
			},

			render: function (){
				var that = this;
				var users = new Users();
				users.fetch({
					success: function(users){
						that.$el.html(that.nodeTemplate( {users: users.models} ));
						
					}
				});
			},	

		});


		var EditUser = Backbone.View.extend({
			el: '.content',

			initialize : function() { 
				this.nodeTemplate = _.template($('#user-edit-template').html());
			},

			render: function(options){
				var that = this;
				//Edit User
				if (options.id) {
					that.user = new User ({id: options.id});
					that.user.fetch({
						success: function (user) {	
							that.$el.html(that.nodeTemplate({user: user}));
						}
					})
				}
				//New User
				else {
					this.$el.html(this.nodeTemplate({user: null}));
				}
			},

			events: {
				'submit .edit-user-form' : 'saveUser',
				'click .delete'  : 'deleteUser'
			},

			saveUser: function(ev){
				//Function to convert a Form in a serializable Object
				var userDetails = $(ev.currentTarget).serializeObject();
				var user = new User();
				user.save(userDetails, {
					success: function (user){
						router.navigate('', {trigger: true});
					}
				});
				return false;
			},

			deleteUser: function (ev){
				this.user.destroy({
					success: function(){
						router.navigate('', {trigger: true});
					}
				})
			},
		});

		var userList = new UserList();
		var editUser = new EditUser();
		
		

		////////////////Routers
		var Router = Backbone.Router.extend({
			routes: {
				'':    			'home',
				'new': 			'editUser',
				'edit/:id': 	'editUser'
			}
		});

		var router = new Router();

		router.on('route:home', function(){
			userList.render();
		});

		router.on('route:editUser', function(id){
			editUser.render({id: id});
		});

		Backbone.history.start();

	}
)