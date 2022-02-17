const canvasSketch = require('canvas-sketch');
const math = require('canvas-sketch-util/math');
const random = require('canvas-sketch-util/random');

const settings = {
  dimensions: [ 1080, 1080 ]
};

function degToRad(degrees){
  return degrees / 180 * Math.PI;
}

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);

    context.fillStyle = 'orange';
    context.strokeStyle = 'orange';

    const cx = 540;
    const cy = 540;
    const w = width * 0.01;
    const h = height * 0.1;
    let x,y;

    const num = 26;
    const radius = width * 0.3;


    for(let i=0; i<num; i++){
      const slice = math.degToRad(360 / num);
      const angle = slice * i;

      x = cx + radius * Math.sin(angle);
      y = cy + radius * Math.cos(angle);

    context.save();
    context.translate(x,y);
    context.rotate(-angle);
    context.scale(random.range(0.3,2),random.range(0.4,3));

    context.beginPath();
    context.rect(-w/2, random.range(1,-h/2),w,h);
    context.fill();
    context.restore();

    context.save();
    context.translate(cx,cy);
    context.rotate(-angle);

    context.lineWidth = random.range(5,30);

    context.beginPath();
    context.arc(0,0,radius * random.range(0.2,0.6),slice * random.range(1,-8), slice * random.range(1,5));
    context.stroke();
    context.restore();
    }
  };
};

canvasSketch(sketch, settings);
