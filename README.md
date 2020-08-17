# codeReview2

Band pass filter app,

soundwave, lower limit, upper limit.

array of frequencies, upperlimit, lower limit.

input --> output

lower - 20
upper - 50

[20, 20, 50] --> [20, 20, 50] // no filters needed
[10, 30, 50] --> [20, 30, 50] // lower limit hit
[20, 30, 60] --> [20, 30, 50] // upper limit hit

lower - empty
upper - 50 

[20, 20, 50] --> [40, 40, 50] // auto 40 lower limit added

lower - 20
upper - empty


[20, 30, 50] --> [20, 30, 1000] // auto 1000 upper limit added



// user forgets to enter lower limit: set to 40, upper limit: 1000
// forget to input a soundwave - throw an error.



