const Bcrypt = require('bcrypt')
const User = require("../models")

const register = async (request, h) => {
    try {
        const { username, password } = request.payload

        if (!username || !password) {
            return 'Harap isi data dengan benar!'
        }

        const hash = Bcrypt.hashSync(password, 8)

        await User.create({
            username,
            password: hash
        })

        const response = h.response({
            status: 'success',
            message: 'Registerasi Berhasil!'
        }).code(201)
        return response

    } catch (error) {
        console.error(error)
    }
}

module.exports = register
