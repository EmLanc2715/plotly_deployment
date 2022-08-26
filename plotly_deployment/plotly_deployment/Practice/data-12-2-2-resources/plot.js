console.log(cityGrowths);

// Create two arrays. 1 for city names and 2 for corresponding population growth

var topFiveCityNames = cityGrowths.map(city => city.City);

var topFiveCityGrowths = cityGrowths.map(city => parseInt(city.Increase_from_2016));

console.log(topFiveCityNames);
console.log(topFiveCityGrowths);

//Create a Bar Chart with Arrays

var trace = {
    x: topFiveCityNames,
    y: topFiveCityGrowths,
    type: "bar"

};

var data = [trace];
var layout = {
    title: "Most Rapidly Growing Cities",
    xaxis: {title: "City"},
    yaxis: {title: "Population Growth, 2016,2017"}
};

Plotly.newPlot("bar-plot", data, layout);