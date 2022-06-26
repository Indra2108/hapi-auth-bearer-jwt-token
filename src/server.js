'use strict'

const Hapi = require('@hapi/hapi')
const jwt = require('jsonwebtoken')

const User = require('./models')
const plugins = require('./plugins')
const routes = require('./routes')

const init = async () => {

    const server = Hapi.server({
        port: 3000,
        host: 'localhost'
    })

    await server.register(plugins)

    server.auth.strategy('simple', 'bearer-access-token', {
        validate: async (request, token, h) => {
            const decoded = jwt.verify(token, 'rahasia')

            const userjwt = await User.findByPk(decoded.id)

            if (!userjwt) {
                return { isValid: false, credentials: null }
            }

            return { isValid: true, credentials: { id: userjwt.id } }
        }
    })
    server.auth.default('simple')

    server.route(routes)

    await server.start()
    console.debug('server running on %s', server.info.uri)
}

process.on('unhandledRejection', err => {

    console.error(err)
    proccess.exit(1)
})

init()