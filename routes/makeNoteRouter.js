var express = require("express");
var makeNoteRouter = express.Router();
var fs = require("fs");

//custom requries
var xml2js = require("xml2js");
var parser = new xml2js.Parser();
//const jsdom = require("jsdom");
//const { JSDOM } = jsdom;
const makeNotePagePath = "./views/makeNotePage/";
const makeNoteViewPath = "/makeNotePage/";

//register routes
makeNoteRouter
  .route("/") //that corresponds to /makeNote from main router registration
  .get(function (req, res) {
    function readMessageContent(err, data) {
      parser.parseString(data, function (err, result) {
        const pathViews = req.app.locals.pathViews;
        res.render(`${pathViews}${makeNoteViewPath}makeNote`, {
          notes: result.body,
        });
      });
    }
    fs.readFile(
      `${makeNotePagePath}messageContent.xml`,
      "utf8",
      readMessageContent
    );
  })
  .post(function (req, res) {
    var msg = req.body.message;
    var fileContent = msg + "\n\r"; //line brake on every message;
    //append message with a xml file;
    fs.appendFile(`${makeNotePagePath}message.txt`, fileContent, function (
      err
    ) {
      if (err) throw err;

      fs.readFile(`${makeNotePagePath}message.txt`, "utf8", function (
        err,
        data
      ) {
        if (err) {
          return console.log("can not read file");
        }

        var options = { encoding: "utf8" };
        var stream = fs.createWriteStream(
          `${makeNotePagePath}messageContent.xml`,
          options
        );
        stream.once("open", function (fd) {
          stream.write('<?xml version="1.0" encoding="UTF-8"?>');
          stream.write("<body><![CDATA[" + data + "]]></body>");
          stream.end();
        });

        //display update xml file in panel
        setTimeout(function () {
          fs.readFile(
            `${makeNotePagePath}messageContent.xml`,
            "utf8",
            function (err, data) {
              parser.parseString(data, function (err, result) {
                console.log(result.body);
                //for some reason redirect doenst need absolute path
                res.redirect("/makeNote");
              });
            }
          );
        }, 1000);
      });
    });
  });

/**
 * since forms only accepsts POST (encrypted send data) and GET (send string Values in url)
 *
 * thefore they dont accept either DELETE, PUT or PATCH
 *
 * therefore we needed to create addtional route to original main route registered which is : /makeNote
 *
 * as below:
 * app.use("/makeNote", makeNoteRouter);
 *
 *
 */

//this route represents makeNote/delete
makeNoteRouter.route("/delete").post(function (req, res) {
  console.log("delete action......");
  fs.unlink(`${makeNotePagePath}message.txt`, function (err) {
    // Ignore error if no file already exists
    if (err && err.code !== "ENOENT") throw err;

    //crate empty xml to display in pannel
    var options = { encoding: "utf8" };
    var stream = fs.createWriteStream(
      `${makeNotePagePath}messageContent.xml`,
      options
    );
    stream.once("open", function (fd) {
      stream.write('<?xml version="1.0" encoding="UTF-8"?>');
      stream.write("<body><![CDATA[]]></body>");
      stream.end();
    });

    var optionss = { flag: "w" };
    fs.writeFile(`${makeNotePagePath}message.txt`, "", optionss, function (
      err
    ) {
      if (err) throw err;

      console.log("empty file saved");
      setTimeout(function () {
        fs.readFile(`${makeNotePagePath}message.txt`, "utf8", function (
          err,
          data
        ) {
          //for some reason redirect doenst need absolute path
          res.redirect("/makeNote");
        });
      }, 1000);
    });
  });
});

module.exports = makeNoteRouter;
