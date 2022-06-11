# Mr. Roboger's Neighborhood
#### By: Sandra Tena
#### A simple html website that takes numbers that users imput and returns funny words.  
## Technologies Used
* HTML
* CSS
* JQuery
* Bootstrap
* JavaScript
## Description
_This simple html website allows users to input a number. The website then turns that number into an array of that number from 0 to that number and replaces the 1's with "Beep!", the 2's with "Boop!" and the 3's with "Won't you be my neighbor?"._
## Setup/Installation Requirements
* Clone this repository to your desktop. 
* Navigate to the top level of the directory. 
* Open index.html in your browser. 
## Known Bugs
* Result always display but are replaced with new results. 
## GitHub Page Link
https://sandrat22.github.io/mr-robogers-neighborhood/
## Test Driven Development
#### Describe: beepBoop()
##### Test: This test will take the number input from the user and return an array of numbers from 0 to the user's inputted number.
##### Code: beepBoop(5);
##### Expected Output: [0, 1, 2, 3, 4, 5] -->
##### Test: This test will identify the number 1 within the array.
##### Code: beepBoop(5)
##### Expected Output: True
##### Test: This test will identify the number 2 within the array. 
##### Code: beepBoop(5)
##### Expected Output: True
 ##### Test: This test will identify the number 3 within the array.
##### Code: beepBoop(5)
##### Expected Output: True
##### Test: This test will replace a number containing the number 1 with the word "Boop!".
##### Code: beepBoop(5)
##### Expected Output: [0, "Boop!", 2, 3, 4, 5]
##### Test: This test will replace a number containing the number 2 with the word "Beep!".
##### Code: beepBoop(5)
##### Expected Output: [0, "Boop!", "Beep!", 3, 4, 5]
##### Test: This test will replace a number containing the number 3 with the question "Won't you be my neighbor?".
##### Code: beepBoop(5)
##### Expected Output:["0", "Beep", "Boop", "Won't you be my neighbor?"] 
##### Test: This test will find a number containing 1, 2, or 3 and replace them with "beep!", "boop!", or "Won't you be my neighbor?" respectively. 
##### Code: beepBoop(5)
##### Expected Output: ["0", "Beep", "Boop", "Won't you be my neighbor?", "4", "5"]
## License
_If you have any questions or concerns, please feel free to reach out to me [via email at: sandratena06@gmail.com](mailto:sandratena06@gmail.com) or request to make a contribution. Thank you!_ 
#### The MIT License (MIT)

Copyright (c) 2011-2022 Twitter, Inc.
Copyright (c) 2011-2022 The Bootstrap Authors

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

The MIT License (MIT)

Copyright (c) 2015 The jQuery Foundation

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
#### Copyright (c) 2022 Sandra Tena