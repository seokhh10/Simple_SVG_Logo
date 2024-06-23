const inquirer = require("inquirer");  //Inquirer node package
const fs = require("fs");   //File module package
const  {Triangle, Square, Circle} = require("./lib/shapes");  //Importing figures from shapes.js


function writeToFile(fileName, answers) {
    let stringSvg = "";
    stringSvg = '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">';
    stringSvg += "<g>";
    stringSvg += `${answers.shape}`;
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
            writToFile("./example/logo.svg", answers);
        }
    });
    
}

promptUser();