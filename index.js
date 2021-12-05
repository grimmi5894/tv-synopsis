const express = require('express')

const app = express()


app.all('/*', (request, response) => {
  return response.sendStatus(404)
})


app.listen(1337, () => {
  console.log('Listening on 1337') // eslint-disable-line no-console
})
