const button = document.getElementById('button')
const text = document.getElementById('text')
button.addEventListener("click", fetchJoke)
async function fetchJoke() {
    try{
        const response = await fetch("https://v2.jokeapi.dev/joke/Any")
        if (!response.ok) {
            throw new Error("failed to Fetch a Joke")
        }
        const JokeData = await response.json()
        console.log(JokeData)
         if(JokeData.type === "single"){
            text.textContent = JokeData.joke
        }
         else {
             text.textContent =JokeData.setup +" "+ JokeData.delivery
        }
    }catch(error) {
        console.log(error)
    }
}
