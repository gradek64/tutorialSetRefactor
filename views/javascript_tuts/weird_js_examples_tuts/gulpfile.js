const gulp = require("gulp");
//to convert xml to JSON string
var parser = require("xml2json");
//template engine that support loops
const nunjucksRender = require("gulp-nunjucks-render");
//enables piping data with callback to next pipe
var data = require("gulp-data");
//node file system for reading file
const fs = require("fs");
//for running shell (terminal) commands
const shell = require("gulp-shell");
//path native node;

const path = require("path");
const xmlFile = "messageContent.xml";
const srcPages = "./pages";
const templatePath = "./templates";
const destFolder = "./";

gulp.task(
  "sass-to-css",
  shell.task([
    //'node-sass --include-path scss scss/tutorial.scss css/tutorial.css'
    "node-sass scss -o css"
  ])
);

gulp.task("generate_nunjucks_config", () => {
  const currentDir = path.basename(__dirname);
  const relativeTutsPath = path.join(
    "./javascript_tuts/tuts_all_scripts_css",
    currentDir
  );
  const writeStream = fs.createWriteStream("templates/_global_variables.html");
  writeStream.write(`{% set tuts_path = '${relativeTutsPath}' %}`);
  writeStream.end();
});

gulp.task("nunjucks", () => {
  // Gets .html and .nunjucks files in pages
  return (
    gulp
      .src(srcPages + "/**/*.+(html|nunjucks)")
      .pipe(
        data(function(file, cb) {
          fs.readFile(xmlFile, "utf8", (err, data) => {
            cb(undefined, JSON.parse(parser.toJson(data)));
          });
        })
      )
      // Renders template with nunjucks
      .pipe(
        nunjucksRender({
          path: [templatePath]
        })
      )
      // output files in . current folder
      .pipe(gulp.dest(destFolder))
  );
});

gulp.task("default", ["generate_nunjucks_config", "nunjucks"]);
