const Bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const User = require('../models')

const login = async (request, h) => {

    try {
        const { username, password } = request.payload

        if (!username || !password) {
            return 'Harap isi data dengan benar!'
        }

        const user = await User.findOne({ where: { username } })
        
        if (!user) {
            return 'User tidak ditemukan'
        }

        const compare = Bcrypt.compareSync(password, user.password)

        if (!compare) {
            return 'Password salah'
        }

        const token = jwt.sign({
            id: user.id
        }, 'rahasia')

        const response = h.response({
            status: 'success',
            message: 'Berhasil Login!',
            token: token
        }).code(201)
        return response

    } catch (error) {
        console.debug(error)
    }

}

module.exports = login