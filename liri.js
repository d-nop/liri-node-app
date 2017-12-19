var keys = require("./keys.js");
var inquirer = require("inquirer")
var liriArg = process.argv;
var tweets = "";
// var my-tweets = liriArg + "my-tweets";
// var spotify-this-song = liriArg + "spotify-this-song";
// var movie-this = liriArg + "movie-this";
// var do-what-it-says = liriArg + "do-what-it-says";

var Twitter = require('twitter');

var client = new Twitter({
    consumer_key: keys.twitterKeys.consumer_key,
    consumer_secret: keys.twitterKeys.consumer_secret,
    access_token_key: keys.twitterKeys.access_token_key,
    access_token_secret: keys.twitterKeys.access_token_secret,
});

var params = { screen_name: 'dannop01' };
client.get('statuses/user_timeline', params, function(error, tweets, response) {
    if (!error) {
        console.log(tweets[0].text);
        console.log(tweets[0].created_at);

    }

});

inquirer.prompt([{
    type: "list",
    choices: ["my-tweets", "spotify-this-song", "movie-this", "do-what-it-says"],
    name: "command",
    message: "What select what you would like to"
}])



// Start of OMDB API section
var request = require("request");

// Store all of the arguments in an array
var nodeArgs = process.argv;

// Create an empty variable for holding the movie name
var movieName = "";

// Loop through all the words in the node argument
// And do a little for-loop magic to handle the inclusion of "+"s
for (var i = 2; i < nodeArgs.length; i++) {

    if (i > 2 && i < nodeArgs.length) {

        movieName = movieName + "+" + nodeArgs[i];

    } else {

        movieName += nodeArgs[i];

    }
}

// Then run a request to the OMDB API with the movie specified
var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";

// This line is just to help us debug against the actual URL.
console.log(queryUrl);

request(queryUrl, function(error, response, body) {

    // If the request is successful
    if (!error && response.statusCode === 200) {

        // Parse the body of the site and recover Title, Year, imdbRating, Rotten Tomatoe Rating, Country, Language, Plot and Actors

        console.log("*Title* : " + JSON.parse(body).Title + "\n*Release Year* : " + JSON.parse(body).Year +
            "\n*IMDB Rating* : " + JSON.parse(body).imdbRating + "\n*Rotten Tomatoes Rating* : " + JSON.parse(body).Ratings[1].Value +
            "\n*Country* : " + JSON.parse(body).Country + "\n*Language* : " + JSON.parse(body).Language + "\n*Plot* : " +
            JSON.parse(body).Plot + "\n*Actors* : " + JSON.parse(body).Actors
        );
    }
});

// Start of spotify API Section
var Spotify = require('node-spotify-api');
var keys = require("./keys.js");

var spotify = new Spotify({
    id: keys.spotifyKeys.id,
    secret: keys.spotifyKeys.secret
});

spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
    if (err) {
        return console.log('Error occurred: ' + err);
    }

    console.log(data);
});