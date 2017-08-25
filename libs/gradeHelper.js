const Mocha = require('mocha');
const fs = require('fs');
const path = require('path');
const mocha = new Mocha();
const testDir = 'test'

var passingTestCount = 0;
var failedTestCount = 0;

fs
  .readdirSync(testDir)
  .filter(function(file) {
    return file.substr(-3) === '.js';
  })
  .forEach(function(file) {
    mocha.addFile(path.join(testDir, file));
  });

mocha
  .run()
  .on('suite end', function(test) {
    // suite is finished
  })
  .on('end', function() {
    // all tests are finished
    console.log('All test suites are done.');
    console.log(`Passed ${passingTestCount} tests.`);
    console.log(`Failed ${failedTestCount} tests.`);
  })
  .on('pass', function(test) {
    // single test passed
    console.log('TEST PASSED');
    passingTestCount++;
  })
  .on('fail', function(test, err) {
    // single test failed
    console.log('TEST FAILED');
    //console.log(err);
    failedTestCount++;
  })
