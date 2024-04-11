//abstract functions from form

const getDataFromForm = () => {
    const requestObj = {
        firstName: "Bruce",
        lastName: "lee",
        categories: ["nerdy"]
    };
    return requestObj;
}

const buildRequestUrl = (requestData) => {
    return `http://api.icndb.com/jokes/random?firstName=${requestData.firstName}&lastName=${requestData.lastName}&limitTo=${requestData.categories}`;
}

const requestJoke = async (url) => {
    const response = await fetch(url);
    const responseJson = await response.json();
    const jokeObj = responseJson.value.joke
    
    postJokeToPage(joke);
}

const postJokeToPage = (joke) => {
    console.log(joke);
}

// Procedural workflow function

const processJokeRequest = async () => {
    const requestData = getDataFromForm();
    const requestUrl = buildRequestUrl(requestData);
    await requestJoke(requestUrl);
    console.log("finished");
}

processJokeRequest();