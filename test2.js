const AnonymousNames = require("anonymous-names").AnonymousNames;

const generator = new AnonymousNames();

const request = anon.generateAnonymousName().then(response => console.log(response));