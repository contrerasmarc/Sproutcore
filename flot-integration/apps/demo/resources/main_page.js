// ==========================================================================
// Project:   Demo - mainPage
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals Demo */

// This page describes the main user interface for your application.  
Demo.mainPage = SC.Page.design({

    mainPane: SC.MainPane.design({
       
		childViews: 'add graph'.w(),

        add: SC.ButtonView.design({
            layout: { top: 20, right: 40, height: 24, width: 100 } ,
            title: 'AddData',
            action: 'addRandomData',
            target: 'Demo.graphController'
			//title: 'Force Plot',
			//action: 'forcePlot'
        }),

        graph: Flot.GraphView.design({
            layout: { top: 100, right: 40, bottom: 100, left: 40 } ,
            // Original line
			// dataBinding: 'Demo.graphController.arrangedObjects',   // Test: NO SUCCESS :-(
			// dataBinding: 'Demo.graphController',						// Test: NO SUCCESS :-(
			// TEST proposed by Maurits SUCCESS ! :-) 
			data: [
				{label: 'set1', data:[[0,0], [1,8],[2,2],[3,8],[4,-1]]}, 
				{label: 'set2', data:[[0,5], [1,-9],[2,4],[3,-6],[4,-7]]}
			],
            // Original line
			// optionsBinding: 'Demo.graphController.options',   // Test: NO SUCCESS :-(
			// TEST proposed by Maurits SUCCESS ! :-) 
			options: {
					        series: {
					            lines: { show: true },
					            points: { show: true }
					        },
					        yaxis: {
					            ticks: 1,
					            min: -10,
					            max: 10
					        },
					        grid: {
					            backgroundColor: { colors: ["#fff", "#eee"] }
					        }
			},
			
			debugInConsole: YES
	
			// didAppendToDocument: function() {
			//     this.displayDidChange();
			//     console.log('>> didATD pass');
			// 
			// },
			// didCreateLayer: function() {
			//     this.displayDidChange();
			//     console.log('>> didCL pass');
			// 
			// },
			// didShowInDocument: function() {
			//    	this.displayDidChange();
			// 	console.log('>> didSID pass');
			// }

		})
		
		// TEST proposed by Maurits
		// forcePlot: function(){
		//   Flot.plot(this.get('layer'), this.get('data').toArray(), this.get('options'));
		// 	console.log('>> forcePlot pass');
		// }

	})

});
