const inquirer = require("inquirer");  //Inquirer node package
// const fs = require("fs");   //File module package
// const  {Triangle, Square, Circle} = require("./lib/shapes");  //Importing figures from shapes.js




function promptUser() {
    inquirer
    .prompt([
        {
            type: "input",
            message: "What text should appear on your logo? (Enter 3 characteres)",
            name: "text",
        }
    ])
}

promptUser();