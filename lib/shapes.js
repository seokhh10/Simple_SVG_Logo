class Shape {      
    constructor() {      //shape class constructor is defining to be a shape
        this.color = "";
    }
    setColor(colorVar) {    //shapes class takes setColor function frome shape.test.js
        this.color = colorVar;
    }
}

//All the figures inherits properties that are defined in Shape class
class Triangle extends Shape {  
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;  //Returns triangle with color
    }
}

class Square extends Shape {
    render() {
        return `<rect x="73" y="40" width="160" height="160" fill="${this.color}" />`;   //Returns square with color
    }
}

class Circle extends Shape {
    render() {
        return `<circle cx="150" cy="115" r="80" fill="${this.color}" />`;   //Returns circle with color
    }
}


module.exports = { Triangle, Square};  //Export classes for the figures