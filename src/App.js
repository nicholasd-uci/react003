const { default: Axios } = require("axios")


gifState.handleSearchGiff = event => {
    event.preventDefault()
    axios.get(`http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=IPQ7HrP6y8vJv3o9EPdkLFOCMUrW6qPu&limit=5`)
}
