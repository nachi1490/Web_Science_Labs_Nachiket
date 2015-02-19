Main Logic used to build the ticker: JavaScript animator function, which is where I am setting the animation which causes the ticker to begin scrolling and then keep scrolling indefinitely. This is a regular JavaScript function which accepts a single parameter; when we call this function we’ll pass in the first container element within the ticker.

The first thing I am doing in this function is work out the distance that the selected element has to travel and the duration of the animation. The distance is the height of the current container element.
The duration is set arbitrarily to 3 ms. The height will already be an integer but the css method will return a string representing the margin-top of the element being animated so I used parseInt() function to convert it to a number. It will also be a negative number so we use the Math.abs() JavaScript function to convert it from a negative to an absolute (positive) number.

I wanted to beautify the ticker a little bit more, but coudn't come up with a good HTML design.
