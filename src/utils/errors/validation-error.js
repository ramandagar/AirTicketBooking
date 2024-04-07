const { StatusCodes } = require('http-status-codes')

class ValidationError extends Error {

    constructor(error) {
        super(error)
        let explanation = []
        error.errors.forEach(err => {
            explanation.push(err.message)
        })

        this.name = 'validation error'
        this.explanation = explanation
        this.statusCode = StatusCodes
        this.message = 'Not verified'
    }

}

module.exports = ValidationError;