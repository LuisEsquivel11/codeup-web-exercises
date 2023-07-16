"use strict"
$(() => {

    //Global variables
    const map = initializeMap();
    const brokenYolkPopup = new mapboxgl.Popup().setHTML(`
                <div>
                    <h1>The Broken Yolk Cafe</h1>
                    <p>My favorite restaurant for breakfast</p>
                </div>    
            `)
    const favoriteRestaurants = [
        {
            name: "The Broken Yolk Cafe",
            description: "My favorite place for breakfast",
            location: "355 Sixth Ave, San Diego CA 92101 "
        },
        {
            name: "Chopsticks",
            description: "My favorite chinese buffet",
            location: "4903 Northwest Loop 410, San Antonio, TX 78229"
        },
        {
            name: "Buffalo Wild Wings",
            description: "Wings are alright but the memories with the boys are fire!",
            location: "72-920 CA-111, Palm Desert, CA 92260"
        }
    ]

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
    // function to get the grid for broken yolk and creat a marker
   //  function markBrokenYolk() {
   //      geocode('355 Sixth Ave, San Diego CA 92101 ', MAPBOX_TOKEN).then((data) => {
   //          const brokenYolkMarker = new mapboxgl.Marker()
   //              .setLngLat(data)
   //              .addTo(map)
   //              .setPopup(brokenYolkPopup)
   //              map.setZoom(18)
   //              map.setCenter(data)
   //      })
   //  }

    function markRestaurants() {
        favoriteRestaurants.forEach(function(restaurant) {
                const popup = new mapboxgl.Popup()
                    .setHTML(`
                        <h1>${restaurant.name}</h1>
                        <p>${restaurant.description}</p>
                    `)
            geocode(restaurant.location, MAPBOX_TOKEN).then((data) => {
                const marker = new mapboxgl.Marker()
                    .setLngLat(data)
                    .addTo(map)
                    .setPopup(popup)
            });
        });
    }

    markRestaurants()
    // 6. Create a popup with the name of the restaurant.
    // function brokenYolkCafePopup() {
    //     return new mapboxgl.Popup()
    //         .setLngLat([-117.1589, 32.7090])
    //         .setHTML(`
    //             <div>
    //                 <h1>The Broken Yolk Cafe</h1>
    //                 <p>My favorite restaurant for breakfast</p>
    //             </div>
    //         `);
    // }
    // brokenYolkCafePopup()



    //Events



    //Runs when the program loads
//======================================== Walk Through ===============================================//

// function showFavoriteRestaurantCity()  {
//         geocode('San Diego, California', MAPBOX_TOKEN).then
// }
    function showFavRestCity() {
        geocode('san diego, california', MAPBOX_TOKEN)
            .then((data) => {
                console.log(data);
                map.setCenter(data)
                    .setZoom(15);
                const marker = new mapboxgl.Marker()
                    .setLngLat(data)
                    .addTo(map);
            })
    }
showFavRestCity()


});