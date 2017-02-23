/* ================================
Week 6 Assignment: Basic Application

Take a look at the midterm prototype: https://marvelapp.com/bf2c9h/screen/10434841
Try clicking on the "Next" and "Previous" buttons. This task will ask you to write some functions
that will enable us to write an application like in the midterm.

Write three functions: clickNextButton, clickPreviousButton, and saySlideName.
clickNextButton and clickPreviousButtons should simulate what will happen when someone clicks
on a next or previous button in your application.

You don't need to create HTML buttons or a useable application—this exercise is asking you to create
functions that will be used in your application. To test it out, try calling the functions in your
console. For example, try running: clickNextButton() and see what it does. Use lots of console logs!
================================ */

var state = {
  "slideNumber": 0, // slideNumber keeps track of what slide you are on. It should increase when you
                    // click the next button and decrease when you click the previous button. It
                    // should never get so large that it is bigger than the dataset. It should never
                    // get so small that it is smaller than 0.
/*  "slideData": [
    {
      "name": "Leaflet",
      "language": "Javascript",
      "namespace": "L"
    },
    {
      "name": "Underscore",
      "language": "Javascript",
      "namespace": "_"
    },
    {
      "name": "jQuery",
      "language": "Javascript",
      "namespace": "$"
    }
  ]
*/
};

$(document).ready(function(){

 $( "#prev_slide" ).click(function(){
  prev();
 });

 $( "#next_slide" ).click(function(){
  next();
 });
});

var slides = [ "s1" , "s2" , "s3" , "s4" ];

function prev()
{
 $( '#storyboard_slide' ).fadeOut(300,function()
 {
  var prev_val = document.getElementById( "slideNum" ).value;
  var prev_val = Number(prev_val) - 1;
  if(prev_val< = -1)
  {
   prev_val = slides.length - 1;
  }
  $( '#storyboard_slide' ).attr( 'src' , 'slides/'+slides[prev_val]+'.jpg' );
  document.getElementById( "slideNum" ).value = prev_val;
 });
 $( '#storyboard_slide' ).fadeIn(1000);
}

function next()
{
 $( '#storyboard_slide' ).fadeOut(300,function()
 {
  var next_val = document.getElementById( "slideNum" ).value;
  var next_val = Number(next_val)+1;
  if(next_val >= slides.length)
  {
   next_val = 0;
  }
  $( '#storyboard_slide' ).attr( 'src' , 'slides/'+slides[next_val]+'.jpg' );
  document.getElementById( "slideNum" ).value = next_val;
 });
 $( '#storyboard_slide' ).fadeIn(1000);
}



/*
var clickNextButton = function() {
};

var clickPreviousButton = function() {

};

var saySlideName = function(slide) {
  // saySlideName uses console.log to "say" the name of the slide it is given. It should run when
  // someone clicks on one of the buttons.
};


/*

var map = L.map('map', {
  center: [40.5867, -73.8115],
  zoom: 12
});
var Stamen_TonerLite = L.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
  attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  subdomains: 'abcd',
  minZoom: 0,
  maxZoom: 20,
  ext: 'png'
}).addTo(map);


var dataset = "https://raw.githubusercontent.com/estheroids/mappluto/master/RP.geojson";
var featureGroup;


var myStyle = function(feature) {
  switch (feature.properties.landuse) {
      case '01': return {fillColor: "#fff97f", color: "#fff97f", weight: 0, opacity:0.7, fillOpacity:0.5};
      case '02':   return {fillColor: "#fff64C", color: "#fff64C", weight: 0, opacity:0.7, fillOpacity:0.5};
      case '03':   return {fillColor: "#fff300", color: "#fff300", weight: 0, opacity:0.7, fillOpacity:0.5};
      case '04':   return {fillColor: "#ff5614", color: "#ff5614", weight: 0, opacity:0.7, fillOpacity:0.5};
      case '05':   return {fillColor: "#cc4410", color: "#ffffff", weight: 0, opacity:0.7, fillOpacity:0.5};
      case '06':   return {fillColor: "#c1bbb9", color: "#ffffff", weight: 0, opacity:0.7, fillOpacity:0.5};
      case '07':   return {fillColor: "#6f6c6a", color: "#ffffff", weight: 0, opacity:0.7, fillOpacity:0.5};
      case '08':   return {fillColor: "#a152ce", color: "#ffffff", weight: 0, opacity:0.7, fillOpacity:0.5};
      case '09':   return {fillColor: "#77e134", color: "#ffffff", weight: 0, opacity:0.7, fillOpacity:0.5};
      case '10':   return {fillColor: "#494d47", color: "#ffffff", weight: 0, opacity:0.7, fillOpacity:0.5};
      case '11':   return {fillColor: "#ffeee7", color: "#ffffff", weight: 0, opacity:0.7, fillOpacity:0.5};
    }
};



var showResults = function() {
  // => <div id="intro" css="display: none">
  $('#intro').hide();
  // => <div id="results">
  $('#results').show();
};

var landuseName = function (toFullName){
  switch (toFullName){
    case '01':   return "One & Two Family Buildings";
    case '02':   return "Multi-Family Walk-Up Buildings";
    case '03':   return "Multi-Family Elevator Buildings";
    case '04':   return "Mixed Residential & Commercial Buildings";
    case '05':   return "Commercial & Office Buildings";
    case '06':   return "Industrial & Manufacturing";
    case '07':   return "Transportation & Utility";
    case '08':   return "Public Facilities & Institutions";
    case '09':   return "Open Space & Outdoor Recreation";
    case '10':   return "Parking Facilities";
    case '11':   return "Vacant Land";
  }
};


var eachFeatureFunction = function(layer) {
  layer.on('click', function (event) {
    console.log(layer.feature);

    var displayLU = layer.feature.properties.landuse;
    $(".lu").text(landuseName(displayLU));

    var displayAdd = layer.feature.properties.address;
    $(".address").text(displayAdd);

    var displayCT = layer.feature.properties.ct2010;
    $(".ct").text(displayCT);

    var displayYB = layer.feature.properties.yearbuilt;
    $(".yb").text(displayYB);

    map.fitBounds(layer.getBounds());

    showResults();
  });
};

var myFilter = function(feature) {
  if (feature.properties.landuse !== null){
  return true;
}
};

var closeResults = function() {
  $('#intro').show();
  $('#results').hide();
};

$(".button").click(function(){
  closeResults();
  map.fitBounds(featureGroup.getBounds());
});

$(document).ready(function() {
  $.ajax(dataset).done(function(data) {
    var parsedData = JSON.parse(data);
    featureGroup = L.geoJson(parsedData, {
      style: myStyle,
      filter: myFilter
    }).addTo(map);

    featureGroup.eachLayer(eachFeatureFunction);
  });
});
*/
