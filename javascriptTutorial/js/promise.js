// const users = fetch("https://jsonplaceholder.typicode.com/users");

// console.log(users);

const users = fetch("https://jsonplaceholder.typicode.com/users")
.then(response => {
    console.log(response);
    return response.json();
})
.then(data => {
    data.forEach(element => {
        console.log(element);
    });
});

console.log(users);

//Async / Await

const myUsers = {
    userList: []
};

const myCoolFunction = async () => {
    const response = await fetch("https://dummyjson.com/products");
    const jsonUserData = await response.json();
    return jsonUserData;
}

const anotherFunc = async () => {
    const data = await myCoolFunction();
    myUsers.userList = data;

    console.log(myUsers.userList);
}

anotherFunc();
console.log(myUsers.userList);

//Workflow

const getAllUserEmails = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const jsonUserData = await response.json();

    const userEmailArray = jsonUserData.map(user => {
        return user.email;
    })
    postToWebPage(userEmailArray);
}

const postToWebPage = (data) => {
    console.log(data);
}

getAllUserEmails();

//2nd parameter of fetch GET

const getDadJokes = async () => {
    const response = await fetch("https://icanhazdadjoke.com/", {
        method: "GET",
        headers: {
            Accept: "application/json"
        }
    });
    const jsonJokeData = await response.json();

    console.log(jsonJokeData);
}

getDadJokes();

//2nd parameter of fetch POST

jokeObject = {
    id: 'apjVK6pr4wc', 
    joke: "Why is it a bad idea to iron your four-leaf clover? Cause you shouldn't press your luck."
};

const postData = async (jokeObj) => {
    const request = await fetch("https://httpbin.org/post", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(jokeObj)
    });
    const response = await request.json();

    console.log(response.headers);
}

postData(jokeObject);

//Url parameters

const requestJoke = async (firstName, lastName) => {
    const response = await fetch(`http://api.icndb.com/jokes/random?firstName=${firstName}&lastName=${lastName}`);
    const responseJson = await response.json();

    console.log(responseJson.value);
}

requestJoke("Clint", "Eastwood");

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

const requestedJoke = async (url) => {
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
    await requestedJoke(requestUrl);
    console.log("finished");
}

processJokeRequest();