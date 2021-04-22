let weather = {
    apiKey: "6a4db19a52703903602ea14236522a12",

    /*Creating the function to retrieve new weather data */
    getWeather: function (city) {

        /* Obtaining the unit meausurements & location from the source site using the API key provided */
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=" + this.apiKey)
            /* Then getting the response in json format */
            .then((response) => response.json())

            /* Then producing the new data from the showWeather function created */
            .then((data) => this.showWeather(data));
    },
    showWeather: function (data) {

        //Assigning new variables and values 
        /* Retrieving the city name from the json data */
        const {
            name
        } = data;

        /* Retrieving the weather icon & conditions (or description) from the json data */
        const {
            description
        } = data.weather[0];

        /* Retrieving the temp and humidity from the json data */
        const {
            temp,
            humidity
        } = data.main;

        /* Retrieving the wind speed from the json data */
        const {
            speed
        } = data.wind;

        /* Assigning the variables above with their values from json to the HTML classes */
        document.querySelector(".location").innerText = name;
        document.querySelector(".conditions").innerText = "Conditions : " + description;
        document.querySelector('#temperature').innerText = temp + "°C";
        document.querySelector(".humidity").innerText = "Humidity : " + humidity + "%";
        document.querySelector(".wind-speed").innerText = "Wind Speed : " + speed + "mph";
    },

    /* Linking api data to a function and assigning to the search bar value */
    search: function () {
        this.getWeather(document.querySelector(".search-bar").value);
    }

};



/* JS for unresponsive unit conversion code discussed with tutor support*/
function toFahrenheit() {

    let convert = document.getElementById('temperature').textContent;
    convert = convert * 9 / 5 + 32;
    let splitVals = convert.split("°C");
    splitVals = splitVals;
    return convert;
};
/* JS for unresponsive unit conversion - end */



document.querySelector(".enter-button")

    /* Adding an event listener with a function to the enter button to retrieve api data when data assigned to the weather variable function is executed */
    .addEventListener("click", function () {
        weather.search();
    });


document.querySelector(".search-bar")

    /* Adding a key up event listener so the user can press enter to retrieve weather instead of clicking on the button */
    .addEventListener("keyup", function (event) {
        if (event.key == "Enter") {
            weather.search();
        }
    });