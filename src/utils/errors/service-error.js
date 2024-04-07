const { StatusCode} = require('http-status-codes')

class ServiceError extends Error {
    constructor(message = 'Something Went Wrong',
        explanation = 'Service layer error',
         statusCode = StatusCode.INTERNAL_SERVER_ERROR)
          {
        // super(message);
        this.message = message;
        this.explanation = explanation;
        this.statusCode = statusCode
    }
}

module.exports = ServiceError