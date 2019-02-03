console.log('Starting app !');

var fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');
const notes = require('./notes.js');
var command = process.argv[2];
var titleOptions =
{
  describe:'Title of Note',
  demand:true,
  alias:'t'
};
var bodyOptions =
{
  describe:'Body of Note',
  demand:true,
  alias:'b'
};
//console.log('command:', command);
//console.log(process.argv);
//console.log(yargs.argv);
var argv = yargs
.command('add','add a new note',
{
  title:titleOptions,
  body:bodyOptions
})
.command('read','read a  note',
{
  title:titleOptions
})
.command('listAll','listing all notes')
.command('remove','remove a note',
{
  title:titleOptions
})
.help()
.argv;
if(command === 'add')
{
  debugger;
  var note = notes.addNote(argv.title,argv.body);
  if(note)
  {
    console.log('node created');
    notes.printNote(note);
  }
  else
  {
    console.log(`node already taken`);
  }
}
else if(command === 'remove')
{
  var noteRemoved = notes.removeNote(argv.title);
  var message = noteRemoved ? 'note was removed' : 'note not found';
  console.log(message);
}
else if(command === 'read')
{
  var note = notes.getNote(argv.title);
  if(note)
  {
    console.log('note  found');
    notes.printNote(note);
  }
  else
  {
    console.log('note not found');
  }
}
else if(command === 'listAll')
{
  var notesAll = notes.getAll();
  if(notesAll)
  {
    console.log(`printing ${notesAll.length} notes.`);
    notesAll.forEach((note) => notes.printNote(note));
  }
  else
  {
    console.log('note not found');
  }
}
else
{
  console.log('invalid command');
}
