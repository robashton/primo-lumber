var Glob = require('glob').Glob
var argv = require('optimist')
    .usage('Convert a pile of matching files to base64.\n Usage: $0')
    .demand('p')
    .alias('p', 'pattern')
    .describe('f', 'The pattern to match when converting files')
    .argv


var glob = new Glob(argv.p)
glob.on('match', function(file) {
  console.log(file)
})





