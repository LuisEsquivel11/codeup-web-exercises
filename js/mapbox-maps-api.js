"use strict"
$(() => {

    //Global variables
    const map = initializeMap();
    // const brokenYolkPopup = brokenYolkPopup()



    //functions
    //  1.  Initialize the Map
    function initializeMap() {
        mapboxgl.accessToken = MAPBOX_TOKEN;

        const mapOptions = {
            container: "map",
            style: "mapbox://styles/mapbox/satellite-streets-v12",
            zoom: 10,
            center: [-117.161087, 32.715736],
        }
        return new mapboxgl.Map(mapOptions)
    }

    // 2. Create a marker on your map of the exact location of your
    // favorite restaurant set the zoom to allow for best viewing distance.

    //function to get the grid for broken yolk and creat a marker
    function markBrokenYolk() {
        geocode('355 Sixth Ave, San Diego CA 92101 ', MAPBOX_TOKEN).then((data) => {
            const brokenYolkMarker = new mapboxgl.Marker()
                .setLngLat(data)
                .addTo(map)
                map.setZoom(18)
                map.setCenter(data)





        })
    }

    // 6. Create a popup with the name of the restaurant.

    function brokenYolkCafePopup() {
        return new mapboxgl.Popup()
            .setLngLat([-117.1589, 32.7090])
            .setHTML(`
                <div>
                    <h1>The Broken Yolk Cafe</h1>
                    <p>My favorite restaurant for breakfast</p>
                </div>    
            `);
    }




    //Events
    document.querySelector('#favorite-restaurant').addEventListener('click', markBrokenYolk)


    //Runs when the program loads

});