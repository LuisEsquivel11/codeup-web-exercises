"use strict"
$(() => {

    //Global variables
    const map = initializeMap();
    const marker = createMarker();
    const popup = createPopup();

    //functions
    //function that initializes map
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

    //function that creates a marker at codeup
    function createMarker() {
        return new mapboxgl.Marker()
            .setLngLat([-98.4916, 29.4252])
            .addTo(map)
    }

    //function that creates popup
    function createPopup() {
        return new mapboxgl.Popup()
            .setLngLat([-98.4916, 29.4252])
            .setHTML(`
                <div>
                    <h1>Codeup</h1>
                    <p>We can put anything we want</p>
                </div>    
            `);
    }

    //function that takes me to paris
    function goToParis() {
        geocode('Paris', MAPBOX_TOKEN).then((data) => {
            console.log(data);
            map.setCenter(data);
        })
    }

    //function that uses reverse geocode
    //Takes the coordinates from the center of the map
    //and prints the mon the screen
    function findAndPrintAdress() {
        const coords = map.getCenter();
        reverseGeocode(coords, MAPBOX_TOKEN).then((data) => {
           console.log(data)
            document.querySelector('h1').innerHTML = `${data}`;
        });

    }

    //Function that uses geocode to take the string 'the alamo'
    function markAlamo() {
        geocode('The Alamo, San Antonio', MAPBOX_TOKEN).then((data) => {
            const alamoPopup = new mapboxgl.Popup()
                .setHTML('<p>Remember the Alamo</p>');
            const alamoMarker = new mapboxgl.Marker()
                .setLngLat(data)
                .addTo(map)
                .setPopup(alamoPopup);
                alamoPopup.addTo(map);

        })
    }

    //Events
    document.querySelector('#geocode-button').addEventListener('click', goToParis)
    document.querySelector('#show-grid-corrdinates').addEventListener('click', findAndPrintAdress)
    document.querySelector('#mark-alamo').addEventListener('click', markAlamo)

    //Runs when program loads
    map.setZoom(1)
    marker.setPopup(popup);

});