import { Template } from 'meteor/templating';

import './slangs.html';

Template.body.helpers({
  slangs: [
    { slang: "Yoruba Demon",
      definition: "Nigerian guy (yoruba) who goes after a young lady's heart with no intention of loving her. They are typically met at parties, and would mostly wear white agbada."
    },
    { slang: "Bye Felicia",
      definition: "The perfect dismissal phrase for waving goodbye to someone or something unimportant."
    },
    { slang: "GOAT",
      definition: "An acronym for praising someone doing well in a certain activity. 'Greatest of all time'."
    },
    { slang: "Low key",
      definition: "Keeping some activity or news under wraps."
    },
  ],
});