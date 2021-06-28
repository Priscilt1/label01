import express from 'express'
import packageJson from '../package.json' //para ver a versão

const app = express();

app.get('/', (request, response) => {
  return response.json({ message: 'Hello Quero', version: packageJson.version })
  console.log('teste')
})

app.listen(3333);