<<<<<<< HEAD
//change rotation from 0.1->0.4
//change eye x from 10->0

=======
>>>>>>> master
var eye = new Circle(0,-35,7)
 .attr('fillColor', '#fff');
var on  = 'l 60 0 L 60 0 A 60 60 0 1 1 48.54 -35.26';
var off = 'l 60 0 L 60 0 A 60 60 0 1 1 60 -0.0001';
var pm = new bonsai.Path().attr('fillColor', 'red');


var py = 100;
var p1x = 100;
var p2x = 150;
var p3x = 200;
var p4x = 250;
var pacdot1 = bonsai.Path.circle(p1x,py,10)
  .attr('fillColor', '#0f0');
pacdot1.addTo(stage);

var pacdot2 = new Circle(p2x,py,10)
  .attr('fillColor', '#0f3');
pacdot2.addTo(stage);

var pacdot3 = new Circle(p3x,py,10)
  .attr('fillColor', '#0f0');
pacdot3.addTo(stage);

var pacdot4 = new Circle(p4x,py,10)
  .attr('fillColor', '#0f0');
pacdot4.addTo(stage);

var pacman = new Group()
 .attr({'y': 100, 'rotation': 0.4}).addTo(stage);
pacman.addChild.call(pacman, [pm, eye]);

var num = pacdot1.radius;

<<<<<<< HEAD
var i = 0;
(function loop(e) {
  setTimeout(loop, 10);
  pm.path(i%2 ? on : off);
  pacman.attr('x', i);
  i++;
=======
var click = true;



var i = 0;
(function loop(e) {
  pm.on('click', function(data){
    if(click){click = false;}
    else{click = true;}
  });
  setTimeout(loop, 50);
  pm.path(i%2 ? on : off);
  pacman.attr('x', i);
  if(click){
    i++;
  };
>>>>>>> master
  if(i == p1x){
    stage.removeChild(pacdot1);
  }
  else if (i == p2x){
    stage.removeChild(pacdot2);
  }
  else if (i == p3x){
    stage.removeChild(pacdot3);
  }
  else if (i == p4x){
    stage.removeChild(pacdot4);
  }
<<<<<<< HEAD
})();
=======
})();

>>>>>>> master
