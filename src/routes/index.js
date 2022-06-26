const login = require("../handler/LOGIN")
const register = require("../handler/REGISTER")

const routes = [
    {
        method: 'GET',
        path: '/restricted',
        handler: (request, h) => {
            return 'Selamat anda berhasil masuk menggunakan jwt token'
        }
    },
    {
        method: 'POST',
        path: '/register',
        handler: register,
        options: {
            auth: false
        }
    },
    {
        method: 'POST',
        path: '/login',
        handler: login,
        options: {
            auth: false
        }
    },
    {
        method: 'GET',
        path: '/{any*}',
        handler: (request, h) => {
            return 'Nyasar bossque!'
        },
        options: {
            auth: false
        }
    },
]

module.exports = routes