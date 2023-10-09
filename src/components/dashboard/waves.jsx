import React, { Component } from 'react';

class WavesAnimation extends Component {
  constructor(props) {
    super(props);
    this.canvasRef = React.createRef();
    this.waves = [];
  }

  componentDidMount() {
    const canvas = this.canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = 940;
    canvas.height =60;

    const createWave = () => {
      this.waves.push({
        x: 0,
        y: canvas.height / 2,
        length: Math.floor(Math.random() * 100) + 100,
        amplitude: Math.floor(Math.random() * 5) + 30,
        speed: Math.floor(Math.random() * 2) + 3,
        offset: Math.floor(Math.random() * canvas.height),
        color: `rgb(255, 255, 255)`
      });
    };

    for (let i = 0; i < 5; i++) {
      createWave();
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < this.waves.length; i++) {
        const wave = this.waves[i];

        ctx.beginPath();

        for (let x = 0; x < canvas.width; x += 10) {
          const y = wave.y + Math.sin((wave.offset + x) / wave.length) * wave.amplitude;
          ctx.lineTo(x, y);
        }

        ctx.strokeStyle = "rgb(255, 255, 255)";
        ctx.lineWidth = 3;
        ctx.stroke();

        wave.offset += wave.speed;
      }

      requestAnimationFrame(draw);
    };

    draw();
  }

  render() {
    return (
      
        <canvas ref={this.canvasRef} id="canvas"></canvas>
    
    );
  }
}

export default WavesAnimation;
