const getPerson = (id) => {
    const url = `https://swapi.dev/api/people/${id}`
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': "application/json"
        }
    }
    return fetch(url, options)
        .then((response) => {
            return response.json();
        })
        .catch(error => {
            alert(error.message)
        })
}
const getFilm = (url) => {
    const filmUrl = url;
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': "application/json"
        }
    }
    return fetch(url, options)
        .then((response) => {
            return response.json()
        });

}

(()=>{ // IIFE (Immediately Invoked Function Expression)
getPerson(4).then((person) => {
    console.log(person)
    getFilm(person.films[0]).then (film => {
        console.log(film)
    })
});
// movie database api


    async function getMovieData() {
        try {
            const url = `https://api.themoviedb.org/3/movie/13?api_key=${MOVIE_DB_APPID}&query=${MOVIE_TOKEN_AUTH}('Scream');`
            const options = {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            }
            const response = await fetch(url, options )
            const data = await response.json();
            console.log(data)
        } catch(error) {
            console.error(error)
        }
    }
    getMovieData()

})();