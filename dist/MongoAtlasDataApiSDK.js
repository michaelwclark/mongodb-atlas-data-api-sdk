var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { BadRequest, Unauthorized, NotFound, ServerError } from './errors.js';
var MongoAtlasDataApiSDK = /** @class */ (function () {
    function MongoAtlasDataApiSDK(apiKey, apiUrl, dbCluster, dbName, quiet) {
        this.apiKey = apiKey;
        this.apiUrl = apiUrl;
        this.dbCluster = dbCluster;
        this.dbName = dbName;
        this.quiet = quiet;
    }
    MongoAtlasDataApiSDK.prototype.callApi = function (method, payload) {
        return __awaiter(this, void 0, void 0, function () {
            var res, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, fetch("".concat(this.apiUrl, "/action/").concat(method), {
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'application/json',
                                    'Access-Control-Request-Headers': '*',
                                    'api-key': this.apiKey
                                },
                                body: JSON.stringify(__assign(__assign({}, payload), { dataSource: this.dbCluster, database: this.dbName })),
                            })];
                    case 1:
                        res = _a.sent();
                        return [4 /*yield*/, res.json()];
                    case 2: return [2 /*return*/, _a.sent()];
                    case 3:
                        e_1 = _a.sent();
                        if (e_1.code === 400) {
                            throw new BadRequest(e_1);
                        }
                        if (e_1.code === 401) {
                            throw new Unauthorized(e_1);
                        }
                        if (e_1.code === 404) {
                            throw new NotFound(e_1);
                        }
                        throw new ServerError(e_1);
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    MongoAtlasDataApiSDK.prototype.findOne = function (_a) {
        var collection = _a.collection, filter = _a.filter, projection = _a.projection;
        return __awaiter(this, void 0, void 0, function () {
            var document;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.callApi('findOne', { collection: collection, filter: filter, projection: projection })];
                    case 1:
                        document = (_b.sent()).document;
                        this.outputResults({ document: document });
                        return [2 /*return*/, { document: document }];
                }
            });
        });
    };
    MongoAtlasDataApiSDK.prototype.find = function (_a) {
        var collection = _a.collection, filter = _a.filter, _b = _a.projection, projection = _b === void 0 ? {} : _b, _c = _a.sort, sort = _c === void 0 ? {} : _c, _d = _a.limit, limit = _d === void 0 ? 1000 : _d, _e = _a.skip, skip = _e === void 0 ? 0 : _e;
        return __awaiter(this, void 0, void 0, function () {
            var documents;
            return __generator(this, function (_f) {
                switch (_f.label) {
                    case 0: return [4 /*yield*/, this.callApi('find', { collection: collection, filter: filter, projection: projection, sort: sort, limit: limit, skip: skip })];
                    case 1:
                        documents = (_f.sent()).documents;
                        this.outputResults({ documents: documents });
                        return [2 /*return*/, { documents: documents }];
                }
            });
        });
    };
    MongoAtlasDataApiSDK.prototype.insertOne = function (_a) {
        var collection = _a.collection, document = _a.document;
        return __awaiter(this, void 0, void 0, function () {
            var insertedId;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.callApi('insertOne', { collection: collection, document: document })];
                    case 1:
                        insertedId = (_b.sent()).insertedId;
                        this.outputResults({ insertedId: insertedId });
                        return [2 /*return*/, { insertedId: insertedId }];
                }
            });
        });
    };
    MongoAtlasDataApiSDK.prototype.insertMany = function (_a) {
        var collection = _a.collection, documents = _a.documents;
        return __awaiter(this, void 0, void 0, function () {
            var insertedIds;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.callApi('insertMany', { collection: collection, documents: documents })];
                    case 1:
                        insertedIds = (_b.sent()).insertedIds;
                        this.outputResults({ insertedIds: insertedIds });
                        return [2 /*return*/, { insertedIds: insertedIds }];
                }
            });
        });
    };
    MongoAtlasDataApiSDK.prototype.updateOne = function (_a) {
        var collection = _a.collection, filter = _a.filter, update = _a.update, _b = _a.upsert, upsert = _b === void 0 ? false : _b;
        return __awaiter(this, void 0, void 0, function () {
            var _c, matchedCount, modifiedCount, upsertedId;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0: return [4 /*yield*/, this.callApi('updateOne', { collection: collection, filter: filter, update: update, upsert: upsert })];
                    case 1:
                        _c = _d.sent(), matchedCount = _c.matchedCount, modifiedCount = _c.modifiedCount, upsertedId = _c.upsertedId;
                        this.outputResults({ matchedCount: matchedCount, modifiedCount: modifiedCount, upsertedId: upsertedId });
                        return [2 /*return*/, { matchedCount: matchedCount, modifiedCount: modifiedCount, upsertedId: upsertedId }];
                }
            });
        });
    };
    MongoAtlasDataApiSDK.prototype.updateMany = function (_a) {
        var collection = _a.collection, filter = _a.filter, update = _a.update, _b = _a.upsert, upsert = _b === void 0 ? false : _b;
        return __awaiter(this, void 0, void 0, function () {
            var _c, matchedCount, modifiedCount, upsertedId;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0: return [4 /*yield*/, this.callApi('updateMany', { collection: collection, filter: filter, update: update, upsert: upsert })];
                    case 1:
                        _c = _d.sent(), matchedCount = _c.matchedCount, modifiedCount = _c.modifiedCount, upsertedId = _c.upsertedId;
                        this.outputResults({ matchedCount: matchedCount, modifiedCount: modifiedCount, upsertedId: upsertedId });
                        return [2 /*return*/, { matchedCount: matchedCount, modifiedCount: modifiedCount, upsertedId: upsertedId }];
                }
            });
        });
    };
    MongoAtlasDataApiSDK.prototype.replaceOne = function (_a) {
        var collection = _a.collection, filter = _a.filter, replacement = _a.replacement, _b = _a.upsert, upsert = _b === void 0 ? false : _b;
        return __awaiter(this, void 0, void 0, function () {
            var _c, matchedCount, modifiedCount, upsertedId;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0: return [4 /*yield*/, this.callApi('replaceOne', { collection: collection, filter: filter, replacement: replacement, upsert: upsert })];
                    case 1:
                        _c = _d.sent(), matchedCount = _c.matchedCount, modifiedCount = _c.modifiedCount, upsertedId = _c.upsertedId;
                        this.outputResults({ matchedCount: matchedCount, modifiedCount: modifiedCount, upsertedId: upsertedId });
                        return [2 /*return*/, { matchedCount: matchedCount, modifiedCount: modifiedCount, upsertedId: upsertedId }];
                }
            });
        });
    };
    MongoAtlasDataApiSDK.prototype.deleteOne = function (_a) {
        var collection = _a.collection, filter = _a.filter;
        return __awaiter(this, void 0, void 0, function () {
            var deletedCount;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.callApi('deleteOne', { collection: collection, filter: filter })];
                    case 1:
                        deletedCount = (_b.sent()).deletedCount;
                        this.outputResults({ deletedCount: deletedCount });
                        return [2 /*return*/, { deletedCount: deletedCount }];
                }
            });
        });
    };
    MongoAtlasDataApiSDK.prototype.deleteMany = function (_a) {
        var collection = _a.collection, filter = _a.filter;
        return __awaiter(this, void 0, void 0, function () {
            var deletedCount;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.callApi('deleteMany', { collection: collection, filter: filter })];
                    case 1:
                        deletedCount = (_b.sent()).deletedCount;
                        this.outputResults({ deletedCount: deletedCount });
                        return [2 /*return*/, { deletedCount: deletedCount }];
                }
            });
        });
    };
    MongoAtlasDataApiSDK.prototype.aggregate = function (_a) {
        var collection = _a.collection, pipeline = _a.pipeline;
        return __awaiter(this, void 0, void 0, function () {
            var documents;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.callApi('aggregate', { collection: collection, pipeline: pipeline })];
                    case 1:
                        documents = (_b.sent()).documents;
                        this.outputResults({ documents: documents });
                        return [2 /*return*/, { documents: documents }];
                }
            });
        });
    };
    MongoAtlasDataApiSDK.prototype.outputResults = function (results) {
        if (!this.quiet) {
            console.log(results);
        }
    };
    return MongoAtlasDataApiSDK;
}());
export default MongoAtlasDataApiSDK;
//# sourceMappingURL=MongoAtlasDataApiSDK.js.map