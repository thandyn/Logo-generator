const { Square, Triangle, Circle } = require("./shapes");

describe("Triangle", () => {
  test("Renders a red triangle with blue borders", () => {
    const expectedSVG = `<polygon points="150, 18 244, 182 56, 182" stroke="blue" fill="red" />`;
    const circle = new Triangle();
    circle.getStrokeColor("blue");
    circle.getFillColor("red");
    const actualSVG = circle.render();
    expect(actualSVG).toEqual(expectedSVG);
  });
  test("aceepts fillColor and strokeColor parameters", () => {
    const expectedSVG = `<polygon points="150, 18 244, 182 56, 182" stroke="green" fill="yellow" />`;
    const circle = new Triangle();
    circle.getStrokeColor("green");
    circle.getFillColor("yellow");
    const actualSVG = circle.render();
    expect(actualSVG).toEqual(expectedSVG);
  });
});
