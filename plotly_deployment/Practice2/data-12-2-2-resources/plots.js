console.log(cityGrowths);


//Sort the cities by growth
var sortedCities = cityGrowths.sort((a,b) => a.Increase_from_2016 - b.Increase_from_2016).reverse();

//Use slice to select the top 5 cities by population growth
var topFiveCities = sortedCities.slice(0,5);

// Use the map function to create 2 arrays: one for city names and the other for population growths

var topFiveCities = cityGrowths.map(city => city.City);
var topFiveCityGrowths = cityGrowths.map(city => parseInt(city.Increase_from_2016));
