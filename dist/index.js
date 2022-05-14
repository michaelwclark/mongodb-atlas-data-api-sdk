"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServerError = exports.NotFound = exports.Unauthorized = exports.BadRequest = void 0;
const MongoAtlasDataApiSDK_1 = require("./MongoAtlasDataApiSDK");
const errors_1 = require("./errors");
Object.defineProperty(exports, "BadRequest", { enumerable: true, get: function () { return errors_1.BadRequest; } });
Object.defineProperty(exports, "NotFound", { enumerable: true, get: function () { return errors_1.NotFound; } });
Object.defineProperty(exports, "ServerError", { enumerable: true, get: function () { return errors_1.ServerError; } });
Object.defineProperty(exports, "Unauthorized", { enumerable: true, get: function () { return errors_1.Unauthorized; } });
exports.default = MongoAtlasDataApiSDK_1.default;
//# sourceMappingURL=index.js.map