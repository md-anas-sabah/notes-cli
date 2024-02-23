const chalk = require("chalk");
const yargs = require("yargs");
const notes = require("./notes.js");

yargs.version("1.1.0");

// add, remove, read, list

// Create add command
yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Note Body",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.addNotes(argv.title, argv.body);
  },
});

// Create remove command
yargs.command({
  command: "remove",
  describe: "Remove a note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.removeNotes(argv.title);
  },
});

// Reading a note
yargs.command({
  command: "read",
  describe: "Read a note",
  handler() {
    console.log("Reading a note");
  },
});

// List all the node
yargs.command({
  command: "list",
  describe: "Listing all the node",
  handler() {
    console.log("Listing the node");
  },
});

yargs.parse(); // console.log(yargs.argv); <---- Alternative
