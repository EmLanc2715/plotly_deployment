////// Simple line graph////////
//Plotly.newPlot("plotArea", [{x: [1, 2, 3], y: [10, 20, 30]}]);


////// Luncheon Bar Graph//////
//var trace = [{
    //x: ["burrito", "pizza", "chicken"],
    //y: [10, 18, 5],
    // type: "bar"
//}];

//var layout = {
    //title: "Luncheon Survey",
    //xaxis: { title: "Food Options"},
    //yaxis: { title: "Number of Respondents"}
//};

//Plotly.newPlot("plotArea", trace, layout);


//Nonalcoholic Bar Graph

var trace = {
    x:["nonalcoholic beer", "nonalcoholic wine", "nonalcholic martini", "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
    y: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
    type: "bar"
};

var data = [trace];
var layout = {
    title: "'Bar' Chart",
    xaxis: {title: "Drinks"},
    yaxis: {title: "% of Drinks Ordered"}
};

Plotly.newPlot("plotArea", data, layout);

//Nonalcoholic Pie Chart

var trace = {
    labels: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita", 
    "iced tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],

    values: [22.7, 17.1, 9.9, 8.7, 7.2, 6.21, 6.0, 4.6],

    type: 'pie'
};

var data =[trace];
var layout = {
    title: "'Pie' Chart",
};

Plotly.newPlot("plotArea", data, layout);

// Scatter Plot

//var trace1 = {
    //x: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita", 
    //"iced tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
    //y: [22.7, 17.1, 9.9, 8.7, 7.2, 6.2, 6.0, 4.6],
    //mode: 'markers',
    //type: 'scatter'
//};
//var data = [trace1];
//Plotly.newPlot('plotArea', data);


//Map()functions
var numbers =[1,2,3,4,5];
var doubled = numbers.map(function(num) {
    return num * 2;
});
console.log(doubled)

//Map() Add 5

var number =[0,2,4,6,8];
var plus5 = number.map(function(five) {
    return five + 5;
});console.log(plus5)

//Map to Extract populations
var cities =[
    {
        "Rank": 1,
        "Population" : "1511946"
    
    },
    {
        "Rank" :2,
        "Population": "1626078"
    },
    {
        "Rank" :3,
        "Population": "1341075"
    }
];

var cityPop = cities.map(function(Population){
     return Population.Population;
});

console.log(cityPop);


//Filter() Function

var numbers = [1,2,3,4,5];

var larger = numbers.filter(function(num){
    return num > 1;

});

console.log(larger);

//Fat Arrow Functions

var familyAge = [3,2,39,37,9];
var sortedAge = familyAge.sort((anElement, anotherElement) => anElement - anotherElement);
console.log(sortedAge)


//Slice
var words =['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];
words.slice(3, );
console.log(words.slice(3, ));