"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServerError = exports.NotFound = exports.Unauthorized = exports.BadRequest = void 0;
class BadRequest extends Error {
    description;
    code;
    type;
    constructor({ message, code, type }) {
        super(message);
        this.name = 'BadRequest';
        this.description = `
        The request was invalid. This might mean:
          - A request header is missing.
          - The request body is malformed or improperly encoded.
          - A field has a value with an invalid type.
          - The specified data source is disabled or does not exist.
          - The specified database or collection does not exist.
        `;
        this.code = code;
        this.type = type;
    }
}
exports.BadRequest = BadRequest;
class Unauthorized extends Error {
    description;
    code;
    type;
    constructor({ message, code, type }) {
        super(message);
        this.name = 'Unauthorized';
        this.description = 'The request did not include an authorized and enabled Data API Key. Ensure that your Data API Key is enabled for the cluster.';
        this.code = code;
        this.type = type;
    }
}
exports.Unauthorized = Unauthorized;
class NotFound extends Error {
    description;
    code;
    type;
    constructor({ message, code, type }) {
        super(message);
        this.name = 'NotFound';
        this.description = 'The request was sent to an endpoint that does not exist.';
        this.code = code;
        this.type = type;
    }
}
exports.NotFound = NotFound;
class ServerError extends Error {
    description;
    code;
    type;
    constructor({ message, code, type }) {
        super(message);
        this.name = 'ServerError';
        this.description = 'The Data API encountered an internal error and could not complete the request.';
        this.code = code;
        this.type = type;
    }
}
exports.ServerError = ServerError;
//# sourceMappingURL=errors.js.map