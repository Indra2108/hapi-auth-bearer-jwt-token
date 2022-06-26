'use strict'

const Hapi = require('@hapi/hapi')

const plugins = require('./plugins')
const routes = require('./routes')

const init = async () => {

    const server = Hapi.server({
        port: 3000,
        host: 'localhost'
    })

    await server.register(plugins)

    server.route(routes)

    await server.start()
    console.debug('server running on %s', server.info.uri)
}

process.on('unhandledRejection', err => {

    console.error(err)
    proccess.exit(1)
})

init()