[![Generic badge](https://img.shields.io/badge/license-MIT-<COLOR>.svg)](#license)
![GitHub language count](https://img.shields.io/github/languages/count/cdfishe1/team-generator)
![GitHub top language](https://img.shields.io/github/languages/top/cdfishe1/team-generator)

# Team Generator App

This node.js app accepts user input via prompts in the console to output a styled html page with a development team's manager, engineers, and interns when requested.

## Table of Contents
* [Team Generator](#team-generator)
* [YouTube Demonstration](#youtube-demonstration)
* [Scope of Project](#scope-of-project)
* [Installation](#installation)
* [Code Highlights](#code-highlights
)
* [Testing](#testing)
* [Credits](#credits)
* [License](#license)

## Team Generator

## YouTube Demonstration
[YouTube Video Demonstration](https://youtu.be/itTV2mKJTW0)


## Scope of Project

* Used the class constructor to generate team members data.
* Used jest for testing.
* Used validation functions with inquirer and regular expressions to validate prompted data input
* Used bootstrap to style the html page.

## Installation

This app requires npm [inquirer](https://www.npmjs.com/package/inquirer). Upon cloning open node.js and enter npm i in order to install the inquirer dependency.

## Code Highlights
I used the following article by GitHub user sameeri:
[Asking questions away with Inquirer!](https://github.com/sameeri/Code-Inquirer/wiki/Asking-questions-away-with-Inquirer!)
in order to understand inquirer's built in validation mechanism, using functions such as:
```
function validateAge(age)
{
   var isValid = !_.isNaN(parseFloat(age));
   return isValid || "Age should be a number!";
}
```
I used the following StackOverflow article:
[How can I validate that a user input their email when using Inquirer npm?](https://stackoverflow.com/questions/65189877/how-can-i-validate-that-a-user-input-their-email-when-using-inquirer-npm)
in order to understand how to use a regular expression to validate the email prompts in my script:

```
validate: function(email)
        {
            // Regex mail check (return true if valid mail)
            return /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(email);
        }
```

## Testing

This app uses npm [jest](https://www.npmjs.com/package/jest) for testing.

## Credits

David Metcalf, bootcamp tutor, helped me understand how to think about the overall work flow for this app.

Tom McCarthy, guest TA, helped me understand the code for how to generate the cards and inserting them into the html file. 

## License

Copyright (c) Charles Fisher All rights reserved.<br>
Please be kind and change content if you wish to use this code.

<details><summary>Licensed under the MIT License</summary>

Copyright (c) 2021 - present | Charles Fisher

<blockquote>
Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
</blockquote>
</details>

