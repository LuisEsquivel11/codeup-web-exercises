(function(){
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    var planetsArray;

    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */
    var planetsArray= planetsString.split("|")
    console.log(planetsString)
    console.log(planetsArray);

    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful? */

     var brokenString = planetsArray.join("<br>");
     console.log(brokenString)
     document.write(brokenString)

     /** BONUS:
     * Create another string that would display your planets in an undordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */
     var newArray = [...planetsArray]

    newArray.push("<ul>")
    newArray.unshift("</ul>")
    newArray.pop()
    let unorderedPlanets = newArray.join("<li>")
    console.log(unorderedPlanets)
    document.write(unorderedPlanets)
})();