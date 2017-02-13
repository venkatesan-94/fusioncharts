(function() {
		//controller function
		var myController = function($scope, $http, $filter, myService) {
			
			$scope.mlp = new Object();
			
			$http.get("data/multiLevelPieChart.json")
				.success(function (response) {
					$scope.mlpData = response;
					//console.log($scope.mlpData.length);
					
					var incidents = $filter('filter')($scope.mlpData, {TicketType: "Incident"}, true);
					//console.log(incidents);
					
					var P1Incidents = $filter('filter')(incidents, {priority: "P1"}, true);
					console.log(P1Incidents);
					var openP1Incidents = $filter('filter')(P1Incidents, {status: "OPEN"}, true);
					var closedP1Incidents = $filter('filter')(P1Incidents, {status: "CLOSED"}, true);
					//console.log(openP1Incidents);
					//console.log(closedP1Incidents);
					
					var P2Incidents = $filter('filter')(incidents, {priority: "P2"}, true);
					//console.log(P2Incidents);
					var openP2Incidents = $filter('filter')(P2Incidents, {status: "OPEN"}, true);
					var closedP2Incidents = $filter('filter')(P2Incidents, {status: "CLOSED"}, true);
					//console.log(openP2Incidents);
					//console.log(closedP2Incidents);
					
					var SR = $filter('filter')($scope.mlpData, {TicketType: "Service Request"}, true);
					//console.log(SR);
					
					var P1SR = $filter('filter')(SR, {priority: "P1"}, true);
					//console.log(P1SR);
					var openP1SR = $filter('filter')(P1SR, {status: "OPEN"}, true);
					var closedP1SR = $filter('filter')(P1SR, {status: "CLOSED"}, true);
					//console.log(openP1SR);
					//console.log(closedP1SR);
					
					var P2SR = $filter('filter')(SR, {priority: "P2"}, true);
					//console.log(P2SR);
					var openP2SR = $filter('filter')(P2SR, {status: "OPEN"}, true);
					var closedP2SR = $filter('filter')(P2SR, {status: "CLOSED"}, true);
					//console.log(openP2SR);
					//console.log(closedP2SR);
					
					var problems = $filter('filter')($scope.mlpData, {TicketType: "Problem"}, true);
					//console.log(problems);
					
					var P1problems = $filter('filter')(problems, {priority: "P1"}, true);
					//console.log(P1problems);
					var openP1problems = $filter('filter')(P1problems, {status: "OPEN"}, true);
					var closedP1problems = $filter('filter')(P1problems, {status: "CLOSED"}, true);
					//console.log(openP1problems);
					//console.log(closedP1problems);
					
					var P2problems = $filter('filter')(problems, {priority: "P2"}, true);
					//console.log(P2problems);
					var openP2problems = $filter('filter')(P2problems, {status: "OPEN"}, true);
					var closedP2problems = $filter('filter')(P2problems, {status: "CLOSED"}, true);
					//console.log(openP2problems);
					//console.log(closedP2problems);
					
					$scope.mlp = {
        			      "chart": {
        			          "caption" : "Tickets Overview",
        			          "bgcolor": "FFFFFF",
        			          "pieborderthickness": "2",
        			          "piebordercolor": "FFFFFF",
        			          "basefontsize": "8",
        			          "usehovercolor": "1",
        			          "hoverfillcolor": "CCCCCC",
        			          "showlabels": "1",
        			          "showvalue": "1",
        			          "showvalueintooltip": "1",
        			          "valueFontColor": "#000000",
        			          "showborder": "1",
        			          "exportEnabled" : "1",
        	                	    
        			          "toolTipColor": "#ffffff",
	        	              "toolTipBorderThickness": "0",
	        	              "toolTipBgColor": "#000000",
	        	              "toolTipBgAlpha": "80",
	        	              "toolTipBorderRadius": "2",
	        	              "toolTipPadding": "5",
        			        },
                        	"annotations": {
                                "autoScale": "1",
                                "groups": [{
                                  "id": "user-images",
                                  "items": [{
                                    "type": "text",
                                    "fillcolor": "#bfbfbf",
                                    "fontsize": "12",
                                    "text": "© Mindtree 2016",
                                    "x": "630",
                                    "y": "485"
                                  },{
                                      "type": "text",
                                      "fillcolor": "#bfbfbf",
                                      "fontsize": "13",
                                      "text": "ATLAS",
                                      "bold" : "1",
                                      "italic" : "1",
                                      "x": "40",
                                      "y": "485"
                                    }]
                                }]
                              },
        			        "category": [{
											"label": "Tickets Overview",
											"hovertext" : "Tickets Overview - "+$scope.mlpData.length+", $percentValue",
											"color": "#ccccff",
											"category": [{
											  "label": "Incidents",
											  "color": "#f8bd19",
											  "value" : incidents.length,
											  "hovertext": "Incidents - "+incidents.length+", $percentValue",
											  "category": [{
												"label": "Priority 1",
												"color": "#f8bd19",
												"value" : P1Incidents.length,
												"hovertext": "P1 - "+P1Incidents.length+", $percentValue",
												"category" : [{
													"label": "Open",
													"color": "#f8bd19",
													"value" : openP1Incidents.length,
													"hovertext": "P1 Open - "+openP1Incidents.length+", $percentValue",
													"_userValue": null,
													"_value": 1
												},{
													"label": "Close",
													"color": "#f8bd19",
													"value" : closedP1Incidents.length,
													"hovertext": "P1 closed- "+closedP1Incidents.length+", $percentValue",
													"_userValue": null,
													"_value": 1
												}],
												"_userValue": null,
												"_value": 1
												}, {
												"label": "Priority 2",
												"color": "#f8bd19",
												"value" : P2Incidents.length,
												"hovertext": "Priority 2 - "+P2Incidents.length+", $percentValue",
												"category" : [{
													"label": "Open",
													"color": "#f8bd19",
													"value" : openP2Incidents.length,
													"hovertext": "P2 open- "+openP2Incidents.length+", $percentValue",
													"_userValue": null,
													"_value": 1
												},{
													"label": "Close",
													"color": "#f8bd19",
													"value" : closedP2Incidents.length,
													"hovertext": "P2 closed- "+closedP2Incidents.length+", $percentValue",
													"_userValue": null,
													"_value": 1
												}],
												"_userValue": null,
												"_value": 1
												}],
											  "_userValue": null,
											  "_value": 1
											}, {
											  "label": "Service Requests",
											  "color": "#33ccff",
											  "hovertext": "Service Requests - "+SR.length+", $percentValue",
											  "value" : SR.length,
											  "category": [{
												"label": "Priority 1",
												"color": "#33ccff",
												"value" : P1SR.length,
												"hovertext": "P1 - "+P1SR.length+", $percentValue","category" : [{
													"label": "Open",
													"color": "#33ccff",
													"value" : openP1SR.length,
													"hovertext": "P1 open- "+openP1SR.length+", $percentValue",
													"_userValue": null,
													"_value": 1
												},{
													"label": "Close",
													"color": "#33ccff",
													"value" : closedP1SR.length,
													"hovertext": "P1 closed- "+closedP1SR.length+", $percentValue",
													"_userValue": null,
													"_value": 1
												}],
												"_userValue": null,
												"_value": 1
												}, {
												"label": "Priority 2",
												"color": "#33ccff",
												"value" : P2SR.length,
												"hovertext": "Priority 2 - "+P2SR.length+", $percentValue",
												"category" : [{
													"label": "Open",
													"color": "#33ccff",
													"value" : openP2SR.length,
													"hovertext": "P2 open- "+openP2SR.length+", $percentValue",
													"_userValue": null,
													"_value": 1
												},{
													"label": "Close",
													"color": "#33ccff",
													"value" : closedP2SR.length,
													"hovertext": "P2 closed- "+closedP2SR.length+", $percentValue",
													"_userValue": null,
													"_value": 1
												}],
												"_userValue": null,
												"_value": 1
												}],
											  "_userValue": null,
											  "_value": 1
											}, {
											  "label": "Problems",
											  "color": "#ffcccc",
											  "value" : problems.length,
											  "hovertext": "Problems - "+problems.length+", $percentValue",
											  "category": [{
												"label": "Priority 1",
												"color": "#ffcccc",
												"value" : P1problems.length,
												"hovertext": "P1 Open- "+P1problems.length+", $percentValue","category" : [{
													"label": "Open",
													"color": "#ffcccc",
													"value" : openP1problems.length,
													"hovertext": "P1 Open - "+openP1problems.length+", $percentValue",
													"_userValue": null,
													"_value": 1
												},{
													"label": "Close",
													"color": "#ffcccc",
													"value" : closedP1problems.length,
													"hovertext": "P1 closed- "+closedP1problems.length+", $percentValue",
													"_userValue": null,
													"_value": 1
												}],
												"_userValue": null,
												"_value": 1
											  }, {
												"label": "Priority 2",
												"color": "#ffcccc",
												"value" : P2problems.length,
												"hovertext": "Priority 2 - "+P2problems.length+", $percentValue","category" : [{
													"label": "Open",
													"color": "#ffcccc",
													"value" : openP2problems.length,
													"hovertext": "P2 Open - "+openP2problems.length+", $percentValue",
													"_userValue": null,
													"_value": 1
												},{
													"label": "Close",
													"color": "#ffcccc",
													"value" : closedP2problems.length,
													"hovertext": "P2 Closed - "+closedP2problems.length+", $percentValue",
													"_userValue": null,
													"_value": 1
												}],
												"_userValue": null,
												"_value": 1
											  }]
											}],
											"_userValue": null,
											"_value": 1
										  }]
        			      };
						  $scope.$watch(function(scope) {
							return $scope.mlp
						});
				});
			
			$scope.exportFC = function () {
                var types = { 
                    "exportpdf": "pdf",
                    "exportsvg": "svg",
                    "exportpng": "png"
                };
                if (e && e.sender && e.sender.exportChart) {
                	console.log(e +"   "+ e.sender +"   "+ e.sender.exportChart);
                     e.sender.exportChart({
                        exportFileName: "FC_sample_export",
                        exportFormat: types[pdf]
                    });
                }
            };
			
			
            $scope.data = {
                    "chart": {
                        "caption": "Scatter chart",
                        "subcaption": "Applications based on Domains",
                        "yaxisname": "Domain 2",
                        "xaxisname": "Domain 1",
                        
                        "xaxismaxvalue": "5",
                        "xaxisminvalue": "0",
                        "yaxismaxvalue": "5",
                        "yaxisminvalue": "0",
                        "bgcolor": "FFFFFF",
                        "showborder": "0",
                        
                        "numDivlines": "0",
                        "numVDivLines" : "0",
                        "showValues":"1",
                        
                        "drawQuadrant" : "1",
                        "quadrantLineAlpha" : "80",
                        "quadrantLineThickness" : "3",
                        
                        "quadrantLabelTL": "Low Price / High Sale",
                        "quadrantLabelTR": "High Price / High Sale",
                        "quadrantLabelBL": "Low Price / Low Sale",
                        "quadrantLabelBR": "High Price / Low Sale"
                    },
                    "dataset": [
                        {
                            "drawline": "0",
                            "seriesname": "Applications",
                            "color": "#6baa01",
                            "anchorsides": "2",
                            "anchorradius": "10",
                            "anchorbgcolor": "#6baa01",
                            "anchorbordercolor": "#6baa01",
                            "data": [ 
                                {
                                    "x": "1",
                                    "y": "1",
                                    "displayValue" : "First"
                                }, 
                                {
                                    "id": "TV_23",
                                    "x": "2.3",
                                    "y": "3"
                                }, 
                                {
                                    "id": "TV_24",
                                    "x": "3.2",
                                    "y": "1.6"
                                }, 
                                {
                                    "id": "TV_25",
                                    "x": "4.2",
                                    "y": "3.8"
                                }, 
                                {
                                    "id": "TV_26",
                                    "x": "3.3",
                                    "y": "2.9"
                                }
                            ]
                        }
                    ]
                };
            
            
			/*$http.get("data/columnChart.json");
			  $http.get("data/doughnutChart.json")*/
		};
		//adding your function as controller
		//first parameter is controller name and second parameter is function name
		angular.module('myApp').controller('myController',myController);	
	}()//self invoking automatically adds controller to your app
);