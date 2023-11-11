window.addEventListener("load", () => {
  var body_tree = {
    id: "2447:5969",
    name: "Frame 1000003707",
    type: "FRAME",
    deep_level: 0,
    locked: false,
    children: [
      {
        id: "2447:5971",
        name: "Ellipse 1228",
        type: "ELLIPSE",
        deep_level: 1,
        locked: true,
        children: [],
        visible: true,
        p_id: "2447:5969",
        svg_node_id: "Ellipse 1228",
        svg_node: {},
      },
      {
        id: "2447:5972",
        name: "*",
        type: "VECTOR",
        deep_level: 1,
        locked: false,
        children: [],
        visible: true,
        p_id: "2447:5969",
        svg_node_id: "*",
        svg_node: {},
      },
      {
        id: "2447:5973",
        name: "Ellipse 1229",
        type: "ELLIPSE",
        deep_level: 1,
        locked: false,
        children: [],
        visible: true,
        p_id: "2447:5969",
        svg_node_id: "Ellipse 1229",
        svg_node: {},
      },
      {
        id: "2447:5974",
        name: "Vector",
        type: "VECTOR",
        deep_level: 1,
        locked: false,
        children: [],
        visible: true,
        p_id: "2447:5969",
        svg_node_id: "Vector",
        svg_node: {},
      },
      {
        id: "2447:5975",
        name: "Vector_2",
        type: "VECTOR",
        deep_level: 1,
        locked: false,
        children: [],
        visible: true,
        p_id: "2447:5969",
        svg_node_id: "Vector_2",
        svg_node: {},
      },
    ],
    visible: true,
    svg_node_id: "Frame 1000003707",
    svg_node: {},
  };
  document.addEventListener("mousemove", function (e) {
    MoveBackground(e);
  });
  function parseDigit(str) {
    var result = str.match(/(-?\d+(\.\d+)?)/g).map((v) => +v);
    return { tdeg: result[0], tox: result[1], toy: result[2] };
  }
  function MoveBackground(e) {
    body_tree.children.forEach((elemennt, index) => {
      var el = document.getElementById(elemennt.svg_node_id);
      if (elemennt.locked || !el) return;
      var ind = index + 1;
      var i = ind;
      var offsetX = 0;
      var offsetY = 0;
      var transform = el?.getAttribute("transform")?.match(/rotate\(.*\)/);
      if (true) {
        const xOrigin =
          document.querySelector("body").getBoundingClientRect().width / 2;
        const yOrigin =
          document.querySelector("body").getBoundingClientRect().height / 2;
        const yRot = ((e.clientX - xOrigin) / xOrigin) * -25;
        const xRot = ((e.clientY - yOrigin) / yOrigin) * 25;
        let { tdeg, tox, toy } = transform
          ? parseDigit(transform[0])
          : { tdeg: null, tox: null, toy: null };
        el.style.transformOrigin =
          transform && (tox || toy) ? `${tox}px, ${toy}px` : "center";
        el.style.transform =
          "translate(" +
          offsetX +
          "px," +
          offsetY +
          "px) " +
          (transform ? ` rotate(${tdeg}deg)` : "") +
          ` rotateX(${xRot}deg) rotateY(${yRot}deg)`;
      } else {
        let { tdeg, tox, toy } = transform
          ? parseDigit(transform[0])
          : { tdeg: null, tox: null, toy: null };
        el.style.transformOrigin =
          transform && (tox || toy) ? `${tox}px, ${toy}px` : "none";
        el.style.transform =
          "translate(" +
          offsetX +
          "px," +
          offsetY +
          "px)" +
          (transform ? ` rotate(${tdeg}deg)` : "");
      }
    });
  }
});
