#!/usr/bin/env node

var Glob = require('glob').Glob
var fs = require('fs')
var path = require('path')
var argv = require('optimist')
    .usage('Convert a pile of matching files to base64.\n Usage: $0')
    .demand('p')
    .alias('p', 'pattern')
    .describe('p', 'The pattern to match when converting files')
    .demand('d')
    .alias('d', 'directory')
    .describe('d', 'The directory we\'re working in')
    .argv

var pattern = argv.p
  , directory = argv.d

var glob = new Glob(pattern,{ cwd: directory})

glob.on('match', function(file) {
  if(file.indexOf('.base64') >= 0) return
  file = path.join(directory, file)
  fs.readFile(file, 'base64', function(err, data) {
    if(err) return handleError(err)
    console.log('Processing', file)
    fs.writeFile(file + '.base64', data, 'utf8')
  })
})
glob.on('end', function() {

})
glob.on('error', handleError)




function handleError(err) { 
  console.error(err)
}

