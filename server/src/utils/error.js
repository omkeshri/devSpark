class AppError extends Error {
    constructor(statusCode = 500, message = "Something went wrong") {
        super(message);
        this.statusCode = statusCode;

        // Fix prototype chain for custom error
        Object.setPrototypeOf(this, AppError.prototype);
    }
}

module.exports = AppError;
