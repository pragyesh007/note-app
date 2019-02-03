console.log('starting notes.js');


const fs = require('fs');

 var fetchNotes = () =>
 {
   try
   {
     var notes = fs.readFileSync('notes-data.json');
     return JSON.parse(notes);
   }
   catch(e)
   {
     return [];
   }
 };

 var saveNotes = (notes) =>
 {
   fs.writeFileSync('notes-data.json',JSON.stringify(notes));
 };

var addNote = (title,body) =>
{
  var notes = fetchNotes();
  var note = {
    title,
    body
  };

var duplicatesNodes = notes.filter((note) =>  note.title === title );

if(duplicatesNodes.length === 0 )
{
   notes.push(note);
   saveNotes(notes);
   return note;
 }
};

var removeNote = (title) =>
{
  var notes = fetchNotes();
  var filteredNote = notes.filter((note) => note.title !== title ) ;
  saveNotes(filteredNote);
  return notes.length !== filteredNote.length;
}

var getNote = (title) =>
{
  var notes = fetchNotes();
  var filteredNote = notes.filter((note) => note.title === title ) ;
  return filteredNote[0];
}
var getAll = () =>
{
  var notes = fetchNotes();
  return notes;
}
var printNote = (note) =>
{
  console.log('--');
  console.log(`title: ${note.title}`);
  console.log(`body: ${note.body}`);
}
module.exports =
{
  addNote,
  removeNote,
  getNote,
  printNote,
  getAll
};
