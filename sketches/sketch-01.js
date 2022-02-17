const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: [ 1080, 1080 ]
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = 'white';
    context.fillRect(0, 0, width, height);
    context.lineWidth = width * 0.005;

    const w = width * 0.10;
    const h = height * 0.10;
    const gap = width * 0.03;
    const ix = width * 0.17;
    const iy = height * 0.17;

    const off = width * 0.02;
    let x, y;
    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 5; j++) {

          x = ix + (w + gap) * i;
          y = iy + (h + gap) * j;

          context.strokeStyle = 'violet';
          context.beginPath();
          context.rect(x, y, w, h);
          context.stroke();

          if (Math.random() < 0.20) {
            context.fillStyle = '#98FB98';
              context.beginPath();
              context.rect(x + off / 2, y + off / 2, w - off, h - off);
              context.fill();
          }
          else if(Math.random() < 0.4){
            context.fillStyle = '#d4e2eb';
            context.beginPath();
            context.arc(x + 30, y + 30, 30 ,0,Math.PI * 2);
            context.fill();
        }
        else if(Math.random() < 0.60){
          context.fillStyle = 'pink';
            context.beginPath();
            context.arc(x + off * 4, y + off , 15,0,Math.PI * 2);
            context.fill();
        }
          else{
            context.fillStyle = '#FFCD9B';
              context.beginPath();
              context.rect(x + off , y , w - off , h - off );
              context.fill();

          }

      }
  }
  };
};

canvasSketch(sketch, settings);
