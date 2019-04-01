
require("dotenv").config();
var keys = require("./keys.js");
var Spotify = require("node-spotify-api");
var axios = require("axios");
var moment = require('moment');
var fs = require("fs");

var spotify = new Spotify(keys.spotify);



//Global variables
var userCommand = process.argv[2].toLowerCase().trim();
var userSearch = process.argv.slice(3, process.argv.length).join("+");



function commandInput(command, search) {

    switch (command) {
        case "concert-this":

            if (search === undefined || search.length === 0) {
                search = "Moby";
            }

            concertThis(search);
            break;

        case "spotify-this-song":

        if (search === undefined || search.length === 0) {
            search = "The Sign";
        }
            spotifyThis(search);
            break;

        case "movie-this":

            if (search === undefined || search.length === 0) {
                search = "Mr.+Nobody";
            }

            requestOMDB(search);
            break;

        case "do-what-it-says":
            
            doWhatItSays()

            break;

        default:
            console.log("Please rerun the program and enter a proper command - <concert-this>, <spotify-this>, <movie-this>, or <do-what-it-says>");
            break;
    }
}




function requestOMDB(search) {

    axios.get("http://www.omdbapi.com/?t=" + search + "&y=&plot=short&apikey=trilogy").then(
        function (response) {

            var movieData = {
                Movie_Title: response.data.Title,
                Year: response.data.Year,
                IMDB_Rating: response.data.imdbRating,
                Rotten_Tomatoes: response.data.Ratings[1].Value,
                Country: response.data.Country,
                Language: response.data.Language,
                Plot: response.data.Plot,
                Actors: response.data.Actors
            }

            printOutput(movieData);

        }
    );

}



function printOutput(outputObject) {

    console.log("\n---------------------------------------------------------------------------------------");

    for (var prop in outputObject) {
        if (typeof outputObject[prop] !== 'function') {
            console.log(prop.replace("_", " ") + ": " + outputObject[prop]);
        }
    }

    console.log("---------------------------------------------------------------------------------------\n");
}



function concertThis(artist) {

    axios.get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp").then(
        function (response) {

            if (response.data.length < 1) {
                console.log("No events are scheduled for " + artist.replace("+", " ") + ".");
            }

            else {
                for (var i in response.data) {

                    var concertData = {
                        Venue_Name: response.data[i].venue.name,
                        Venue_Location: response.data[i].venue.city + ", " + response.data[i].venue.region,
                        Date: moment(response.data[i].datetime).format("LLLL")
                    }
                    printOutput(concertData);
                }
            }

        }
    );

}

function spotifyThis(songName) {

    spotify.search({type: 'track', query: songName}, function(err, data){
        if(err){
            return console.log("Error occurred: " + err);
        }

        var spotifyData = {
            Artist: data.tracks.items[0].album.artists[0].name,
            Song_Name: data.tracks.items[0].name,
            Preview_Link: data.tracks.items[0].external_urls.spotify,
            Album: data.tracks.items[0].album.name
        }

        printOutput(spotifyData);

    })
}


function doWhatItSays() {

    fs.readFile("random.txt", "utf8", function(error, data){

        if(error){
            return console.log(error);
        }

        var dataArr = data.split(",");
        var command = dataArr[0];
        var song = dataArr[1];

        commandInput(command, song);
        
    })
}

commandInput(userCommand, userSearch);