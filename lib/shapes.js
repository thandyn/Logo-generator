class Shape {
  constructor(strokeColor, fillColor) {
    this.strokeColor = strokeColor;
    this.fillColor = fillColor;
  }
}

class Triangle extends Shape {
  render(strokeColor, fillColor) {
    return `<polygon points="150, 18 244, 182 56, 182" stroke="${this.strokeColor}" fill="${this.fillColor}" />`;
  }
}

class Circle extends Shape {
  render() {
    return `<circle cx="150" cy="100" r="80" stroke="${this.strokeColor}" fill="${this.fillColor}" />`;
  }
}

class Square extends Shape {
  render() {
    return `<rect x="90" y="40" width="120" height="120" stroke="${this.strokeColor}" fill="${this.fillColor}" />`;
  }
}

module.exports = { Triangle, Circle, Square };
