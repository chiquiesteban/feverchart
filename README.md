feverchart
==========

Fever chart resposive template, using D3

Beta version. Use the utils.js file to customize your fever chart.
Show up to seven different concepts, one color each.

OPTIONS
 - showEach --> Number of dates to show
 - vertSteps --> Number of horizontal lines to show
 - maxVert --> Maximum value to show (for instance, although the maximum value included is 93, you can set this to 100 to show regular steps in horizontal lines)
 - strokew ---> stroke width for all lines
 - color1, color2, color3... --> Color of each stroke
 - data --> Upload the data for your chart. First value for date, rest of them numeric values (up to 7). JSON rows or CSV
 

FUTURE IMPROVEMENTS
- Improve performing in Chrome
- Option to include as many lines as you want without differentiate colors (just highlight the one you're rolling over)
