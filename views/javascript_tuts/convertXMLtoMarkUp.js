const fs = require('fs');
const path = require('path');
const { parseString } = require('xml2js');

// Function to read and process an XML file
function processXmlFile(filePath) {
  fs.readFile(filePath, 'utf-8', (err, data) => {
    if (err) {
      console.error(`Error reading file ${filePath}:`, err);
    } else {
      // Parse XML content using xml2js
      parseString(data, (parseErr, result) => {
        if (parseErr) {
          console.error(`Error parsing XML from file ${filePath}:`, parseErr);
        } else {
          console.log(`Contents of ${filePath}:`, result);
        }
      });
    }
  });
}

// Function to iterate through files in a directory
function processFilesInDirectory(directoryPath) {
  fs.readdir(directoryPath, (err, files) => {
    if (err) {
      console.error(`Error reading directory ${directoryPath}:`, err);
    } else {
      // Iterate through files
      files.forEach(file => {
        const filePath = path.join(directoryPath, file);

        // Check if it's a directory or a file
        fs.stat(filePath, (statErr, stats) => {
          if (statErr) {
            console.error(`Error checking stats for file ${filePath}:`, statErr);
          } else {
            if (stats.isFile() && path.extname(filePath) === '.xml') {
              // If it's a .xml file, process it
              processXmlFile(filePath);
            } else if (stats.isDirectory()) {
              // If it's a directory, recursively process its files
              processFilesInDirectory(filePath);
            }
          }
        });
      });
    }
  });
}

// Start processing files in a specific directory
const targetDirectory = process.argv[1]
console.log(targetDirectory,targetDirectory)
processFilesInDirectory(targetDirectory);

