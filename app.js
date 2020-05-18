

// Variables
var getTitle = document.getElementById("movie");
var showPoster = document.getElementById("poster");
var showTitle = document.getElementById("title");
var showRating = document.getElementById("rating");
var showYear = document.getElementById("year");
var showPlot = document.getElementById("plot");
var showGenre = document.getElementById("genre");
// Button Click
document.getElementById("submit").onclick = buttonClick;

// API interation
function apiCall() {
    $.getJSON('https://www.omdbapi.com/?apikey=ecb52ae2&t=' + encodeURI(getTitle.value)).then(function(response){

        // API Variables
        var poster = response.Poster;
        var title = response.Title;
        var rating = response.Rated;
        var year = response.Year;
        var plot = response.Plot;
        var genre = response.Genre;
        console.log(response);
        // DOM Interaction
        showPoster.src = poster;
        showTitle.innerHTML = title;
        showRating.innerHTML = rating;
        showYear.innerHTML = year;
        showPlot.innerHTML = plot;
        showGenre.innerHTML = genre;
    })
}
function buttonClick () {
    console.log("it worked");
    
    apiCall();
}

//PROBLEM: 
//NOTE: 

// ========================
// TO DO
// ========================
// Search by genre
// Get random movies
// Empty search field
// Display error message if no movie is found
// ========================
// POTENTIALLY USEFUL 
// ========================
// console.log(title);
// console.log(poster);
// console.log(rating);
// console.log(year);
// console.log(plot);
// console.log(getTitle.value);
//API KEY = http://www.omdbapi.com/?apikey=ecb52ae2&
//API SEARCH http://www.omdbapi.com/?t=