const inquirer = require("inquirer");
const { Triangle, Circle, Square } = require("./shapes");
const SVG = require("./svg");
const { writeFile } = require("fs/promises");

class CLI {
  run() {
    return inquirer
      .prompt([
        {
          name: "text",
          type: "input",
          message:
            "What do you want your text for your logo to be? (must be 3 or less characters)",
          validate: (text) =>
            text.length <= 3 || "The text must be 3 or less characters",
        },
        {
          name: "textColor",
          type: "input",
          message: "What color do you want your text to be?",
        },
        {
          name: "shapeType",
          type: "list",
          message: "What shape do you want your logo to be?",
          choices: ["Triangle", "Circle", "Square"],
        },
        {
          name: "shapeFill",
          type: "input",
          message: "What color do you want your shape to be?",
        },
        {
          name: "shapeStroke",
          type: "input",
          message: "What color do you want your shape's borders to be?",
        },
      ])
      .then(({ text, textColor, shapeType, shapeFill, shapeStroke }) => {
        let shape;
        switch (shapeType) {
          case "Triangle":
            shape = new Triangle(shapeFill, shapeStroke);
            break;

          case "Circle":
            shape = new Circle(shapeFill, shapeStroke);
            break;

          case "Square":
            shape = new Square(shapeFill, shapeStroke);
            break;
        }

        const svg = new SVG(text, shape);

        svg.getText(text, textColor);
        svg.getShape(shape);
        return writeFile("logo.svg", svg.render());
      })
      .then(() => {
        console.log("Your logo has been generated");
      })
      .catch((error) => {
        console.log(error);
        console.log("Something went wrong");
      });
  }
}

module.exports = CLI;
