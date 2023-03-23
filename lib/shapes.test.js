const { Triangle, Circle, Square } = require("./shapes");

describe("Triangle", () => {
  test("Renders a red triangle with blue borders", () => {
    const expectedSVG = `<polygon points="150, 18 244, 182 56, 182" stroke="blue" fill="red" />`;
    const triangle = new Triangle("red", "blue");
    const actualSVG = triangle.render();
    expect(expectedSVG).toEqual(actualSVG);
  });
});

describe("Circle", () => {
  test("Renders a red Circle with blue borders", () => {
    const expectedSVG = `<circle cx="150" cy="100" r="80" stroke="blue" fill="red" />`;
    const circle = new Circle("red", "blue");
    const actualSVG = circle.render();
    expect(expectedSVG).toEqual(actualSVG);
  });
});

describe("Square", () => {
  test("Renders a red square with blue borders", () => {
    const expectedSVG = `<rect x="90" y="40" width="120" height="120" stroke="blue" fill="red" />`;
    const square = new Square("red", "blue");
    const actualSVG = square.render();
    expect(expectedSVG).toEqual(actualSVG);
  });
});
