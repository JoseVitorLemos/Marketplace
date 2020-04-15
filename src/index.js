const server = require('./server')

server.listen(process.env.PORT || 3000)
//Iniciar porta do serviço com variavel de ambiente "if true" || iniciar na porta 3000