// ==========================================================================
// Project:   Flot.GraphView
// Copyright: ©2010 Bo Xiao <mail.xiaobo@gmail.com>, Inc.
// ==========================================================================
/*globals Flot */

/** @class

  (Document Your View Here)

  @extends SC.View
*/

sc_require('core.js');

Flot.GraphView = SC.View.extend(
/** @scope Flot.GraphView.prototype */ {
	series: null,
	data: null ,
	options: null ,
	debugInConsole: YES , 
	render: function(context, firstTime) {

		if( !this.get('layer') || ! this.get('isVisibleInWindow')) return;

		if((this.get('frame').width <= 0) || (this.get('frame').height <= 0)) return;

		if( ($(this.get('layer')).width() <= 0)
				|| ($(this.get('layer')).height() <= 0)) return;

		var data = this.get('data'),
		series = this.get('series');
		if (!SC.empty(data)) {
		if (this.debugInConsole) console.log(this.get('layer'));
			Flot.plot(this.get('layer'), data.toArray(),
				this.get('options'));
			if (this.debugInConsole) console.log('render data');
		} else if (!SC.empty(series)) {
			Flot.plot(this.get('layer'), series.toArray(),
				this.get('options'));
			if (this.debugInConsole) console.log('render series');
		} else {
			if (this.debugInConsole) console.warn('data was empty');
		}
		sc_super();
	},
	
    plotDataDidChange: function() {
		this.setLayerNeedsUpdate() ;
		if (this.debugInConsole) console.log('data changed');
	}.observes('.data','.data.[]'),
    
    plotSeriesDidChange: function() {
		this.setLayerNeedsUpdate() ;
		if (this.debugInConsole) console.log('series changed');
	}.observes('.series','.series.[]'),
	
    plotOptionsDidChange: function() {
		this.setLayerNeedsUpdate() ;
		if (this.debugInConsole) console.log('options changed');	
	}.observes('.options', '.options.[]'),
	
    visibilityDidChange: function() {
		if(this.get('isVisibleInWindow') && this.get('isVisible')) {
			if (this.debugInConsole) console.log('visibility changed');
			this.setLayerNeedsUpdate() ;
		}		
	}.observes('isVisibleInWindow','isVisible'),
	
	// layerDidChange: function() {
	// 	if (this.debugInConsole) console.log('layerchanged');
	// 	this.setLayerNeedsUpdate() ;	
	// }.observes('layer'),

	// Test: from http://colincodes.tumblr.com/post/512234561/sproutcore-and-flot   NO SUCCESS
	layerDidChange: function() {
	    this.set('layerNeedsUpdate', YES);
		if (this.debugInConsole) console.log('layer-changed');
	}.observes('layer'),
	
	updateLayer: function() {
	    sc_super();
	    var layer = this.get('layer');
	    if (layer) $.plot(layer, this.get('data'));
	},
	// End from 

    layoutDidChange: function() {
		sc_super();
		if (this.debugInConsole) console.log('layout changed');
		this.setLayerNeedsUpdate() ;
	},
	
    updateLayerLocationIfNeeded: function() {
		var ret = sc_super() ;
		if (this.debugInConsole) console.log('layer location update');
		this.setLayerNeedsUpdate() ;
		return ret;
	},
	
    setLayerNeedsUpdate: function() {
		//this.invokeLast(function() { // Test: NO SUCCESS :-(
		this.invokeOnce(function() {  // Original
			// this.invokeNext(function() {   // Test: NO SUCCESS :-(
			//this.set('layerNeedsUpdate', YES);
			if (this.get('isVisibleInWindow') && this.get('isVisible')) this.set('layerNeedsUpdate', YES);
			if (this.debugInConsole) console.log('need update') ;
			//Demo.mainPage.graphView.graph.forcePlot();
		});
	},
	
	
	// // Test: NO SUCCESS :-(
	// willShowInDocument: function() {
	//     this.displayDidChange();
	//     console.log('>> willSID pass in Graph');
	// },
	// // Test: SUCCESS :-)
	didAppendToDocument: function() {
	    this.displayDidChange();
	    console.log('>> didATD pass in Graph');
	},
	// // Test: NO SUCCESS :-(
	// didShowInDocument: function() {
	//     this.displayDidChange();
	//     console.log('>> didSID pass in Graph');
	// },
		
	
	
    viewDidResize: function() {
		sc_super();
		this.setLayerNeedsUpdate() ;
		if (this.debugInConsole) console.log('view did resize');
	}.observes('layout'),
	
	
    parentViewDidResize : function() {
		sc_super();
		this.setLayerNeedsUpdate();
		if (this.debugInConsole) console.log('parent did resize');
	}

});