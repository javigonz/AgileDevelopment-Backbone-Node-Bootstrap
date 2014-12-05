require.config({
	paths: {
		'jquery':      					'lib/jquery',
		'underscore':  					'lib/underscore',
		'backbone':    					'lib/backbone',
		'bootstrap':   					'lib/bootstrap',
		'jquery.serialize-object.min':  'lib/jquery.serialize-object.min',


	}
});

require(['jquery', 'underscore', 'backbone', 'bootstrap','jquery.serialize-object.min','app/views/UserList', 'app/views/EditUser', 'app/router/router'],
	function ($, _ , Backbone, Bootstrap, Serialize, UserList, EditUser, Router){

		$.ajaxPrefilter(function (options, originalOptions, jqXHR){
			//options.url ='http://jsonplaceholder.typicode.com' + options.url;
			options.url ='http://backbonejs-beginner.herokuapp.com' + options.url;
		})
		

		var router = new Router();
		/*var editUser = new EditUser();

		router.on('route:editUser', function(id){
			editUser.render({id: id});
		});*/

		Backbone.history.start();
	
		

	}
)