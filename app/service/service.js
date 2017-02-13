(function() {
		var myService = function($http) {
			
			this.getData = function(){
				return "Data";
			}
			var mlpData,mlp;
			
			this.mlpChartData = function(){
						  
				
			}
			
		};
		angular.module('myApp').service('myService',myService);	
	}()//self invoking automatically adds controller to your app
);