window.addEventListener('load', function() {
	
	//Fetch our canvas
	var canvas = document.getElementById('world');
	
	//Setup Matter JS
	var engine = Matter.Engine.create();
	var world = engine.world;
	var render = Matter.Render.create({
		canvas: canvas,
		engine: engine,
		options: {
			width: 1000,
			height: 500,
			background: 'transparent',
			wireframes: false,
			showAngleIndicator: false
		}
	});
	
	//Add a ball
	var ball = Matter.Bodies.circle(150, 150, 25, {
		density: 0.04,
		friction: 0.01,
        frictionAir: 0.00001,
        restitution: 0.8,
        render: {
            fillStyle: '#F35e66',
            strokeStyle: 'black',
            lineWidth: 1
        }
	});
	Matter.World.add(world, ball);
	
	//Add a floor
	var floor = Matter.Bodies.rectangle(250, 500, 1000, 40, {
		isStatic: true, //An immovable object
		render: {
			visible: true
		}
	});
    Matter.World.add(world, floor);
    
    //Add walls
    var leftWall = Matter.Bodies.rectangle(10, 500, 40, 500, {
		isStatic: true, //An immovable object
		render: {
			visible: true
		}
	});
    Matter.World.add(world, leftWall);

    var rightWall = Matter.Bodies.rectangle(800, 500, 20, 500, {
        isStatic: true,
        render: {
            visible: true
        }
    });
    Matter.World.add(world, rightWall);
	
	//Make interactive
	var mouseConstraint = Matter.MouseConstraint.create(engine, { //Create Constraint
		element: canvas,
		constraint: {
			render: {
	        	visible: false
	    	},
	    	stiffness:0.8
	    }
	});
	Matter.World.add(world, mouseConstraint);
	
	//Start the engine
	Matter.Engine.run(engine);
	Matter.Render.run(render);
	
});