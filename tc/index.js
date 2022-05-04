var Censoring    = require('censoring'),
    scan         = new Censoring(),
    testSentence = '';

    var Censoring    = require('censoring'),
    scan         = new Censoring(),
    testSentence = '';

// Enable filters we want to use
scan.enableFilters(['phone_number', 'email_address', 'words']);

// scan.setReplacementString('pony')// Returns '***'

scan.setHighlightColor('#ff0');

// Word
testSentence += 'The 1nt3r.n.e.t will not be censored! ';

// Phone number
testSentence += 'Call me on 555-123456';

// Email address
testSentence += ', or send an email to me[at]example(dot)com.';

// Let's make the word internet illegal.
scan.addFilterWord('internet');

// Tell the scanner we're done, and it can prepare the results.
scan.prepare(testSentence);

// Did we have a match?
if (scan.test()) {
  console.log(
    'We had a match! Here it is, but censored:',
    scan.replace()
  );

  // The *** will not be censored! Call me on ***, or send an email to ***.
}