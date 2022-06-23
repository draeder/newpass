#! /usr/bin/env node
const crypto = require('crypto')

const LCERROR = '\x1b[31m%s\x1b[0m'; //red
const LCWARN = '\x1b[33m%s\x1b[0m'; //yellow
const LCINFO = '\x1b[36m%s\x1b[0m'; //cyan
const LCSUCCESS = '\x1b[32m%s\x1b[0m'; //green

let pass = crypto.randomBytes(20).toString('base64')
let args = process.argv

args[2] === '-s' ? pass = seedPass(args[3]) : pass = pass

function seedPass(input){
  let strong = strength(input)
  if(strong != 'strong') {
    console.log(LCERROR, 'Error: Please ensure the seed string is 8 characters or more, and contains a mixture of upper and lower case, numbers and special characters.')
    console.log(LCINFO, 'Here is a randomly generated password:')
    return pass
  }
  try{
    return crypto.createHash('sha256').update(input).digest('base64');
  }
  catch (err) {
    console.log(LCERROR, 'Error: Must provide a string in quotes after -s')
    console.log(LCINFO, 'Here is a randomly generated password:')
    return pass
  }
}

function strength(pass) {
  let strongRegex = new RegExp("^(?=.{14,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$", "g");
  let enoughRegex = new RegExp("(?=.{8,}).*", "g");
  if (false == enoughRegex.test(pass)) {
    return 'more'
  } else if (strongRegex.test(pass)) {
    return 'strong'
  } else {
    return 'weak'
  }
}

pass = pass.match(/.{1,10}/g).join('-');
console.log(LCSUCCESS, pass)
