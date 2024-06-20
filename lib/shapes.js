class Shape {
    constructor() {
        this.color = "";
    }
    setColor(colorVar) {
        this.color = colorVar;
    }
}

class Triangle extends Shape {
    render() {
        return '<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />';
    }
}


module.exports = { Triangle};