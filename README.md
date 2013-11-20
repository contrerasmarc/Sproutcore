=== MARCOS NOTES:

I modified the following files 

1.- apps/demo/resources/main_page.js

2.- frameworks/flot/views/graph.js

To see the graph on the View

===

Flot-SproutCore provides framework for integrating flot into SproutCore applications.

The Flot-SproutCore directory is an example SproutCore application. If you have SproutCore installed and want to see the example, type:

  cd flot-integration
  sc-server
  
and go to http://localhost:4020/demo in your browser.

If you would like to add flot integration support to your existing app

  mkdir myapp_dir/frameworks
  cd flot-integration/frameworks
  cp -r flot myapp_dir/frameworks
  
and add this line to your Buildfile:

  config :all, :required => [:sproutcore, :flot]

restart server if necessary.

Now, you can create Flot views like this

  Flot.GraphView.design({
    layout: { left: 0, top: 0, height: 200, right: 0 } ,
    data: [
      SC.Object.create({label: 'set1', data:[[0,0], [1, 3], [2, 4]]}) ,
    ] ,
    options: SC.Object.create({
      // your options here
    })
  })


Notes:
since the flot-svn is a submodule, after cloning the repo it is important to do:
git submodule init and then
git submodule update otherwise the demo won't run because it can't find the flot sources.