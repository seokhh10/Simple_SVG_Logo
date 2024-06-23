//const inquirer = require("inquirer");  //Inquirer node package
const fs = require("fs");   //File module package
const  {Triangle, Square, Circle} = require("./lib/shapes");  //Importing figures from shapes.js


(async () => {
    const inquirer = (await import('inquirer')).default;
// Function writes the SVG file using user answers from inquirer prompts
function writeToFile(fileName, answers) {
    let stringSvg = "";
    stringSvg = '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">';  // Sets width and height of logo shape
    stringSvg += "<g>";
    stringSvg += `${answers.shape}`;

    
    let shapeChoice;
    if (answers.shape === "Triangle") {
        shapeChoice = new Triangle();
        stringSvg += `<polygon points="150, 18 244, 182 56, 182" fill="${answers.shapeBackgroundColor}" />`;
    } else if (answers.shape === "Square") {
        shapeChoice = new Square();
        stringSvg += `<rect x="73" y="40" width="160" height="160" fill="${answers.shapeBackgroundColor}" />`;
    } else  {
        shapeChoice = new Circle();
        stringSvg += `<circle cx="150" cy="115" r="80" fill="${answers.shapeBackgroundColor}" />`;
    }

    stringSvg += `<text x="150" y="125" font-size="40" text-anchor="middle" fill="${answers.textColor}">${answers.text}</text>`;
    // Close the SVG tags
    stringSvg += "</g>";        
    stringSvg += "</svg>";

    
   
  

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
            name: "shapeBackgroundColor", 
        },
    ])
    .then ((answers) => {
        if (answers.text.lenght > 3) {
            console. log("Must enter a value more than 3 characters");
            promptUser();
        } else {
            writeToFile("./examples/logo.svg", answers);
        }
    });
    
}

promptUser();


})();