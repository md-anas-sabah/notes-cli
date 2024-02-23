const fs = require("fs");
const chalk = require("chalk");

const addNotes = (title, body) => {
  const notes = loadNotes();

  // const duplicateNotes = notes.filter((note) => note.title === title);
  const duplicateNote = notes.find((note) => note.title === title);

  if (!duplicateNote) {
    notes.push({
      title,
      body,
    });
    saveNotes(notes);
    console.log(chalk.bgGreen("Note Added Successfully!!"));
  } else {
    console.log(chalk.bgRed("Notes title already taken"));
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

const listNotes = () => {
  console.log(chalk.bgWhite("Your Notes:"));
  const notes = loadNotes();
  notes.forEach((note) => console.log(note.title));
};

const readNotes = (title) => {
  const notes = loadNotes();
  const note = notes.find((note) => note.title === title);
  if (note) {
    console.log(chalk.inverse(note.title));
    console.log(note.body);
  } else {
    console.log(chalk.bgRed("Note not found!!"));
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
  addNotes,
  removeNotes,
  listNotes,
  readNotes,
};
