const fs = require("fs");
const path = require("path");
const process = require("process");

const javascirpt_tuts_path = ".././javascript_tuts";
const destinationListPath = "./src/partials/";

module.exports = {
  createList: () => {
    return new Promise(resolve => {
      fs.exists(javascirpt_tuts_path, exists => {
        if (exists) {
          fs.readdir(javascirpt_tuts_path, (err, files) => {
            if (err) {
              process.exit(1);
            }
            files.forEach(file => {
              fs.stat(path.dirname(file), (error, stat) => {
                // only _tuts directories
                if (stat.isDirectory() && /_tuts$/.test(file)) {
                  let currentPath = path.join(
                    __dirname,
                    javascirpt_tuts_path,
                    file
                  );

                  console.log("directories: ", file);

                  fs.readdir(currentPath, (err, fileContent) => {
                    fileContent
                      .filter(fn => fn.includes(".html"))
                      .forEach(html => {
                        let htmlPath = path.join(currentPath, html);
                        fs.readFile(htmlPath, "utf8", (err, htmlContent) => {
                          const regex = /<!--list-tag-->([\w\s\r\W]+)<!--end-list-tag-->/gm;
                          let lists = htmlContent.match(regex);
                          //empty file first;
                          fs.truncate(
                            destinationListPath + "_all_tuts_lists.html",
                            0,
                            () => {
                              //find only list content;
                              if (lists) {
                                lists.forEach((list, i) => {
                                  fs.appendFile(
                                    destinationListPath +
                                      "_all_tuts_lists.html",
                                    `<li style='text-align:center;border-bottom:2px dashed orange;text-transform: uppercase;'>${file}</li>\n ${list} \n`,
                                    () => {
                                      if (i === list.length - 1) {
                                        resolve("Promise kept");
                                      }
                                    }
                                  );
                                });
                              }
                            }
                          );
                        });
                      });
                  });
                }
              });
            });
          });
        } else {
          console.log("\x1b[0m", "\n");
          console.log("\x1b[31m", ".....check your initial path !!!...");
          console.log("\x1b[0m", "\n");
        }
      });
    });
  }
};
