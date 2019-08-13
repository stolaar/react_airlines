class BaseClass {
  constructor() {
    this._req;
    this._res;
  }
  executeImpl() {}
  execute(req, res) {
    this.req = req;
    this.res = res;
    this.executeImpl();
  }

  jsonResponse(code, message) {
    return this.res.status(code).send({ message });
  }
  ok(dto) {
    if (!!dto) {
      return this.res.status(200).json(dto);
    } else {
      return this.res.sendStatus(200);
    }
  }
  created() {
    return this.res.sendStatus(201);
  }

  clientError(message) {
    return this.jsonResponse(400, message ? message : "Unauthorized");
  }

  unauthorized(message) {
    return this.jsonResponse(401, message ? message : "Unauthorized");
  }

  paymentRequired(message) {
    return this.jsonResponse(402, message ? message : "Payment required");
  }

  forbidden(message) {
    return this.jsonResponse(403, message ? message : "Forbidden");
  }

  notFound(message) {
    return this.jsonResponse(404, message ? message : "Not found");
  }

  conflict(message) {
    return this.jsonResponse(409, message ? message : "Conflict");
  }

  tooMany(message) {
    return this.jsonResponse(429, message ? message : "Too many requests");
  }

  fail(error) {
    return this.res.status(500).json({
      message: error.toString()
    });
  }
}
module.exports = BaseClass;
