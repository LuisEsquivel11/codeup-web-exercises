const GITHUB_TOKEN = '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'

const getProfile = (username) => {
    const url = `https://api.github.com/users/${username}/events/public`
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': "application/json",
            'Authorization': GITHUB_TOKEN
        }
    }
    return fetch(url, options)
        .then((response) => {
            return response.json()
        })
        .catch(error => {
            alert(error.message)
        })
}
    getProfile("LuisEsquivel11").then((events) => {
        console.log(events)
        const pushEvents = events.filter(event => {
            return event.type === "PushEvent";
        })
        console.log(pushEvents[0].created_at);
    })


