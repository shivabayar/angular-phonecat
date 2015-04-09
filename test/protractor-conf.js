exports.config = {
  allScriptsTimeout: 11000,

  specs: [
    'e2e/*.js'
  ],

//  chromeOnly: true,

  baseUrl: 'http://localhost:8000/#/phones',

  framework: 'jasmine',
  seleniumAddress: 'http://0.0.0.0:4444/wd/hub',
  
  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000,
    showColors: true
  },
  capabilities : {
      'browserName' : 'chrome',
      'chromeOptions': {
          args: ['--test-type']
      }
  }
};
