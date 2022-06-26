const routes = [
    {
        method: 'GET',
        path: '/',
        handler: (request, h) => {
            return 'Hello gaes!'
        }
    }
]

module.exports = routes