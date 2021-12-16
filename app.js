const yargs = require('yargs')
const { argv } = require('yargs')

const notes = require('./notes.js')

yargs.command({
  command: 'add',
  describe: 'Add a new note', 
  builder: {   
      title: { 
          describe: 'Note Title',
          demandOption: true,   
          type: 'string'      
      },
      author: { 
          describe: 'Note Body',
          demandOption: true,   
          type: 'string'       
      },
      desc: { 
          describe: 'Note Description',
          demandOption: true,   
          type: 'string'       
      }
  },
  handler (argv) { //Step 4 
  console.log("********")
    notes.addNote(argv.title,argv.author,argv.desc)
  }
}) 

yargs.command({
  //build the remove command as above depending on what you need
  command : 'remove',
   describe: "Removing a Note",
   builder: {
       title : {
           describe: 'Note Title',
           demandOption: true,
           type : 'string'
       }
   },
   handler: function(argv){
       notes.removeNote(argv.title);		
   }
}) 



yargs.command({
  //build the list command depending on what you need
  command : 'list',
  describe: "Listing a Note",
  handler: function(argv){
      notes.listNotes();		
  }
}) 


yargs.command({
    //build the read command as above depending on what you need
    command : 'read',
     describe: "Reading a Note",
     builder: {
         title : {
             describe: 'Note Title',
             demandOption: true,
             type : 'string'
         }
     },
     handler: function(argv){
         notes.readNote(argv.title);		
     }
  }) 

yargs.parse()  // run as "node app_args.js add --title="Shopping List"
