export class BadRequest extends Error {
  constructor ({ message, code, type }) {
    super(message)
    this.name = 'BadRequest'
    this.description = ''`
The request was invalid. This might mean:

  - A request header is missing.
  - The request body is malformed or improperly encoded.
  - A field has a value with an invalid type.
  - The specified data source is disabled or does not exist.
  - The specified database or collection does not exist.
```
    this.code = code
    this.type = type
  }
}

export class Unauthorized extends Error {
  constructor ({ message, code, type }) {
    super(message)
    this.name = 'Unauthorized'
    this.description = 'The request did not include an authorized and enabled Data API Key. Ensure that your Data API Key is enabled for the cluster.'
    this.code = code
    this.type = type
  }
}

export class NotFound extends Error {
  constructor ({ message, code, type }) {
    super(message)
    this.name = 'NotFound'
    this.description = 'The request was sent to an endpoint that does not exist.'
    this.code = code
    this.type = type
  }
}

export class ServerError extends Error {
  constructor ({ message, code, type }) {
    super(message)
    this.name = 'ServerError'
    this.description = 'The Data API encountered an internal error and could not complete the request.'
    this.code = code
    this.type = type
  }
}
