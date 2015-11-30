var chokidar = require('chokidar');
var colors = require('colors');
var program = require('commander');


program
  .version('0.0.1')
  .option('-w, --watch','Parse Files')
  .parse(process.argv);

if(program.watch)
{
  chokidar.watch('.', {ignored: /[\/\\]\./,ignoreInitial: true,}).on('all', function(event, path) {
    console.log(event.cyan,path.green);
    console.log('sent into'.blue,' parser'.cyan);
    console.log('file succesfully updated'.red);
  });
}




// One-liner for current directory, ignores .dotfiles
/*chokidar.watch('.', {ignored: /[\/\\]\./,ignoreInitial: true,}).on('all', function(event, path) {
  console.log(event.cyan,path.green);
});

*/
