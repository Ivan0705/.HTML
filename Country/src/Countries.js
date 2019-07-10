var countries = [
    {
        country: "Russia",
        cities: [
            {
                name: "Moscow",
                population: 12000000
            },
            {
                name: "Saint-Petersburg",
                population: 7000000
            },
            {
                name: "Novosibirsk",
                population: 1700000
            },
            {
                name: "Rostov",
                population: 550000
            }
        ]
    },
    {
        country: "USA",
        cities: [
            {
                name: "New-York",
                population: 8000000
            },
            {
                name: "Chicago",
                population: 2700000
            }
        ]
    },
    {
        country: "Monaco",
        cities: [
            {
                name: "Monaco",
                population: 38400
            }
        ]
    },
    {
        country: "Germany",
        cities: [
            {
                name: "Berlin",
                population: 3500000
            },
            {
                name: "Munich",
                population: 1800000
            },
            {
                name: "Dresden",
                population: 540000
            },
            {
                name: "Hamburg",
                population: 1900000
            }
        ]
    }];

var countriesWithMaxCitiesCount = getCountriesWithMaxCitiesCount(countries);
countriesWithMaxCitiesCount.forEach(function (listCountriesWithMaxCities) {
    console.log("Список стран с максимальным количеством городов: " + listCountriesWithMaxCities);
});

function getCountriesWithMaxCitiesCount(arrayCountries) {
    var maxCount = arrayCountries.reduce(function (prev, current) {
        return Math.max(prev, current.cities.length);
    }, 0);

    return arrayCountries.filter(function (country) {
        return country.cities.length === maxCount;
    }).map(function (el) {
        return el.country;
    });
}

var countriesInfo = getCountriesInfo(countries);
console.log(countriesInfo);

function getCountriesInfo(arrayCountries) {
    function getPopulation(city) {
        return city.reduce(function (prev, value) {
            return prev + value.population;
        }, 0);
    }

    var info = {};
    arrayCountries.forEach(function (item) {
        info[item.country] = getPopulation(item.cities);
    });
    return info;
}