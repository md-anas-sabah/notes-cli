const fs = require("fs");

const getNotes = function () {
  return "Your notes";
};

const addNotes = function (title, body) {
  const notes = loadNotes();
  
};

const loadNotes = function () {
  const dataBuffer = fs.readFileSync("notes.json");
  const jsonData = dataBuffer.toString();
  return JSON.parse(jsonData);
};

module.exports = {
  getNotes,
  addNotes,
};
