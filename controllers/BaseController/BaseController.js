module.exports = class BaseController {
  constructor(req, res, next) {
    this._req = req;
    this._res = res;
    this._next = next;
  }

  jsonResponse(code, message) {
    return this._res.status(code).send({ ...message });
  }
  ok(dto) {
    if (!!dto) {
      return this._res.status(200).json(dto);
    } else {
      return this._res.sendStatus(200);
    }
  }

  clientError(message) {
    return this.jsonResponse(400, message ? message : "Unauthorized");
  }

  unauthorized(message) {
    return this.jsonResponse(401, message ? message : "Unauthorized");
  }

  notFound(message) {
    return this.jsonResponse(404, message ? message : "Not found");
  }

  fail(error) {
    return this._res.status(500).json({
      message: error.toString()
    });
  }
};
