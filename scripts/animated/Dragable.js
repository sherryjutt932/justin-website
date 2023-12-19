const matterContainer = document.getElementById("matterContainer");
  let engine, render, runner, shouldRunEffect;

  const textArray = [
    {
      text: "ANIMATIONS",
      bg: "#fff",
      color: "#000",
    },
    {
      text: "UX WRITING",
      bg: "#000",
      color: "#fff",
    },
    {
      text: "DESIGN SYSTEMS",
      bg: "#fff",
      color: "#000",
    },
    {
      text: "UX DESIGN",
      bg: "#000",
      color: "#fff",
    },
    {
      text: "USER RESEARCH",
      bg: "#fff",
      color: "#000",
    },
    {
      text: "UI GUIDLINES",
      bg: "#000",
      color: "#fff",
    },
    {
      text: "UI DESIGN",
      bg: "#fff",
      color: "#000",
    },
    
  ];

  function getRandomColor() {
    // List of colors excluding white
    const colors = [
      "#A1E8AF",
      "#D72638",
      "#12355B",
      "#FF661F",
      "#DDAE7E",
      "#F3A712",
    ];

    // Get a random index from the colors array
    const randomIndex = Math.floor(Math.random() * colors.length);

    // Return the color at the random index
    return colors[randomIndex];
  }

  function createImage(string, width, height, color, bg, borderRadius) {
    let w = width + width/1.5;
    let h = height + 26;
    let lineWidth = 3;
    borderRadius = borderRadius - (lineWidth * 2) - 1;

    let drawing = document.createElement("canvas");
    drawing.width = w;
    drawing.height = h;
    let ctx = drawing.getContext("2d");
  

    // Draw rounded rectangle with a black background
    ctx.fillStyle = bg;
    ctx.beginPath();
    ctx.moveTo(borderRadius + lineWidth / 2, lineWidth / 2);
ctx.arcTo(w - lineWidth / 2, lineWidth / 2, w - lineWidth / 2, h - lineWidth / 2, borderRadius);
ctx.arcTo(w - lineWidth / 2, h - lineWidth / 2, lineWidth / 2, h - lineWidth / 2, borderRadius);
ctx.arcTo(lineWidth / 2, h - lineWidth / 2, lineWidth / 2, lineWidth / 2, borderRadius);
ctx.arcTo(lineWidth / 2, lineWidth / 2, w - lineWidth / 2, lineWidth / 2, borderRadius);
ctx.closePath();
ctx.fill();
  
    ctx.strokeStyle = color;
    ctx.lineWidth = lineWidth;
    ctx.stroke();
    
    ctx.fillStyle = color;


    ctx.font = "20pt sans-serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
  
    // Use w/2 and h/2 as the center for positioning the text
    ctx.fillText(string, w / 2, h / 2);
  
    // Return the data URL of the canvas as a PNG image
    return drawing.toDataURL("image/png");
  }

  function initMatterJS() {
    engine = Matter.Engine.create();
    engine.world.gravity.y = 0.5;


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

  function createRectangle(x, y, width, height, angle, borderRadius, slomo, index) {
    return Matter.Bodies.rectangle(x, y, width, height, {
            background: "transparent",
            chamfer: { radius: borderRadius /2},
            angle: angle,
            restitution: .4,
            timeScale: slomo.toFixed(2),
            friction: 0.1,
            render: {
              sprite: {
                texture: createImage(textArray[index].text, width, height, textArray[index].color, textArray[index].bg, borderRadius),
                xScale: 0.6, // Adjust the scale as needed
                yScale: 0.6,
              },
            },
    });
  }

  function setup() {
    const numberOfRectangles = textArray.length;
    const size = 40;
    const borderRadius =  size;

    for (let i = 0; i < numberOfRectangles; i++) {
      var randomX = Matter.Common.random((matterContainer.offsetWidth*0.3), (matterContainer.offsetWidth*0.8));
      var randomY = Matter.Common.random(100, 1);
      var randomAngle = Matter.Common.random(-1, 1);
      var slomo =  Matter.Common.random(30, 50) / 100;
      var recWidth = 200;
      var recHeight = size;

      const rectangle = createRectangle(
        randomX,
        randomY,
        recWidth,
        recHeight,
        randomAngle,
        borderRadius,
        slomo,
        i
      );

      Matter.World.add(engine.world, rectangle);
    }

    const THICCNESS = 60;

    const ground = Matter.Bodies.rectangle(
      matterContainer.clientWidth / 2,
      matterContainer.clientHeight + (THICCNESS / 2) - (4),
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

    Matter.Composite.add(engine.world, [ground, top, leftWall, rightWall]);

    const mouse = Matter.Mouse.create(render.canvas);
    const mouseConstraint = Matter.MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        stiffness: 0.6,
        render: {
          visible: false,
        },
      },
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

    Matter.Render.run(render);

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

    shouldRunEffect = false;
  }

  initMatterJS();
  setup();