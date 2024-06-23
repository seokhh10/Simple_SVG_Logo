const inquirer = import('inquirer');
// const inquirer = require("inquirer");  //Inquirer node package
const fs = require("fs");   //File module package
const  {Triangle, Square, Circle} = require("./lib/shapes");  //Importing figures from shapes.js


function writeToFile(fileName, answers) {
    let stringSvg = "";
    stringSvg = '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">';
    stringSvg += "<g>";
    stringSvg += `${answers.shape}`;

    
    let shapeChoice;
    if (answers.shape === "Triangle") {
        shapeChoice = new Triangle();
        stringSvg += `<polygon points="150, 18 244, 182 56, 182" fill="${answers.shapeColor}" />`;
    } else if (answers.shape === "Square") {
        shapeChoice = new Square();
        stringSvg += `<rect x="73" y="40" width="160" height="160" fill="${answers.shapeColor}" />`;
    } else  {
        shapeChoice = new Circle();
        stringSvg += `<circle cx="150" cy="115" r="80" fill="${answers.shapeColor}" />`;
    }
}




function promptUser() {
    inquirer
    .prompt([
        {
            type: "input",
            message: "What text should appear on your logo? (Enter 3 characteres)",
            name: "text",
        },
        {
            type: "input",
            message: "Choose text color",
            name: "textColor",
        },
        {
            type: "list",
            message: "What shape would you like to use for your logo?",
            choices: ["Triangle", "Square", "Circle"],
            name: "shape",
        },
        {
            type: "input", 
            message: "Choose shapes color",
            name: "ShapeBackgroundColor", 
        },
    ])
    .then ((answers) => {
        if (answers.text.lenght > 3) {
            console. log("Must enter a value more than 3 characters");
            promptUser();
        } else {
            writeToFile("./example/logo.svg", answers);
        }
    });
    
}

promptUser();