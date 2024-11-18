
const logMessage = message => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(message)
            reject('something went wrong')
            //resolve()
        }, 2000)
    })
}

// logMessage('hi')
//     .then(() => logMessage('how'))
//     .then(() => logMessage('are'))
//     .then(() => logMessage('you'))
//     .catch(error => console.log(error))


// IIFE -- Immediately Invoked Function Expression
// (() => console.log('hi'))()
// console.log('hi')

// Async/Await

(async () => {

const https = require('https')

const getJsonFrom = async url => {
    return new Promise((resolve, reject) => {
        https.get(url, response => {
            let body = ''
            response.on('data', data => body += data)
            response.on('end', () => {
                try { resolve(JSON.parse(body)) }
                catch { reject('The body could not be parsed into json')}
            })
        })
    })
}

// const sw = await getJsonFrom('https://swapi.dev/api/films/1/')
// console.log(sw)

console.log(await getJsonFrom('https://pokeapi.co/api/v2/pokemon/ditto'))

})()