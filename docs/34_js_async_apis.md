# APIs and Asynchronous JavaScript

Modern web applications don't exist in isolation. They connect to external services, fetch data from servers, and respond to real-time events. This is made possible through **APIs** and **asynchronous JavaScript**.

This session introduces you to the world of APIs, explains how to fetch data using JavaScript, and explores the asynchronous nature of web communication.

---

## Session 9B: APIs and Asynchronous JavaScript

### A. Learning Outcome

Understand what APIs are, how to fetch data using `fetch()` and `async/await`, and how to work with JSON data in your projects.

### B. What Is an API?

**API** stands for **Application Programming Interface**. It is a set of rules and protocols that allows different software applications to communicate with each other.

**Think of an API as a waiter in a restaurant:**

```
┌─────────────────────────────────────────────────────────────────┐
│                    THE API RESTAURANT ANALOGY                   │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  You (Client) → Menu (API Documentation) → Waiter (API)         │
│                                                                 │
│  1. You look at the menu (API documentation)                    │
│  2. You place your order (send a request)                       │
│  3. The waiter takes your order to the kitchen (API request)    │
│  4. The kitchen prepares your food (server processes request)   │
│  5. The waiter brings your food (API response)                  │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

**Real-World API Examples:**

| API | What It Does | Example Use |
|-----|--------------|-------------|
| **Weather API** | Provides weather data | Display current weather |
| **News API** | Provides news articles | Show headlines on a site |
| **Google Maps API** | Provides maps and locations | Embed an interactive map |
| **GitHub API** | Provides repository data | Show your projects |
| **OpenTrivia API** | Provides quiz questions | Build a trivia game |

### C. What Is JSON?

**JSON** (JavaScript Object Notation) is a lightweight data format used to exchange information between a server and a client. It is easy to read and write, and it closely resembles JavaScript objects.

**JSON Example:**

```json
{
  "name": "Lebo",
  "age": 25,
  "country": "South Africa",
  "hobbies": ["coding", "reading", "music"],
  "active": true
}
```

**JSON vs JavaScript Object:**

```js
// JavaScript Object
const user = {
  name: "Lebo",
  age: 25,
  country: "South Africa"
};

// JSON (string format)
const userJSON = '{"name":"Lebo","age":25,"country":"South Africa"}';
```

**Converting Between JSON and JavaScript:**

```js
// Convert JSON string to JavaScript object
const jsonString = '{"name":"Lebo","age":25}';
const user = JSON.parse(jsonString);
console.log(user.name);   // "Lebo"

// Convert JavaScript object to JSON string
const userObject = { name: "Lebo", age: 25 };
const json = JSON.stringify(userObject);
console.log(json);   // '{"name":"Lebo","age":25}'
```

### D. Making API Requests with `fetch()`

The `fetch()` function is a modern way to make HTTP requests in JavaScript. It returns a **Promise** — an object that represents a future value.

**Basic Syntax:**

```js
fetch(url)
  .then(response => response.json())
  .then(data => {
    // Use the data
  })
  .catch(error => {
    // Handle errors
  });
```

**Example: Fetching Data from an API**

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    body {
      font-family: sans-serif;
      padding: 40px;
      max-width: 600px;
      margin: 0 auto;
    }
    #joke {
      background: #f0f0f0;
      padding: 20px;
      border-radius: 8px;
      margin: 20px 0;
      min-height: 60px;
    }
    button {
      padding: 10px 20px;
      background: #3498db;
      color: white;
      border: none;
      border-radius: 6px;
      cursor: pointer;
    }
    button:hover {
      background: #2980b9;
    }
    .loading {
      color: #636e72;
      font-style: italic;
    }
    .error {
      color: #e74c3c;
    }
  </style>
</head>
<body>
  <h2>Random Joke Generator</h2>
  <p>Click the button to fetch a random joke from an API.</p>

  <button id="jokeBtn">Get Joke</button>
  <div id="joke">Click the button to get a joke!</div>

  <script>
    const jokeBtn = document.getElementById('jokeBtn');
    const jokeDisplay = document.getElementById('joke');

    jokeBtn.addEventListener('click', function() {
      // Show loading state
      jokeDisplay.className = 'loading';
      jokeDisplay.textContent = 'Loading...';

      // Fetch a joke from the API
      fetch('https://api.chucknorris.io/jokes/random')
        .then(function(response) {
          // Check if the request was successful
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();   // Parse JSON
        })
        .then(function(data) {
          // Use the joke data
          jokeDisplay.className = '';
          jokeDisplay.textContent = data.value;
        })
        .catch(function(error) {
          // Handle errors
          jokeDisplay.className = 'error';
          jokeDisplay.textContent = 'Oops! Something went wrong: ' + error.message;
        });
    });
  </script>
</body>
</html>
```

