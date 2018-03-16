# liri-node-app

This is a Node.js coommand line application 

LIRI will do any of the below command when you enter them into the command line starting with node liri.js :

my-tweets
spotify-this-song
movie-this
do-what-it-says


node liri.js my-tweets
output the last 20 tweets of which ever user name you put in to the terminal.

node liri.js spotify-this-song "---"
shows the following information about the song in the terminal

artist(s)
song name
preview link of the song from spotify
album that the song is a part of


node liri.js movie-this "---"
output to the terminal:

Title
Year
IMDB Rating
Country
Language
Plot
Actors
Rotten Tomatoes Rating
Rotten Tomatoes URL
Example for do what it says

node liri.js do-what-it-says
These are the npm packages I used and are needed to run the app

fs package in node
twitter
spotify
request
to install these npm packages run these commands one at a time.

npm install twitter
npm install spotify
npm install request