const express = require('express')
const path = require('path')

class App {
  constructor() {
    this.express = express()
    this.isDev = process.env.NODE_ENV !== 'production' //Saber se está em ambiente de produção ou não

    this.middlewares()
    this.routes()
  }
  middlewares() {
    this.express.use(express.json({})) //Lerá body da requisição em formato JSON
  }

  routes() {
    this.express.use(require('./routes'))
    //Criou um arquivo separado para armazenar no ./routes
  }
}

module.exports = new App().express //Exportou uma instancia da classe app 'new'
