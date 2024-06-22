const {Triangle, Square, Circle} = require("./shapes")  //Importing classes from shapes.js

//Unit testing 
describe("Triangle test", () => {
    test("test for a blue triangle", () => {
        const shape = new Triangle();
        shape.setColor("blue");
        expect(shape.render()).toEqual(
            `<polygon points="150, 18 244, 182 56, 182" fill="blue" />`
        );
    });
});

describe("Square test", () => {
    test("test for a purple square", () => {
        const shape = new Square();
        shape.setColor("purple");
        expect(shape.render()).toEqual(
            `<rect x="73" y="40" width="160" height="160" fill="purple" />`
        );
    })
})

describe("Circle test", () => {
    test("test for a pink circle", () => {
        const shape = new Circle();
        shape.setColor("pink");
        expect(shape.render()).toEqual(
            `<circle cx="150" cy="115" r="80" fill="pink" />`
        );
    });
});