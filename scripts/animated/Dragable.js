const matterContainer = document.getElementById("matterContainer");
let engine, render, runner, shouldRunEffect;
var Rectangles = [];
var shouldRunFlag = true;

function initMatterJS() {
  engine = Matter.Engine.create();
  engine.world.gravity.y = 1;

  render = Matter.Render.create({
    element: matterContainer,
    engine: engine,
    options: {
      width: matterContainer.offsetWidth,
      height: matterContainer.offsetHeight,
      background: "transparent",
      wireframes: false,
      showAngleIndicator: false,
    },
  });

  runner = Matter.Runner.create();

  Matter.Runner.run(runner, engine);
}

function createRectangle(xx, yy, HtmlLabel) {
  let h = HtmlLabel.offsetHeight + 1;
  let w = HtmlLabel.offsetWidth + 1;
  var box = {
    body: Matter.Bodies.rectangle(xx, yy, w, h, {
      restitution: 0.3,
      friction: 0.5,
      frictionAir: 0.01,
      chamfer: { radius: h /2}
    }),
    elem: HtmlLabel,
    render() {
      const { x, y } = this.body.position;
      this.elem.style.top = `${y}px`;
      this.elem.style.left = `${x}px`;
      this.elem.style.transform = ` translate(-50%, -50%) rotate(${this.body.angle}rad)`;
    },
  };
  return box;
}

function setup() {

  if (!shouldRunFlag) return;
  const HtmlLabels = document.getElementsByClassName("dragableLabels");
  const THICCNESS = 1000;

  Array.from(HtmlLabels).forEach((HtmlLabel) => {
    var randomX = Matter.Common.random(
      matterContainer.offsetWidth * 0.3,
      matterContainer.offsetWidth * 0.8
    );
    var randomY = Matter.Common.random(100, 1);
    var rectangle = createRectangle(randomX, randomY, HtmlLabel);
    Rectangles.push(rectangle);
    Matter.Composite.add(engine.world, rectangle.body);
  });

  const ground = Matter.Bodies.rectangle(
    matterContainer.clientWidth / 2,
    matterContainer.clientHeight + THICCNESS / 2 ,
    27184,
    THICCNESS,
    { isStatic: true }
  );

  const top = Matter.Bodies.rectangle(
    matterContainer.clientWidth / 2,
    0 - 2 - THICCNESS / 2,
    27184,
    THICCNESS,
    { isStatic: true }
  );

  const leftWall = Matter.Bodies.rectangle(
    0 - THICCNESS / 2,
    matterContainer.clientHeight / 2,
    THICCNESS,
    matterContainer.clientHeight * 5,
    {
      isStatic: true,
    }
  );

  const rightWall = Matter.Bodies.rectangle(
    matterContainer.clientWidth + THICCNESS / 2 + 2,
    matterContainer.clientHeight / 2,
    THICCNESS,
    matterContainer.clientHeight * 5,
    { isStatic: true }
  );

  const Boundries = [ground, top, leftWall, rightWall];
  Matter.Composite.add(engine.world, Boundries);

  const mouse = Matter.Mouse.create(render.canvas);
  const mouseConstraint = Matter.MouseConstraint.create(engine, {
    mouse: mouse,
    
  });

  Matter.Composite.add(engine.world, mouseConstraint);

  mouseConstraint.mouse.element.removeEventListener(
    "mousewheel",
    mouseConstraint.mouse.mousewheel
  );
  mouseConstraint.mouse.element.removeEventListener(
    "DOMMouseScroll",
    mouseConstraint.mouse.mousewheel
  );

  // Matter.Render.run(render);

  (function rerender() {
    Rectangles.forEach((element) => {
      element.render();
    });
    // box.render();
    Matter.Engine.update(engine);
    requestAnimationFrame(rerender);
  })();

  const handleResize = () => {
    const containerWidth = matterContainer.offsetWidth;
    const containerHeight = matterContainer.offsetHeight;

    render.canvas.width = containerWidth;
    render.canvas.height = containerHeight;

    Matter.Body.setPosition(
      ground,
      Matter.Vector.create(containerWidth / 2, containerHeight + THICCNESS / 2)
    );

    Matter.Body.setPosition(
      rightWall,
      Matter.Vector.create(containerWidth + THICCNESS / 2, containerHeight / 2)
    );
  };

  window.addEventListener("resize", handleResize);

  shouldRunFlag = false;
}

setTimeout(() => {
  initMatterJS();
setup();
}, 50);
