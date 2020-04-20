module.exports = function () {
  return function (err, req, resp, next) {
    console.log("an Error occured!", err);
    resp.status(500);
    next(err);
  };
};
