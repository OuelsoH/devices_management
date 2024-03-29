
class customError extends Error{
    constructor(message, statusCode){
        super();
        this.message = message
        this.stack = false;
        this.statusCode = statusCode;
        this.status = statusCode >= 400 && statusCode < 500 ? 'fail' : 'error';
        this.isOperational = true;
        Error.captureStackTrace(this, this.constructor)


    }
}

module.exports = customError;

