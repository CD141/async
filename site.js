(async () => {
    const span = document.querySelector('span')
    
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/ditto')
    const pokemon = await response.json() // turning the response into json (which is a promise)

    span.textContent = JSON.stringify(pokemon)
    
})()