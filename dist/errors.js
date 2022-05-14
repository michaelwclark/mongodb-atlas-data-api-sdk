"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServerError = exports.NotFound = exports.Unauthorized = exports.BadRequest = void 0;
var BadRequest = /** @class */ (function (_super) {
    __extends(BadRequest, _super);
    function BadRequest(_a) {
        var message = _a.message, code = _a.code, type = _a.type;
        var _this = _super.call(this, message) || this;
        _this.name = 'BadRequest';
        _this.description = "\n        The request was invalid. This might mean:\n          - A request header is missing.\n          - The request body is malformed or improperly encoded.\n          - A field has a value with an invalid type.\n          - The specified data source is disabled or does not exist.\n          - The specified database or collection does not exist.\n        ";
        _this.code = code;
        _this.type = type;
        return _this;
    }
    return BadRequest;
}(Error));
exports.BadRequest = BadRequest;
var Unauthorized = /** @class */ (function (_super) {
    __extends(Unauthorized, _super);
    function Unauthorized(_a) {
        var message = _a.message, code = _a.code, type = _a.type;
        var _this = _super.call(this, message) || this;
        _this.name = 'Unauthorized';
        _this.description = 'The request did not include an authorized and enabled Data API Key. Ensure that your Data API Key is enabled for the cluster.';
        _this.code = code;
        _this.type = type;
        return _this;
    }
    return Unauthorized;
}(Error));
exports.Unauthorized = Unauthorized;
var NotFound = /** @class */ (function (_super) {
    __extends(NotFound, _super);
    function NotFound(_a) {
        var message = _a.message, code = _a.code, type = _a.type;
        var _this = _super.call(this, message) || this;
        _this.name = 'NotFound';
        _this.description = 'The request was sent to an endpoint that does not exist.';
        _this.code = code;
        _this.type = type;
        return _this;
    }
    return NotFound;
}(Error));
exports.NotFound = NotFound;
var ServerError = /** @class */ (function (_super) {
    __extends(ServerError, _super);
    function ServerError(_a) {
        var message = _a.message, code = _a.code, type = _a.type;
        var _this = _super.call(this, message) || this;
        _this.name = 'ServerError';
        _this.description = 'The Data API encountered an internal error and could not complete the request.';
        _this.code = code;
        _this.type = type;
        return _this;
    }
    return ServerError;
}(Error));
exports.ServerError = ServerError;
//# sourceMappingURL=errors.js.map