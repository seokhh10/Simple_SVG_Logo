const inquirer = require("inquirer");  //Inquirer node package
const fs = require("fs");   //File module package
const  {Triangle, Square, Circle} = require("./lib/shapes");  //Importing figures from shapes.js
const { type } = require("os");
const { choices } = require("yargs");




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
    
}

promptUser();