const SVG = require("./svg");
const { Triangle, Circle, Square } = require("./shapes");

test("Renders a 300 x 200 svg Triangle that is yellow with green border with red text", () => {
  const expectedSVG =
    '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="150, 18 244, 182 56, 182" stroke="green" fill="yellow" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="red">ABC</text></svg>';
  const svg = new SVG();
  const triangle = new Triangle("green", "yellow");
  svg.getText("ABC", "red");
  svg.getShape(triangle);
  actualSVG = svg.render();
  expect(expectedSVG).toEqual(actualSVG);
});

test("Renders a 300 x 200 svg Circle that is yellow with green border with red text", () => {
  const expectedSVG =
    '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="80" stroke="green" fill="yellow" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="red">ABC</text></svg>';
  const svg = new SVG();
  const circle = new Circle("green", "yellow");
  svg.getText("ABC", "red");
  svg.getShape(circle);
  actualSVG = svg.render();
  expect(expectedSVG).toEqual(actualSVG);
});

test("Renders a 300 x 200 svg Square that is yellow with green border with red text", () => {
  const expectedSVG =
    '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect x="90" y="40" width="120" height="120" stroke="green" fill="yellow" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="red">ABC</text></svg>';
  const svg = new SVG();
  const square = new Square("green", "yellow");
  svg.getText("ABC", "red");
  svg.getShape(square);
  actualSVG = svg.render();
  expect(expectedSVG).toEqual(actualSVG);
});
