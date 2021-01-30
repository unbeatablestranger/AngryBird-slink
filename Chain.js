class Chain{
  constructor(bodyA,bodyB)
  { 
    var options={
        bodyA: bodyA,
        bodyB: bodyB,
        stiffness: 0.04,
        length: 18,
    }
    this.chain = Constraint.create(options);
    World.add(world,this.chain);
  }
  display(){
  var locationA = this.chain.bodyA.position;
  var locationB = this.chain.bodyB.position;
  strokeWeight(4);
  line(locationA.x,locationA.y,locationB.x,locationB.y);

  }

}