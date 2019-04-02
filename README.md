# LIRI
LIRI Homework Assignment for Vanderbilt Software Coding Bootcamp

## APIs 
* axios
* fs
* Spotify
* Bands in Town
* OMDB
* Moment.js

## Application Functionality

This application will allow the user to run the application on the command line and execute and return the results for four specific commands.

* concert-this
* spotify-this-song
* movie-this
* do-what-it-says


### _concert-this_
The concert-this command takes in a band name as user input and uses it as a search parameter in the Bands in Town Artist Events API to return the following information for all of the band's upcoming events:

* Name of the venue 
* Venue location
* Date of the event


### _spotify-this-song_
The spotify-this-song command takes in a song name as user input and uses it as a search parameter in the Spotify api.  The following information is returned:

* Artist(s)
* Song name
* Preview link of the song on Spotify
* Album


### _movie-this_
The movie-this command takes in movie as user input and uses it as a search parameter in the OMDB api.  The following information is returned:

* Title of the movie.
* Year the movie came out.
* IMDB Rating of the movie.
* Rotten Tomatoes Rating of the movie.
* Country where the movie was produced.
* Language of the movie.
* Plot of the movie.
* Actors in the movie.


### _do-what-it-says_
The do-what-it-says command takes the contents of the random.txt file and executes a command based on these contents. 


## Default values
The application provides the following default values for each command:

* concert-this: “Moby” (if I could dial that clock back to 1999, this would be a much more successful search)
* spotify-this-song: “The Sign” (returns Sign of the Times by Harry Styles - don’t ask)
* movie-this: “Mr. Nobody” (No I haven’t seen it, and contrary to Trilogy it is not on Netflix.)
* do-what-it-says: “I Want It That Way” (this command does not actually take a search value, you just get this result for free)

## Screenshots
For screenshots of the LIRI application in action, see link below:

https://docs.google.com/document/d/1KtW5oasd34r7uV-YV0yGr7qjYAF0yZMROfi1yYVay_0/edit?usp=sharing
