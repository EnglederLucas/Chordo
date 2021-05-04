"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class JsonResponse {
    constructor(statusCode, value) {
        this.statusCode = statusCode;
        this.value = value;
    }
}
exports.JsonResponse = JsonResponse;
exports.Ok = (value) => new JsonResponse(200 /* Ok */, value);
exports.Created = (value) => new JsonResponse(201 /* Created */, value);
exports.NoContent = (value) => new JsonResponse(204 /* NoContent */, value);
exports.BadRequest = (value) => new JsonResponse(400 /* BadRequest */, value);
exports.NotFound = (value) => new JsonResponse(404 /* NotFound */, value);
exports.Failed = (value) => new JsonResponse(500, value);
//# sourceMappingURL=models.js.map