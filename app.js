var createError = require("http-errors");
var express = require("express");
var path = require("path");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var makeNoteRouter = require("./routes/makeNoteRouter");
var applyMiddleware = require("./server/middleware");
var errorHandler = require("./server/errorHandler");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

//apply middleware from outsite
applyMiddleware(app);

app.use(express.static(path.join(__dirname, "public")));
//additional folder for serving static files
app.use(express.static(path.join(__dirname, "views")));

//javascripts_tuts static serving folder
app.use(
  express.static(
    path.join(__dirname, "views/javascript_tuts/array_methods_tuts")
  )
);
app.use(
  express.static(
    path.join(__dirname, "views/javascript_tuts/call_apply_bind_tuts")
  )
);
app.use(
  express.static(path.join(__dirname, "views/javascript_tuts/ES6_array_tuts"))
);
app.use(
  express.static(path.join(__dirname, "views/javascript_tuts/ES6_classes_tuts"))
);
app.use(
  express.static(
    path.join(__dirname, "views/javascript_tuts/ES6_destructuring_tuts")
  )
);
app.use(
  express.static(
    path.join(
      __dirname,
      "views/javascript_tuts/ES6_promises_http_requests_tuts"
    )
  )
);
app.use(
  express.static(path.join(__dirname, "views/javascript_tuts/loops_tuts"))
);
app.use(
  express.static(path.join(__dirname, "views/javascript_tuts/object_tuts"))
);
app.use(
  express.static(path.join(__dirname, "views/javascript_tuts/string_tuts"))
);

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/makeNote", makeNoteRouter);

//set up your locak static server directory;
var serveIndex = require("serve-index");
app.use("/views", serveIndex(path.join(__dirname, "views")));
app.use("/views", express.static(path.join(__dirname, "views")));

//set express globals for rootPath;
app.locals = {
  rootPath: __dirname,
  pathViews: path.join(__dirname, "views"),
};

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

//error handling has to be last in stack for all middleware;
app.use(errorHandler());

// error handler
/* app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
}); */

module.exports = app;
