

// async function getFilm() {
//
// }
const getFilm = async (url) => {
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': "application/json"
        }
    }
    const response = await fetch(url, options);
    const data = await response.json();
    return data

}


(()=> {
    const firstFilm = getFilm()



// arrow declaration
const getPerson = async (id = 1) => {
}
const getFilm = async (url) => {
        try {
            const options = {
                method: 'GET',
                headers: {'Content-Type': "application/json" }
            }
            const response = await fetch(url, options);
            const data = await response.json();
            return data
        } catch(error) {
            console.log(firstFilm);
        }
}









})();