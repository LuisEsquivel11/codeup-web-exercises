$(() => {

    //===================== Global variables
    const map = initializeMap()
    const OPEN_WEATHER_URL = 'https://api.openweathermap.org/data/2.5/forecast';
    const SA_COORDINATES = [29.4252, -98.4916]
    const SA_URL = getWeatherURL(...SA_COORDINATES)

    $('#search-btn').on('click', function (){
        initializeNewMap()
        newCityWeather()
    } )

    // ======================== functions

    // This function initializes the map
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

    function initializeNewMap() {
        const searchBar = document.getElementById('search-box')
        const promise =  geocode(searchBar.value , MAPBOX_TOKEN)
        promise.then((result) => {
            const lat = result[0]
            const lon = result[1]
            const mapOptions = {
                container: "map",
                style: "mapbox://styles/mapbox/satellite-streets-v12",
                zoom: 10,
                center: [lat, lon],
            }
                return new mapboxgl.Map(mapOptions)
        })
    }

    // This function will display the weather forecast for San Antonio off rip

        let lon = 29.4252;
        let lat = -98.4916;
    $.ajax(getWeatherURL(lon, lat)).done(data => {
        const todaysCard = $('<div  class="d-flex card card-cover h-100 w-75 overflow-hidden  text-bg-dark bg-black bg-gradient  rounded-4 shadow-lg px-3"></div>')
        todaysCard.html(`
                    <div class="d-flex column pb-2">
                        <div class="col-6 d-flex gap-2 justify-content-start">
                            <h3 class="text-center mt-2 ms-5 display-1 ">${data.list[0].main.temp}˚</h3>
                            <p class="text-center mb-5 mt-2">${data.list[0].main.temp_max}˚/${data.list[0].main.temp_min}˚</p>
                        </div>
                        <div class="d-flex flex-column justify-content-center mx-5 ">
                            <p class="text-center">${data.list[0].weather[0].description}</p>
                        </div>
                    </div>
                    <div class="d-flex flex-row align-items-center h-50 text-shadow-1 border-bottom border-info px-3 pt-1">
                        <ul class="flex-column list-unstyled">
                            <li class="d-flex align-items-center me-3">
                                <h4 class="text-center fs-3"> Feels like ${data.list[0].main.feels_like}˚</h4>
                            </li>
                            <li class="d-flex align-items-center me-3">
                                <h5>Humidity: ${data.list[0].main.humidity}%</h5>
                            </li>
                            <li class="d-flex align-items-center">
                                <small>wind ${data.list[0].wind.speed}/mph</small>
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
                                    ${data.city.name}
                                </h6>
                            </li>
                            <li>
                                <h6>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                         fill="currentColor" class="bi bi-calendar3" viewBox="0 0 16 16">
                                        <path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z"/>
                                        <path d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
                                    </svg>
                                    ${data.list[0].dt_txt.split(" ")[0]}
                                </h6>
                            </li>
                        </ul>
                    </div>
                `)
        $('#today-card').append(todaysCard)

        for (let i = 0; i < data.list.length; i += 8) {
            const highLowTemps = returnMinMaxTemps(data)
            const weatherCard = $(' <div class="col-3 col-md-3 col-sm-3 d-flex"></div>')
            weatherCard.html(`
                    <div class="col d-flex justify-content-center">
                    <div class=" d-flex card card-cover h-100 w-100 overflow-hidden  text-bg-dark bg-black bg-gradient rounded-4 shadow-lg px-3">
                        <div class="d-flex column border-bottom border-info pb-4">
                            <div class="col-6">
                                <h3 class="text-center  mt-2 mx-2 display-8">${data.list[i].main.temp}˚</h3>
                                <p id="high-low" class="text-center">${data.list[i].main.temp_max}˚/${data.list[i].main.temp_min}˚</p>
                            </div>
                            <div class="d-flex flex-column justify-content-center px-4">
                                <p class="text-center">${data.list[i].weather[0].description}</p>
                                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-brightness-high-fill" viewBox="0 0 16 16">\\n' +
                                '  <path d="M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"/>\\n' +
                                '</svg>
                            </div>
                        </div>
                        <div class="d-flex flex-row align-items-center h-100 text-shadow-1 border-bottom border-info px-3 pt-1">
                            <ul class="flex-column list-unstyled">
                                <li class="d-flex align-items-center me-3">
                                    <h4 class="text-center fs-6"> Feels like ${data.list[i].main.feels_like}˚</h4>
                                </li>
                                <li class="d-flex align-items-center me-3">
                                    <h5 class="fs-6">Humidity: ${data.list[i].main.humidity}%</h5>
                                </li>
                                <li class="d-flex align-items-center">
                                    <small>wind ${data.list[i].wind.speed}/mph</small>
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
                                        ${data.city.name}
                                    </h6>
                                </li>
                                <li>
                                    <h6>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                             fill="currentColor" class="bi bi-calendar3" viewBox="0 0 16 16">
                                            <path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z"/>
                                            <path d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
                                        </svg>
                                        ${data.list[i].dt_txt.split(" ")[0]}
                                    </h6>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                `)
            $('#weather-cards').append(weatherCard);

        }
    });

    //This function extracts search input, uses geocode to get coords then puts them in getWeatherUrl() then calls on the api to fill html
    //with values from the data and creates the cards
    function newCityWeather() {
        const searchBar = document.getElementById('search-box')
        const promise =  geocode(searchBar.value , MAPBOX_TOKEN)
        promise.then((result) => {
            const lat = result[0]
            const lon = result[1]
            const newCityURL = getWeatherURL(lon, lat)
        $.ajax(newCityURL).done(data => {
            $('#weather-cards').html("")
            $('#today-card').html("")

            const todaysCard = $('<div  class="d-flex card card-cover h-100 w-75 overflow-hidden  text-bg-dark bg-black bg-gradient  rounded-4 shadow-lg px-3"></div>')
            todaysCard.html(`
                    <div class="d-flex column pb-2">
                        <div class="col-6 d-flex gap-2 justify-content-start">
                            <h3 class="text-center mt-2 ms-5 display-1 ">${data.list[0].main.temp}˚</h3>
                            <p class="text-center mb-5 mt-2">${data.list[0].main.temp_max}˚/${data.list[0].main.temp_min}˚</p>
                        </div>
                        <div class="d-flex flex-column justify-content-center mx-5 ">
                            <p class="text-center">${data.list[0].weather[0].description}</p>
                        </div>
                    </div>
                    <div class="d-flex flex-row align-items-center h-50 text-shadow-1 border-bottom border-info px-3 pt-1">
                        <ul class="flex-column list-unstyled">
                            <li class="d-flex align-items-center me-3">
                                <h4 class="text-center fs-3"> Feels like ${data.list[0].main.feels_like}˚</h4>
                            </li>
                            <li class="d-flex align-items-center me-3">
                                <h5>Humidity: ${data.list[0].main.humidity}%</h5>
                            </li>
                            <li class="d-flex align-items-center">
                                <small>wind ${data.list[0].wind.speed}/mph</small>
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
                                    ${data.city.name}
                                </h6>
                            </li>
                            <li>
                                <h6>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                         fill="currentColor" class="bi bi-calendar3" viewBox="0 0 16 16">
                                        <path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z"/>
                                        <path d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
                                    </svg>
                                    ${data.list[0].dt_txt.split(" ")[0]}
                                </h6>
                            </li>
                        </ul>
                    </div>
                `)
            $('#today-card').append(todaysCard)

            for (let i = 0; i < data.list.length; i += 8) {
                const highLowTemps = returnMinMaxTemps(data)
                const weatherCard = $(' <div class="col-3 col-md-3 col-sm-3 d-flex"></div>')
                // console.log(highLowTemps)
                weatherCard.html(`
                    <div class="col d-flex justify-content-center">
                    <div class=" d-flex card card-cover h-100 w-100 overflow-hidden  text-bg-dark bg-black bg-gradient rounded-4 shadow-lg px-3">
                        <div class="d-flex column border-bottom border-info pb-4">
                            <div class="col-6">
                                <h3 class="text-center  mt-2 mx-2 display-8">${data.list[i].main.temp}˚</h3>
                                <p id="high-low" class="text-center">High/Low</p>
                            </div>
                            <div class="d-flex flex-column justify-content-center px-4">
                                <p class="text-center">${data.list[i].weather[0].description}</p>
                                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-brightness-high-fill" viewBox="0 0 16 16">\\n' +
                                '  <path d="M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"/>\\n' +
                                '</svg>
                            </div>
                        </div>
                        <div class="d-flex flex-row align-items-center h-100 text-shadow-1 border-bottom border-info px-3 pt-1">
                            <ul class="flex-column list-unstyled">
                                <li class="d-flex align-items-center me-3">
                                    <h4 class="text-center fs-6"> Feels like ${data.list[i].main.feels_like}˚</h4>
                                </li>
                                <li class="d-flex align-items-center me-3">
                                    <h5 class="fs-6">Humidity: ${data.list[i].main.humidity}%</h5>
                                </li>
                                <li class="d-flex align-items-center">
                                    <small>wind ${data.list[i].wind.speed}/mph</small>
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
                                        ${data.city.name}
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
        });
        })
    }

    // This function resets the map to the new city


    // function retrieveLat() {
    //     const searchBar = document.getElementById('search-box')
    //     const promise =  geocode(searchBar.value , MAPBOX_TOKEN)
    //     promise.then((result) => {
    //         const lat = result[0]
    //         const lon = result[1]
    //         return lat
    //     })
    //
    // }
    // function retrieveLon() {
    //     const searchBar = document.getElementById('search-box')
    //     const promise =  geocode(searchBar.value , MAPBOX_TOKEN)
    //     promise.then((result) => {
    //         const lat = result[0]
    //         const lon = result[1]
    //         return lon
    //     })
    //
    // }


    // This function will create the URL that will be used to make a request based on coordinates
    function getWeatherURL(lat, lon) {
        return `${OPEN_WEATHER_URL}?lat=${lat}&lon=${lon}&units=imperial&appid=${OPEN_WEATHER_APPID}`;
    }





    // This function will display the high and low temp

    $.ajax(SA_URL).done(data => {
        const minMaxTemps = returnMinMaxTemps(data);

    });
    //====================== Events














    //======================= Runs when program loads
    initializeMap()



});