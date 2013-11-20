// ==========================================================================
// Project:   Demo.graphController
// Copyright: ©2010 My Company, Inc.
// ==========================================================================
/*globals Demo */

/** @class

  (Document Your Controller Here)

  @extends SC.Object
*/
Demo.graphController = SC.ArrayController.create(
/** @scope Demo.graphController.prototype */ {
	
	content: [
		SC.Object.create({label: 'set1', data:[[0,0], [1,8],[2,2],[3,5],[4,-1]]}),
		SC.Object.create({label: 'set2', data:[[0,5], [1,-9],[2,4],[3,-6],[4,-7]]})	
	] ,
	options: SC.Object.create({
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
	}) ,
	
	
	addRandomData: function() {
		var data = this.get('content').copy() ;
		data.objectAt(0).get('data').pushObject([data.objectAt(0).getPath('data.length') + 1, Math.random()*10]);
		data.objectAt(1).get('data').pushObject([data.objectAt(1).getPath('data.length') + 1, Math.random()*10]);
		this.set('content', data) ;
	}
	


}) ;