**Explanation:**

- `fetch('https://api.chucknorris.io/jokes/random')` sends a request to the API.
- `response.json()` parses the response into a JavaScript object.
- The `data` object contains the joke in `data.value`.
- `.catch()` handles any errors.

### E. Understanding Promises

A **Promise** is an object that represents the eventual completion (or failure) of an asynchronous operation.

**Promise States:**

| State | Description |
|-------|-------------|
| **Pending** | Initial state, neither fulfilled nor rejected |
| **Fulfilled** | Operation completed successfully |
| **Rejected** | Operation failed |

**Visualising a Promise:**

```
┌─────────────┐
│   Pending   │
└──────┬──────┘
       │
       ▼
┌─────────────┐     ┌─────────────┐
│  Fulfilled  │ OR  │  Rejected   │
│   (Success) │     │   (Error)   │
└─────────────┘     └─────────────┘
```

**Chaining Promises:**

```js
fetch(url)
  .then(response => response.json())    // First .then
  .then(data => {                       // Second .then
    console.log(data);
    return data;
  })
  .catch(error => {                     // Error handler
    console.error(error);
  });
```

### F. Async/Await: Cleaner Asynchronous Code

`async/await` is a modern syntax that makes asynchronous code look synchronous and is easier to read.

**Syntax:**

```js
async function getData() {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}
```

**Example: Async/Await Version**

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    body {
      font-family: sans-serif;
      padding: 40px;
      max-width: 600px;
      margin: 0 auto;
    }
    #user {
      background: #f0f0f0;
      padding: 20px;
      border-radius: 8px;
      margin: 20px 0;
    }
    button {
      padding: 10px 20px;
      background: #2ecc71;
      color: white;
      border: none;
      border-radius: 6px;
      cursor: pointer;
    }
    button:hover {
      background: #27ae60;
    }
    .loading {
      color: #636e72;
      font-style: italic;
    }
    .error {
      color: #e74c3c;
    }
  </style>
</head>
<body>
  <h2>Random User Generator</h2>
  <p>Fetch a random user profile from an API.</p>

  <button id="userBtn">Get Random User</button>
  <div id="user">Click the button to get a user!</div>

  <script>
    const userBtn = document.getElementById('userBtn');
    const userDisplay = document.getElementById('user');

    userBtn.addEventListener('click', async function() {
      // Show loading state
      userDisplay.className = 'loading';
      userDisplay.textContent = 'Loading...';

      try {
        // Fetch user data
        const response = await fetch('https://randomuser.me/api/');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        const user = data.results[0];

        // Extract user details
        const firstName = user.name.first;
        const lastName = user.name.last;
        const email = user.email;
        const country = user.location.country;
        const photo = user.picture.large;

        // Display user
        userDisplay.className = '';
        userDisplay.innerHTML = `
          <img src="${photo}" alt="${firstName} ${lastName}" style="border-radius:50%;width:80px;height:80px;float:left;margin-right:20px;">
          <h3>${firstName} ${lastName}</h3>
          <p>📧 ${email}</p>
          <p>📍 ${country}</p>
        `;

      } catch (error) {
        userDisplay.className = 'error';
        userDisplay.textContent = 'Oops! Something went wrong: ' + error.message;
      }
    });
  </script>
