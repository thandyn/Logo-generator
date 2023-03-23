class SVG {
  constructor(textEl, shapeEl) {
    this.textEl = "";
    this.shapeEl = "";
  }

  render() {
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.shapeEl}${this.textEl}</svg>`;
  }

  getText(message, color) {
    if (message.length > 3) {
      throw new Error(`The text needs to be less than 3 characters`);
    }
    this.textEl = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${message}</text>`;
  }

  getShape(shape) {
    this.shapeEl = shape.render();
  }
}

module.exports = SVG;
