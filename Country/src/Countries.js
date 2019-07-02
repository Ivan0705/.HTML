var countries = [
    {
        country: "Russia,",
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
                name: "Ryazan",
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
        country: "Monaco", cities: [
            {
                name: "Monaco",
                population: 38400
            }]
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

var maxCountCitiesInCountry = getMaxCountCitiesInCountry(countries);
maxCountCitiesInCountry.forEach(function (items) {
    console.log("Список стран с максимальным количеством городов: " + items);
});

function getMaxCountCitiesInCountry(array) {
    var maxCount = array.reduce(function (prev, current) {
        return Math.max(prev, current.cities.length);

    }, 0);
    return array.filter(function (value) {
        return value.cities.length === maxCount;
    }).map(function (el) {
        return el.country;
    });
}

var infoCountry = getInfoCountry(countries);
console.log(infoCountry);

function getInfoCountry(array) {
    function getPopulation(city) {
        return city.reduce(function (prev, value) {
            return prev + value.population;
        }, 0);
    }

    var info = {};
    array.forEach(function (items) {
        info[items.country] = getPopulation(items.cities);
    });
    return info;
}