$(() => {

    //===================== Global variables
    const map = initializeMap()
    const OPEN_WEATHER_URL = 'https://api.openweathermap.org/data/2.5/forecast';
    const SA_COORDINATES = [29.4252, -98.4916]
    const SA_URL = getWeatherURL(...SA_COORDINATES)



    //======================== functions

    //This function initializes the map
    function initializeMap() {
        mapboxgl.accessToken = MAPBOX_TOKEN;

        const mapOptions = {
            container: "map",
            style: "mapbox://styles/mapbox/satellite-streets-v12",
            zoom: 10,
            center: [-98.4916, 29.4252],
        }
        return new mapboxgl.Map(mapOptions);
    }

    //This function uses geocode to extract coordinates from the map


    // This function will create the URL that will be used to make a request based on coordinates
    function getWeatherURL(lat, lon) {
        return `${OPEN_WEATHER_URL}?lat=${lat}&lon=${lon}&units=imperial&appid=${OPEN_WEATHER_APPID}`;
    }

    //This function will request weather data from the location of the weather_url
    $.ajax(SA_URL).done(data => {
        console.log(data)

        //log city
        // console.log(data.city)
        //Log temperature
        // console.log(data.list[0].main.temp)
        //log feels like
        // console.log(data.list[0].main.feels_like)



    });

    //This function will log the min and max temps for the week
    $.ajax(SA_URL).done(data => {
        const minMaxTemps = returnMinMaxTemps(data);
        minMaxTemps.forEach(minMaxTemps => {
            // console.log(minMaxTemps.min)
            // console.log(minMaxTemps.max)
        })
    });

    //This function will log the humidity for all days
    $.ajax(SA_URL).done((data) => {


        for (let i = 0; i < data.list.length; i += 8) {
            const weeklyHumidity = data.list[i].main.humidity

            console.log(weeklyHumidity)
        };
    });

    //This function will log the feels like for all days
    $.ajax(SA_URL).done(data => {

        for (let i = 0; i < data.list.length; i += 8) {
            const weeklyFeels = data.list[i].main.feels_like
            // console.log(weeklyFeels)
        }
    });

    //This function will display the weather forecast for 5 days
    $.ajax(SA_URL).done(data => {

        for (let i = 0; i < data.list.length; i += 8) {
            const weatherCard = $(' <div class="col-3 col-md-3 col-sm-3 d-flex"></div>')
                weatherCard.html(`
                    <div class="col d-flex justify-content-center">
                    <div class=" d-flex card card-cover h-100 w-100 overflow-hidden  text-bg-dark bg-black bg-gradient rounded-4 shadow-lg px-3">
                        <div class="d-flex column border-bottom border-info pb-4">
                            <div class="col-6 ">
                                <h3 class="text-center mt-2 mx-4 display-8 fw-bold">99˚</h3>
                                <p class="text-center">High/Low</p>
                            </div>
                            <div class="d-flex flex-column justify-content-center ">
                                <p class="text-center">Cloudy</p>
                                <img src="https://github.com/twbs.png" alt="Bootstrap" width="50" height="50"
                                     class="rounded-circle border border-white">
                            </div>
                        </div>
                        <div class="d-flex flex-row align-items-center h-100 text-shadow-1 border-bottom border-info px-3 pt-1">
                            <ul class="flex-column list-unstyled">
                                <li class="d-flex align-items-center me-3">
                                    <h4 class="text-center"> Feels like 101˚</h4>
                                </li>
                                <li class="d-flex align-items-center me-3">
                                    <h5>Humidity: 86%</h5>
                                </li>
                                <li class="d-flex align-items-center">
                                    <small>wind</small>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <ul class="flex-column list-unstyled px-3 pt-1">
                                <li>
                                    <h6>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                             fill="currentColor" class="bi bi-geo-alt" viewBox="0 0 16 16">
                                            <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"/>
                                            <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                                        </svg>
                                        location
                                    </h6>
                                </li>
                                <li>
                                    <h6>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                             fill="currentColor" class="bi bi-calendar3" viewBox="0 0 16 16">
                                            <path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z"/>
                                            <path d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
                                        </svg>
                                        ${data.list[i].dt_txt}
                                    </h6>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                `)
            $('#weather-cards').append(weatherCard);
        }
    })

    //====================== Events











    //======================= Runs when program loads
    initializeMap()



});