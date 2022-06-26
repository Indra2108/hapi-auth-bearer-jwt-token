const jwt = require('jsonwebtoken')

const User = require('../models')

const validate = async (request, token, h) => {
    const decoded = jwt.verify(token, 'rahasia')

    const userjwt = await User.findByPk(decoded.id)

    if (!userjwt) {
        return { isValid: false, credentials: null }
    }

    return { isValid: true, credentials: { id: userjwt.id } }
}

module.exports = validate