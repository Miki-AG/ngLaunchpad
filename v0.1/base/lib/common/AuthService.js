angular.module('ngMApp')
	.service('AuthService',
		function($http) {

			var isRegister;

			var user = {
				id: -1,
				username: null,
				session_key: null,
		        csrf_key: null
			};

			var that = this;

			return {

				userIsLoggedIn : function (){
					return (user)? user : false;
				},

				setDataExp: function (data) {

				},
				getUser: function () {
				  	return user;
				},
				setUser : function(aUser){
        			user = aUser;
    			},
				setToRegister: function(){
					isRegister = true;
				},
				setToLogin: function(){
					isRegister = false;
				},
				getIsRegister: function(){
					return isRegister;
		      	},


		    	logoff: function(){
					user = null
		    	},

		      	login: function(username, password, callback) {
			      	var data = {
		            	'LGN_LOGIN_Username': username,
		            	'LGN_LOGIN_Password': password
		            }
		            var _this = this;
		            $http.post('/plogin', data)
		                .success(function (response) {
		                	if (response.resp == 'SUCCESS') {
		                		var aUser   = {
									id: response.user_id,
			                		username: response.user_username,
			                		session_key: response.session_key,
			                		csrf_key: response.csrf_key
		                		}

		                		_this.setUser(aUser);
		                		//console.log(_this.isLoggedIn())
          					}
          					else {
		                		_this.user = null
          					}
							console.log('---------------------')

		                    callback(response);
		                });
			        }
		    	};

			});


