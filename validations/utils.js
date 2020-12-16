const { validationResult } = require("express-validator");

exports.handleValidationErrors = function (req, _res, next) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next({ status: 422, errors: errors.array() });
  }
  return next();
}