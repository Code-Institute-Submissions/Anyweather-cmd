let weather = {
    apiKey: "28b8586750aa9252b6c5a344821cb9ff",

    /*Creating the function to retrieve new weather data */
    getWeather: function (city) {

        /* Obtaining the unit meausurements & location from the source site using the API key provided */
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=" + this.apiKey)
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
            icon,
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

        console.log(name, icon, description, temp, humidity, speed);

        /* Assigning the variables above with their values from json to the HTML classes */
        document.querySelector(".location").innerText = name;
        document.querySelector(".conditions").innerText = "Conditions : " + description;
        document.querySelector(".temperature-c").innerText = temp + "°c";
        document.querySelector(".humidity").innerText = "Humidity : " + humidity + "%";
        document.querySelector(".wind-speed").innerText = "Wind Speed : " + speed + "mph";

    }
};