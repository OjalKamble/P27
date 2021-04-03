class bob {
	constructor(x,y,radius)
	{
		var options={
			isStatic:false,
			restitution:1.2,
			friction:0.4,
			density:1.2,
		  }
		this.x=x;
		this.y=y;
		this.radius=radius;
		this.body=Bodies.circle(this.x, this.y, this.radius/2, options)
		World.add(world, this.body);

	}
	display()
	{
			
			var bobpos=this.body.position;		

			push()
			translate(bobpos.x, bobpos.y);
			rotate (this.body.angle)
			strokeWeight(3);
			fill("grey");
			ellipseMode(CENTER);
			ellipse(0,0,this.radius, this.radius);
			pop()
			
	}

}
  