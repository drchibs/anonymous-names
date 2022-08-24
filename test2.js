const AnonymousNames = require("anonymous-names").AnonymousNames;

const generator = new AnonymousNames();

const request = generator.generateAnonymousName().then(response => console.log(response));