</body>
</html>
```

**Explanation:**

- `async` marks the function as asynchronous.
- `await` pauses the function until the Promise resolves.
- `try...catch` handles errors gracefully.
- The code looks synchronous and is easier to follow.

### G. Working with Different APIs

**Weather API Example:**

```js
async function getWeather(city) {
  const apiKey = 'YOUR_API_KEY';
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(`Weather in ${city}: ${data.weather[0].description}`);
    console.log(`Temperature: ${Math.round(data.main.temp - 273.15)}°C`);
  } catch (error) {
    console.error('Error fetching weather:', error);
  }
}
```

**GitHub API Example:**

```js
async function getRepos(username) {
  const url = `https://api.github.com/users/${username}/repos`;

  try {
    const response = await fetch(url);
    const repos = await response.json();
    repos.forEach(repo => {
      console.log(`${repo.name}: ${repo.html_url}`);
    });
  } catch (error) {
    console.error('Error fetching repos:', error);
  }
}
```

**OpenTrivia API Example (Quiz Questions):**

```js
async function getQuizQuestions() {
  const url = 'https://opentdb.com/api.php?amount=5&type=multiple';

  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(`Got ${data.results.length} questions!`);
    return data.results;
  } catch (error) {
    console.error('Error fetching quiz:', error);
  }
}
```

### H. In-Class Activity: API Explorer

**Goal:** Explore a public API and display data on a webpage.

**Task:**

1. Choose a public API from the list below.
2. Use `fetch()` or `async/await` to get data.
3. Display the data on a simple HTML page.

**Free Public APIs:**

| API | URL | Data Returned |
|-----|-----|---------------|
| Random Joke | `https://api.chucknorris.io/jokes/random` | Random joke |
| Random User | `https://randomuser.me/api/` | Random user profile |
| Pokémon | `https://pokeapi.co/api/v2/pokemon/1` | Pokémon data |
| Dog Facts | `https://dogapi.dog/api/v2/facts` | Random dog fact |
| Quotable | `https://api.quotable.io/random` | Random quote |
| NASA | `https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY` | Astronomy picture |

**Starter Code:**

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    body {
      font-family: sans-serif;
      padding: 40px;
      max-width: 600px;
      margin: 0 auto;
    }
    button {
      padding: 10px 20px;
      background: #3498db;
      color: white;
      border: none;
      border-radius: 6px;
      cursor: pointer;
    }
    #result {
      margin-top: 20px;
      padding: 20px;
      background: #f0f0f0;
      border-radius: 8px;
      min-height: 60px;
    }
  </style>
</head>
<body>
  <h2>API Explorer</h2>
  <button id="fetchBtn">Fetch Data</button>
  <div id="result">Click the button to fetch data.</div>

  <script>
    document.getElementById('fetchBtn').addEventListener('click', async function() {
      // TODO: Replace with your chosen API URL
      const url = 'https://api.chucknorris.io/jokes/random';

      try {
        const response = await fetch(url);
        const data = await response.json();
        document.getElementById('result').innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;
      } catch (error) {
        document.getElementById('result').innerHTML = `Error: ${error.message}`;
      }
    });
  </script>
</body>
</html>
```

### I. Extra Activity: API Project Ideas

**Let's brainstorm projects that use APIs to fetch and display data.**

| Project Idea | API Needed | Features |
|--------------|------------|----------|
| **Weather Dashboard** | Weather API | Search city, display temperature, humidity, forecast |
| **News Reader** | News API | Show headlines, filter by category, search |
| **Movie Search** | OMDB API | Search movies, show poster, rating, plot |
| **Trivia Game** | OpenTrivia API | Multiple choice questions, score tracking |
| **Quote Generator** | Quotable API | Random quotes, author search |
| **Pokédex** | PokeAPI | Search Pokémon, display stats and images |
| **Recipe Finder** | Recipe API | Search recipes, display ingredients and instructions |

### J. Session Summary

| Concept | Key Idea |
|---------|----------|
| API | Application Programming Interface — allows apps to communicate |
| JSON | JavaScript Object Notation — data format for APIs |
| `fetch()` | Modern way to make HTTP requests |
| Promise | Object representing future value (pending, fulfilled, rejected) |
| `.then()` | Handles a fulfilled Promise |
| `.catch()` | Handles a rejected Promise |
| `async/await` | Cleaner syntax for asynchronous code |
| `try...catch` | Handles errors in async functions |

---

## Reflection Questions

1. What is an API and why is it useful?
2. What is the difference between JSON and a JavaScript object?
3. How does `fetch()` work, and what does it return?
4. What is a Promise, and what are its three states?
5. Why is `async/await` preferred over `.then()` chains?
6. What is the purpose of `try...catch` in asynchronous code?
7. How would you use an API in a personal project?

---

## Resources for Further Study

- [MDN: Using Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
- [MDN: Async/Await](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Async_await)
- [JSON: The Official Website](https://www.json.org/)
- [Public APIs List](https://github.com/public-apis/public-apis)
- [MDN: Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)

---
