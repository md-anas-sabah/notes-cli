const fs = require("fs");
const chalk = require("chalk");

const getNotes = () => {
  return "Your notes";
};

const addNotes = (title, body) => {
  const notes = loadNotes();

  const duplicateNotes = notes.filter((note) => note.title === title);

  if (duplicateNotes.length === 0) {
    notes.push({
      title,
      body,
    });
    saveNotes(notes);
    console.log("New notes added");
  } else {
    console.log("Notes title taken");
  }
};

const removeNotes = (title) => {
  const notes = loadNotes();
  const notesToKeep = notes.filter((note) => note.title !== title);

  if (notes.length > notesToKeep.length) {
    console.log(chalk.bgGreen("Notes Removed"));
    saveNotes(notesToKeep);
  } else {
    console.log(chalk.bgRed("No Note Found"));
  }
};

const saveNotes = (notes) => {
  const jsonData = JSON.stringify(notes);
  fs.writeFileSync("notes.json", jsonData);
};

const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync("notes.json");
    const jsonData = dataBuffer.toString();
    return JSON.parse(jsonData);
  } catch {
    return [];
  }
};

module.exports = {
  getNotes,
  addNotes,
  removeNotes,
};
