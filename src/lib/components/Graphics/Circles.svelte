<!--
  Adopted from https://codepen.io/antoineabbou/pen/mBzqRv,
  by Antoine Abboi (https://antoineabbou.fr/).
  Thanks!
-->

<script lang="ts">
  import { onMount } from "svelte";
  import type { HeaderInfo } from "$lib/components/Home/Hero.svelte";
  import { purple } from "$lib/constants";

  export let header: HeaderInfo;
  export let colors: string[] = purple;
  export let circleCount: number = 50;

  let stoppedCircleCount = 0;
  let canvas: HTMLCanvasElement;
  let ctx: CanvasRenderingContext2D;

  class Circle {
    static friction = 0.8;
    static gravity = 0.4;

    static round(num: number): number {
      return Number(num.toFixed(3));
    }

    x: number;
    y: number;
    dx: number;
    dy: number;
    pDy: number;
    radius: number;
    color: string;
    stopped: boolean = false;

    update() {
      if (this.y + this.radius + this.dy > canvas.height) {
        this.dy = Circle.round(this.dy * Circle.friction);
        if (!this.stopped) {
          this.stopped = (Math.abs(Math.abs(this.pDy) - Math.abs(this.dy)) <= 0.5);
          stoppedCircleCount += Number(this.stopped);
        }
        this.dy = -this.dy;
        this.dx = Circle.round(this.dx * Circle.friction);
      } else {
        this.dy += Circle.gravity;
      }
      this.pDy = this.dy;

      if (this.x + this.radius >= canvas.width || this.x - this.radius <= 0) {
        this.dx = Circle.round(-this.dx * Circle.friction);
      }

      this.x += this.dx;
      this.y += this.dy;
      this.draw();
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
      ctx.fillStyle = this.color;
      ctx.fill();
      ctx.closePath();
    }

    constructor(
      x: number,
      y: number,
      dx: number,
      dy: number,
      radius: number,
      color: string
    ) {
      this.x = x;
      this.y = y;
      this.dx = dx;
      this.dy = dy;
      this.radius = radius;
      this.color = color;
    }
  }

  const randomIntFromRange = (min: number, max: number): number => Math.floor(Math.random() * (max - min + 1) + min);
  const randomColor = (): string => colors[Math.floor(Math.random() * colors.length)];

  let circles: Circle[] = [];
  let mouseCircle: Circle;

  function init() {
    circles = [];
    for (let i = 0; i < circleCount + 1; i++) {
      const radius = randomIntFromRange(8, 30);
      const x = randomIntFromRange(radius, canvas.width - radius);
      const y = randomIntFromRange(0, canvas.height - radius);
      const dx = randomIntFromRange(-3, 3);
      const dy = randomIntFromRange(-2, 2);
      circles.push(new Circle(x, y, dx, dy, radius, randomColor()));
    }
    mouseCircle = circles.pop();
  }

  function animate() {
    if (stoppedCircleCount === circleCount) return;
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, header.width, header.height);
    circles.forEach(circle => circle.update());
  }

  onMount(() => {
    if (!ctx) ctx = canvas.getContext('2d');
    canvas.height = header.height;
    canvas.width = header.width;
    init();
    animate();
    header.element.addEventListener('mousemove', () => {})
  });
</script>

<canvas
  bind:this={canvas}
  class="absolute top-0 left-0"
/>

<div class="absolute top-0 left-0 h-full w-full bg-black-900 bg-opacity-80 backdrop-filter backdrop-blur-md" />
