# Simple_SVG_Logo

The SVG Logo Maker is a command-line application that allows users to create customizable SVG logos based on their input. Users can select the text, colors, and shape for their logo, and the application generates an SVG file.

## Table of Contents

- [Description](#description)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Demo](#Demo)

## Description

The SVG Logo Maker simplifies the process of creating vector-based logos. By prompting the user to specify text, colors, and shape preferences, the application generates a custom SVG file that meets the user's specifications. This tool is ideal for quick logo generation.

## Features

- **Text Input**: Allows users to enter up to three characters to be displayed on the logo.
- **Text Color Selection**: Users can specify the text color using a color keyword.
- **Shape Selection**: Offers a choice of three shapes circle, triangle, and square for the logo.
- **Shape Color Selection**: Users can set the shape's color using a color keyword or a hexadecimal color code.
- **SVG File Generation**: Creates a `logo.svg` file based on the user's inputs, with the specified dimensions and colors.
- **Command-Line Feedback**: Provides immediate feedback upon successful generation of the logo.

## Installation

To set up and run the SVG Logo Maker, follow these steps:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/seokhh10/Simple_SVG_Logo
   cd svg-logo-maker

2. **Installation Dependencies**:
   Install Dependencies:
   Make sure you have Node.js installed. Then, install the necessary packages:  
   ```bash
   npm install
   npm install --save-dev jest
   npm install --save inquirer


## Usage

1. To generate your custom SVG logo, run the application using the following command:
   ```bash
   node index.js

2. Prompt for Text:

The application will ask you to enter the text to display on the logo. You can enter up to three characters.

3. Prompt for Text Color:

Enter a color keyword (like "blue") or a hexadecimal number (like "#0000ff") for the text color.

4. Prompt for Shape Selection:

Choose a shape for your logo's background from the list: circle, triangle, or square.

5. Prompt for Shape Color:

Enter a color keyword or a hexadecimal number for the shape's color.

**SVG File Creation**:

After entering all prompts, the application generates an SVG file named logo.svg inside te directory "examples" and confirms this with a message in the command line: "Generated logo.svg".

**Viewing the SVG**:

Open the logo.svg file in your browser to see your logo with the specified text, shape, and colors.

 ## License

  [![License: MIT](https://img.shields.io/badge/license-MIT-green)](https://opensource.org/licenses/MIT)

### Demo

[Video]()

   